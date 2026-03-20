import Image from "next/image";
import Button from "./Button";

export function Footer() {
  return (
    <footer className="relative flex flex-col min-h-87.5 md:min-h-125 overflow-hidden w-full">
      <div className="absolute inset-0 pointer-events-none [clip-path:inset(0)]">
        <div className="fixed inset-0 w-full h-full">
          <Image
            src="/images/footer.jpg"
            alt="Київ"
            fill
            priority
            className="object-cover object-left md:object-center scale-110 md:scale-100 brightness-110  transition-all duration-500"
          />
          <div className="absolute inset-0 bg-surface-dark-alt/70"></div>
        </div>
      </div>

      <div className="relative grow flex flex-col z-10 mx-auto w-full max-w-7xl px-6 pt-16 pb-4">
        {" "}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Логотип адвоката Меше"
              width={30}
              height={30}
              className="h-8 w-8 text-yellow-dark transition-transform duration-500 group-hover:scale-120"
            />
            <h2 className="text-white text-3xl md:text-4xl font-black">
              МЕШЕ ОЛЕКСІЙ
            </h2>
          </div>
          <div className="flex flex-col gap-2.5 text-white text-lg md:text-2xl font-medium leading-normal">
            <a
              href="https://maps.app.goo.gl/SxtnkHaBamxVkWeS6"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl hover:text-yellow-dark transition-colors font-medium"
            >
              01001, м. Київ, вул. Хрещатик, 22
            </a>
            <a
              href="tel:+380938121984"
              className="transition-colors hover:text-yellow-dark"
            >
              +38 093 812 19 84
            </a>
            <a
              href="mailto:meshe.oleksii@gmail.com"
              className="block hover:text-yellow-dark transition-colors"
            >
              meshe.oleksii@gmail.com
            </a>
          </div>
          <Button />
        </div>
        <div className="mt-auto border-t border-primary-foreground/10 pt-6 px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] md:text-xs text-primary-foreground/5 uppercase tracking-widest">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
