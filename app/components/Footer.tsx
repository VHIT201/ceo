"use client";

import { useI18n } from "../i18n/I18nContext";

export function Footer() {
  const { dict } = useI18n();
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-hidden">
        <p className="text-sm text-muted-text">
          &copy; {new Date().getFullYear()} {dict.footer.copyright}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-muted-text hover:text-foreground transition-colors"
          >
            {dict.footer.privacy}
          </a>
          <a
            href="#"
            className="text-sm text-muted-text hover:text-foreground transition-colors"
          >
            {dict.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
