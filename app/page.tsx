import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/ui/footer";
import Reveal from "@/components/animation/Reveal";
import { FixedParallaxBg } from "@/components/animation/FixedParallaxBg";
import Image from "next/image";

export default function Home1() {
  return (
    <>
      <Navbar />

      <FixedParallaxBg />

      <main className="relative">
        <Hero />
        <div className="relative h-screen overflow-hidden z-5">
          <div className="absolute inset-0 pointer-events-none [clip-path:inset(0)]">
            <div className="fixed inset-0 w-full h-full z-1 bg-surface-dark-alt">
              <Image
                src="/images/meshe-oleksii.png"
                alt="Меше Олексій"
                fill
                className="object-cover object-top lg:object-contain lg:object-center"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-white">
          <Reveal>
            <Services />
          </Reveal>
          <Reveal>
            <About />
          </Reveal>
        </div>

        <div className="h-screen md:h-[120vh] w-full bg-transparent"></div>

        <div className="relative z-10 bg-white">
          <Reveal>
            <Contact />
          </Reveal>
          <Footer />
        </div>
      </main>
    </>
  );
}
