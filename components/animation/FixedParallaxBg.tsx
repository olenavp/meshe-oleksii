import Image from "next/image";

export function FixedParallaxBg() {
  return (
    <div className="fixed inset-0 z-[-10] w-full h-full pointer-events-none">
      <Image
        src="/images/parallax.jpg"
        alt="Фон сторінки"
        fill
        priority={false}
        sizes="100vw"
        quality={70}
        className="object-cover object-top grayscale-[0.5] brightness-[0.9]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
}