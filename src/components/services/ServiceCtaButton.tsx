"use client";

import { analytics } from "@/lib/analytics";
import React from "react";

interface ServiceCtaButtonProps {
  href: string;
  serviceName: string;
  label: string;
  location: string;
  className?: string;
  isExternal?: boolean;
  isWhatsApp?: boolean;
  children: React.ReactNode;
}

export function ServiceCtaButton({
  href,
  serviceName,
  label,
  location,
  className = "",
  isExternal = false,
  isWhatsApp = false,
  children,
}: ServiceCtaButtonProps) {
  const handleClick = () => {
    analytics.trackServiceCtaClick(serviceName, label, location);
    if (isWhatsApp) {
      analytics.trackWhatsAppClick(location);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}
