"use client";

import { useI18n } from "../i18n/I18nContext";

export function Bio() {
  const { dict } = useI18n();
  return (
    <section className="py-24 md:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 w-full">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-8">
              {dict.bio.label}
            </p>
            {dict.bio.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-lg md:text-xl leading-relaxed max-w-[65ch] ${
                  i === 0 ? "text-foreground" : "text-muted-text mt-6"
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 flex items-start min-w-0">
            <blockquote className="relative pl-6 border-l-2 border-accent">
              <p className="text-2xl md:text-3xl font-medium leading-snug text-foreground">
                {dict.bio.quote}
              </p>
              <footer className="mt-6 text-sm text-muted-text uppercase tracking-wide">
                {dict.bio.quoteAuthor}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
