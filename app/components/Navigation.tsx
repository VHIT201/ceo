"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

export function Navigation() {
  const { dict, toggleLocale, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: dict.navigation.links.about, href: "/#about" },
    { label: dict.navigation.links.career, href: "/#career" },
    { label: dict.navigation.links.products, href: "/#products" },
    { label: dict.navigation.links.values, href: "/#values" },
    { label: dict.navigation.links.press, href: "/#press" },
    { label: dict.navigation.links.insights, href: "/insights" },
    { label: dict.navigation.links.contact, href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            {dict.navigation.brand}
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-text hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 text-sm font-medium text-muted-text hover:text-foreground transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={16} strokeWidth={1.5} />
              {locale === "en" ? "VI" : "EN"}
            </button>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background hover:brightness-110 transition-all active:translate-y-px"
            >
              {dict.navigation.cta}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background border-b border-border-subtle"
          >
            <div className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-text hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLocale();
                  setOpen(false);
                }}
                className="flex items-center gap-2 text-base font-medium text-muted-text hover:text-foreground transition-colors"
              >
                <Globe size={16} strokeWidth={1.5} />
                {locale === "en" ? "VI" : "EN"}
              </button>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background"
              >
                {dict.navigation.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
