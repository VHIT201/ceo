"use client";

import { Quote } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

export function Press() {
  const { dict } = useI18n();
  return (
    <section className="py-24 md:py-32 bg-deep-ink overflow-x-hidden" id="press">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-12">
          {dict.press.label}
        </p>

        {/* Publication logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-20 w-full">
          {dict.press.pubs.map((pub) => (
            <div key={pub} className="flex items-center justify-center h-14 text-muted-text text-sm font-medium tracking-wide uppercase border border-border-subtle rounded-lg hover:text-foreground hover:border-[rgba(255,255,255,0.15)] transition-all duration-200 px-4 text-center">
              {pub}
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {dict.press.quotes.map((q) => (
            <div key={q.source} className="relative bg-surface border border-border-subtle rounded-2xl p-8 md:p-10">
              <Quote
                size={32}
                className="text-accent/20 mb-4"
                strokeWidth={1.5}
              />
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                {q.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-accent" />
                <span className="text-sm text-muted-text">
                  {q.source}, {q.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
