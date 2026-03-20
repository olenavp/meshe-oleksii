import Image from "next/image";
import Button from "../ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-30 min-h-screen w-full overflow-hidden flex flex-col bg-surface-dark-alt"
    >
      <div className="absolute inset-0 z-10 w-full overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Київ"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover opacity-40"
          priority
          fetchPriority="high"
          quality={70}
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full flex-grow flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-3xl pt-24 pb-10 flex flex-col items-center">
          <div className="w-full">
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-4 md:mb-6">
              <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Логотип"
                  fill
                  unoptimized={true}
                  className="rounded-full object-contain"
                />
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-montserrat)",
                }}
                className="font-montserrat font-[900] uppercase text-white tracking-[-0.05em] text-2xl md:text-4xl lg:text-5xl leading-[0.9] [text-stroke:1px_theme(colors.yellow-dark)]"
              >
                МЕШЕ&nbsp;ОЛЕКСІЙ
              </h1>
            </div>

            <h2 className="mt-6 text-white text-base md:text-xl mx-auto max-w-2xl leading-relaxed font-sans">
              Комплексі послуги для бізнесу з маркетингу та
              реклами, оподаткування, комерційної
              діяльності, форм ведення бізнесу та
              менеджменту ІТ проєктів.
            </h2>

            <div className="mt-8">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
