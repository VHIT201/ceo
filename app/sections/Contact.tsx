"use client";

import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

export function Contact() {
  const { dict } = useI18n();
  return (
    <section className="py-24 md:py-32 overflow-x-hidden" id="contact">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
          {/* Left: Copy */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-8">
              {dict.contact.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-foreground mb-6">
              {dict.contact.title}
            </h2>
            <p className="text-lg text-muted-text leading-relaxed max-w-[50ch]">
              {dict.contact.desc}
            </p>
          </div>

          {/* Right: Contact card */}
          <div className="bg-surface border border-border-subtle rounded-2xl p-8 md:p-10 flex flex-col gap-6">
            <a
              href="mailto:contact@meu-solutions.com"
              className="group flex items-center justify-between p-4 rounded-xl bg-background border border-border-subtle hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center">
                  <Mail size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-text">{dict.contact.emailLabel}</p>
                  <p className="text-base font-medium text-foreground">
                    contact@meu-solutions.com
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-text group-hover:text-accent transition-colors"
                strokeWidth={1.5}
              />
            </a>

            <a
              href="tel:+842871099879"
              className="group flex items-center justify-between p-4 rounded-xl bg-background border border-border-subtle hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center">
                  <Globe
                    size={18}
                    className="text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-text">{dict.contact.phoneLabel}</p>
                  <p className="text-base font-medium text-foreground">
                    (+84) 2871099879
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-text group-hover:text-accent transition-colors"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
