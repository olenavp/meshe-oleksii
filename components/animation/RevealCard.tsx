"use client";
import { useEffect, useRef, useState } from "react";

interface RevealCardProps {
  children: React.ReactNode;
  delayClass?: string;
  className?: string;
}

export default function RevealCard({
  children,
  delayClass = "",
  className = "",
}: RevealCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05}
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col reveal-hidden ${delayClass} ${className} ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      {children}
    </div>
  );
}