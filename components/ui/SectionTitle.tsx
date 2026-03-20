import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function SectionTitle({
  children,
  color = "text-slate-900",
  className = "",
}: SectionTitleProps) {
  return (
    <>
      <h2
        style={{
          fontFamily: "var(--font-montserrat)",
        }}
        className={`text-center mt-3 text-3xl md:text-5xl uppercase font-bold tracking-tight ${color} ${className}`}
      >
        {children}
      </h2>
    </>
  );
}
