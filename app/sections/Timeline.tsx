"use client";

import { useI18n } from "../i18n/I18nContext";

export function Timeline() {
  const { dict } = useI18n();
  return (
    <section className="py-24 md:py-32 bg-deep-ink overflow-x-hidden" id="career">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-16">
          {dict.timeline.label}
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border-subtle hidden md:block" />

          <div className="flex flex-col gap-16">
            {dict.timeline.events.map((event) => (
              <div key={event.year} className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Year */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <div className="hidden md:block w-[15px] h-[15px] rounded-full bg-accent ring-4 ring-background shrink-0" />
                  <span className="text-sm font-mono text-accent font-medium">
                    {event.year}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-9 flex flex-col gap-2 pl-0 md:pl-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {event.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-text uppercase tracking-wide">
                    {event.company}
                  </p>
                  <p className="text-base leading-relaxed text-muted-text mt-2 max-w-[60ch]">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
