import Image from "next/image";
import WhatsappButton from "./WhatsappButton";

import { heroDetails } from "@/data/hero";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-background py-24 md:py-28 px-5"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.95))]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(254,216,53,0.12),transparent_42%)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl md:max-w-3xl">
          {heroDetails.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-foreground-accent sm:text-lg">
          {heroDetails.subheading}
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <WhatsappButton dark />
        </div>

        <div className="mt-12 w-full max-w-3xl">
          <Image
            src={heroDetails.centerImageSrc}
            width={800}
            height={520}
            quality={100}
            sizes="(max-width: 768px) 100vw, 800px"
            priority
            alt="Hero image"
            className="mx-auto w-full rounded-[2rem] object-cover shadow-xl shadow-slate-200/40"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
