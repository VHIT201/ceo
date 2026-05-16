"use client";

import Image from "next/image";
import { useI18n } from "../i18n/I18nContext";
import { MagneticButton } from "../components/MagneticButton";

export function Hero() {
  const { dict } = useI18n();
  return (
    <section className="relative min-h-dvh flex items-center overflow-x-hidden">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 py-32 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-8 min-w-0">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text">
              {dict.hero.role}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground">
              {dict.hero.nameLine1}
              <br />
              {dict.hero.nameLine2}
            </h1>

            <p className="text-lg md:text-xl text-muted-text leading-relaxed max-w-md">
              {dict.hero.manifesto}
            </p>

            <MagneticButton
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background hover:brightness-110 transition-all duration-200 active:translate-y-px"
            >
              <a href="#contact">{dict.hero.cta}</a>
            </MagneticButton>
          </div>

          {/* Right: Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative aspect-4/5 w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10" />
            <Image
              src="/ceotuyen.png"
              alt="Trần Thanh Tuyền — CEO & Managing Director, MeU Solutions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator — subtle line, no chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-border-subtle" />
      </div>
    </section>
  );
}
