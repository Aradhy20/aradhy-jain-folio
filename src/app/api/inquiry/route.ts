import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      company,
      serviceCategory,
      budgetRange,
      timeline,
      message,
      honeypot,
    } = data;

    // 1. Spam check (honeypot field must be empty)
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 15) {
      return NextResponse.json(
        { error: "Please provide a project description with at least 15 characters." },
        { status: 400 }
      );
    }

    const cleanData = {
      name: name.trim(),
      email: email.trim(),
      company: company ? String(company).trim() : "Individual / Not specified",
      serviceCategory: serviceCategory || "General Inquiry",
      budgetRange: budgetRange || "Not specified",
      timeline: timeline || "Flexible",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // 3. Log inquiry safely on server
    console.log("[INQUIRY_RECEIVED]", JSON.stringify(cleanData, null, 2));

    // 4. Send email via Gmail SMTP (Nodemailer)
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "jainaradhy123@gmail.com";

    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        const mailOptions = {
          from: `"Portfolio Inquiry" <${gmailUser}>`,
          to: recipientEmail,
          replyTo: cleanData.email,
          subject: `New Client Inquiry: ${cleanData.serviceCategory} from ${cleanData.name}`,
          text: `
New Client Project Inquiry:

Name: ${cleanData.name}
Email: ${cleanData.email}
Company: ${cleanData.company}
Service: ${cleanData.serviceCategory}
Budget: ${cleanData.budgetRange}
Timeline: ${cleanData.timeline}

Project Scope:
${cleanData.message}
          `.trim(),
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; background-color: #0b1120; color: #f8fafc; border-radius: 16px;">
              <h2 style="color: #22d3ee; margin-top: 0;">New Client Project Inquiry</h2>
              <p style="color: #94a3b8; font-size: 14px;">Received via portfolio inquiry form.</p>
              <hr style="border-color: #1e293b; margin: 16px 0;" />
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Client Name:</strong></td><td style="color: #f8fafc;">${cleanData.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Email Address:</strong></td><td style="color: #22d3ee;"><a href="mailto:${cleanData.email}" style="color: #22d3ee;">${cleanData.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Company:</strong></td><td style="color: #f8fafc;">${cleanData.company}</td></tr>
                <tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Service Required:</strong></td><td style="color: #38bdf8; font-weight: bold;">${cleanData.serviceCategory}</td></tr>
                <tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Budget Range:</strong></td><td style="color: #f8fafc;">${cleanData.budgetRange}</td></tr>
                <tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Target Timeline:</strong></td><td style="color: #f8fafc;">${cleanData.timeline}</td></tr>
              </table>
              <div style="margin-top: 20px; padding: 16px; background-color: #1e293b; border-radius: 8px;">
                <strong style="color: #94a3b8; display: block; margin-bottom: 8px;">Project Scope & Description:</strong>
                <p style="color: #f8fafc; line-height: 1.6; margin: 0; white-space: pre-wrap;">${cleanData.message}</p>
              </div>
              <p style="font-size: 12px; color: #64748b; margin-top: 24px; text-align: center;">Click reply in your email client to directly reply to ${cleanData.name}.</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
          success: true,
          delivered: true,
          message: "Inquiry successfully sent! Aradhy Jain has received your email and will respond within 24 hours.",
        });
      } catch (gmailErr) {
        console.error("Gmail SMTP dispatch error:", gmailErr);
      }
    }

    // 5. Secondary fallback: Resend API if configured
    const hasResendConfig = !!process.env.RESEND_API_KEY;

    if (hasResendConfig) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Inquiry <onboarding@resend.dev>",
            to: recipientEmail,
            subject: `New Freelance Inquiry: ${cleanData.serviceCategory} from ${cleanData.name}`,
            text: `
Name: ${cleanData.name}
Email: ${cleanData.email}
Company: ${cleanData.company}
Service: ${cleanData.serviceCategory}
Budget: ${cleanData.budgetRange}
Timeline: ${cleanData.timeline}

Project Description:
${cleanData.message}
            `.trim(),
          }),
        });

        if (res.ok) {
          return NextResponse.json({
            success: true,
            delivered: true,
            message: "Inquiry successfully sent! Aradhy Jain has received your email.",
          });
        }
      } catch (err) {
        console.error("Resend email dispatch error:", err);
      }
    }

    // 5. Honest Fallback: Server recorded the inquiry successfully, and provides direct WhatsApp and mailto links
    const prefilledSubject = encodeURIComponent(
      `Project Inquiry: ${cleanData.serviceCategory} - ${cleanData.name}`
    );
    const prefilledBody = encodeURIComponent(
      `Hi Aradhy,\n\nI submitted an inquiry via your portfolio:\n\nName: ${cleanData.name}\nEmail: ${cleanData.email}\nCompany: ${cleanData.company}\nService: ${cleanData.serviceCategory}\nBudget: ${cleanData.budgetRange}\nTimeline: ${cleanData.timeline}\n\nProject Scope:\n${cleanData.message}`
    );

    return NextResponse.json({
      success: true,
      delivered: false,
      message:
        "Your inquiry has been recorded by our server. To ensure instant delivery directly to Aradhy, you can also send it directly via WhatsApp or Email below.",
      directChannels: {
        email: "jainaradhy123@gmail.com",
        mailtoUrl: `mailto:jainaradhy123@gmail.com?subject=${prefilledSubject}&body=${prefilledBody}`,
        whatsappUrl: `https://wa.me/917351522153?text=${prefilledBody}`,
      },
    });
  } catch (error) {
    console.error("API Inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
