import { NextResponse } from "next/server";

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

    // 4. Check for configured automated email delivery service
    const hasEmailConfig = !!process.env.RESEND_API_KEY;

    if (hasEmailConfig) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Inquiry <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL || "jainaradhy123@gmail.com",
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
            message: "Inquiry successfully sent. Aradhy Jain has received your project details.",
          });
        }
      } catch (err) {
        console.error("Automated email dispatch error:", err);
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
