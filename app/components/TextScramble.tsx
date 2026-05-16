"use client";

import { useEffect, useRef, useState } from "react";

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  const [display, setDisplay] = useState(text.replace(/[^\s]/g, "\u00A0"));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      let frame = 0;
      const totalFrames = 24;
      const target = text;

      const interval = setInterval(() => {
        frame++;
        if (frame >= totalFrames) {
          setDisplay(target);
          clearInterval(interval);
          return;
        }

        const progress = frame / totalFrames;
        const result = target
          .split("")
          .map((char, i) => {
            if (/\s/.test(char)) return char;
            if (i < target.length * progress * 1.2) {
              if (Math.random() > 0.3) return target[i];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplay(result);
      }, 45);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={`${className} font-mono`}>{display}</span>;
}
