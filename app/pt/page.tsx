import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import SetLang from "@/components/SetLang";

export const metadata: Metadata = {
  title: "Dari Osorio Junior — Eu construo o checkout",
  description:
    "Desenvolvedor full-stack sênior para terminais POS, kiosks de autoatendimento e SaaS B2B. React, React Native, Node, Python e Rails — entregues onde as pessoas realmente pagam.",
  alternates: {
    canonical: "/pt/",
    languages: { en: "/", "pt-BR": "/pt/" },
  },
  openGraph: {
    title: "Dari Osorio Junior — Eu construo o checkout",
    description:
      "Desenvolvedor full-stack sênior para POS, kiosks e SaaS B2B. 7 anos de React, Node e Python.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function HomePt() {
  return (
    <>
      <SetLang lang="pt-BR" />
      <HomePage locale="pt" />
    </>
  );
}
