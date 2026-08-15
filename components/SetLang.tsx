"use client";

import { useEffect } from "react";

// The root layout renders <html lang="en"> for every route; static export
// has no per-route <html>, so the PT page corrects the attribute on mount.
export default function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
