import Image from "next/image";

import { Icon } from "@iconify/react";
import { SectionTitle } from "../ui/SectionTitle";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/MesheOleksii",
    icon: "simple-icons:facebook",
    color: "#1877F2",
  },
  {
    label: "Telegram",
    href: "https://t.me/mesheoleksii",
    icon: "simple-icons:telegram",
    color: "#229ED9",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-secondary/30 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <SectionTitle color="text-slate-900">
            Контакти
          </SectionTitle>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-24">
          <div className="relative group shrink-0">
            <div className="relative z-10 h-80 w-64 overflow-hidden md:h-100  shadow-2xl">
              <Image
                src="/images/advokat-meshe.jpg"
                alt="Олексій Меше"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 left-6 h-full w-full border-2 border-yellow-dark z-0" />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
              className="font-montserrat text-3xl md:text-4xl text-slate-900 font-bold"
            >
              МЕШЕ ОЛЕКСІЙ
            </h3>
            <h4 className="mt-2 uppercase text-slate-700 font-medium text-2xl">
              ФІЗИЧНА ОСОБА - ПІДПРИЄМЕЦЬ
            </h4>

            <div className="mt-12 mb-8 grid grid-cols-1 gap-y-4 ">
              <a
                href="tel:+380938121984"
                className="block text-xl text-slate-800 hover:text-yellow-dark transition-colors font-medium"
              >
                +380 93 812 19 84
              </a>

              <a
                href="mailto:meshe.oleksii@gmail.com"
                className="block text-xl text-slate-800 hover:text-yellow-dark transition-colors font-medium"
              >
                meshe.oleksii@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/SxtnkHaBamxVkWeS6"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl text-slate-800 hover:text-yellow-dark transition-colors font-medium"
              >
                01001, м. Київ, вул. Хрещатик, 22
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 mt-12">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group transition-transform hover:scale-110 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon={social.icon}
                    width={32}
                    height={32}
                    style={{ color: social.color }}
                    className="transition-opacity group-hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
