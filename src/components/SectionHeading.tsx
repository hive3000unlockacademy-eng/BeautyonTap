import React from "react";

export function SectionHeading({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold tracking-tight text-[var(--charcoal)] ${className}`}
    >
      {children}
    </h2>
  );
}
