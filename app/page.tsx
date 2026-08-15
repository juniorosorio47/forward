import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", "pt-BR": "/pt/" },
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
