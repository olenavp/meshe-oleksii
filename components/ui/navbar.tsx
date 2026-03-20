"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "Головна", href: "/" },
  { label: "Послуги", href: "#services" },
  { label: "Про мене", href: "#about" },
  { label: "Контакти", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface-dark backdrop-blur-sm border-b border-yellow-dark/30"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a
          href="#contact"
          className="flex items-center gap-2 transition-transform hover:scale-105"
          aria-label="Контакти"
        >
          <svg
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8  animate-logo-pulse"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M293.333 600v-13.333h-26.666V560H240v-26.667h26.667v-26.666h26.666V480H320v26.667h26.667v26.666h26.666V560h-26.666v26.667H320v26.666h-26.667zM186.667 480v-53.333H80V400h26.667v-26.667h26.666v-26.666H160V320h26.667v-26.667H160v-26.666h-26.667V240h-26.666v-26.667H80v-26.666h106.667V80h26.666v26.667H240v26.666h26.667V160h26.666v26.667H320V160h26.667v-26.667h26.666v-26.666H400V80h26.667v106.667H400v26.666h-26.667V240h-26.666v26.667H320v26.666h-26.667V320H320v26.667h26.667v26.666h26.666V400H400v26.667h26.667v106.666H400v-26.666h-26.667V480h-26.666v-26.667H320v-26.666h-26.667v26.666h-26.666V480H240v26.667h-26.667v26.666h-26.666zm26.666-66.667V400H240v-26.667h26.667v-26.666h26.666V320h-26.666v26.667H240v26.666h-26.667V400h-26.666v26.667h26.666zm80-133.333v-13.333h-26.666V240H240v-26.667h-26.667v-26.666h-26.666v26.666h26.666V240H240v26.667h26.667v26.666h26.666zM428 413.333V400h-26.667v-26.667h-26.57l-.381-13-.382-13-12.952-.38-12.953-.382-.38-12.952-.382-12.952-13-.382-13-.382v-25.236h25.334V268h26.666v-26.667H400v-26.666h26.667V188l32.333-.004c17.783-.002 41.783-.396 53.333-.875l21-.871v27.084h-26.666V240H480v26.667h-26.667v26.667h-26.666v28h26.666V348H480v26.844l13.336-.422 13.336-.422-.003 13-.003 13h26.667v26.667H428ZM53.333 360v-13.333H26.667V320H0v-26.667h26.667v-26.666h26.666V240H80v26.667h26.667v26.666h26.666V320h-26.666v26.667H80v26.666H53.333Zm481.334 0v-13.333H508V320h-26.667v-25.233l12.334-.384L506 294l.667-13.333.666-13.334 12.953-.38 12.952-.382.381-12.952.381-12.952 13-.382 13-.382v26.764h26.667v26.666h26.666V320h-26.666v26.667H560v26.666h-25.333ZM293.333 120v-13.333h-26.666V80H240V53.333h26.667V26.667h26.666V0H320v26.667h26.667v26.666h26.666V80h-26.666v26.667H320v26.666h-26.667z"
              fill="#df3e4d"
              fillOpacity={1}
            />
          </svg>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg uppercase tracking-widest text-primary-foreground/80 transition-all hover:text-yellow hover:underline-offset-4 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-yellow-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-primary-foreground md:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={
            mobileOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <Icon icon="lucide:x" className="h-6 w-6" />
          ) : (
            <Icon icon="lucide:menu" className="h-6 w-6" />
          )}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-yellow-dark/10 bg-surface-dark md:hidden">
          {" "}
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-yellow-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
