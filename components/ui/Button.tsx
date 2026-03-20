"use client";
import React from "react";

const Button = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="inline-block bg-yellow border-4 border-yellow-dark px-6 py-3 text-black font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300 active:opacity-80"
    >
      Консультація
    </a>
  );
};

export default Button;
