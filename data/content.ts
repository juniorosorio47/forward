export type Locale = "en" | "pt";

export const identity = {
  name: "Dari Osorio Junior",
  email: "juniorosorio47@gmail.com",
  linkedin: "https://www.linkedin.com/in/dari-osorio-junior-developer",
  github: "https://github.com/juniorosorio47",
  timezone: "UTC-3",
};

export interface CaseStudy {
  order: string;
  client: string;
  period: string;
  title: string;
  problem: string;
  work: string[];
  stack: string[];
  links?: { label: string; href: string }[];
}

export interface Dictionary {
  langLabel: string;
  langHref: string;
  resumeHref: string;
  skipToWork: string;
  role: string;
  topResume: string;
  topAvailable: string;
  topHire: string;
  heroTitlePre: string;
  heroTitleAccent: string;
  heroSub: string;
  hireMe: string;
  receiptAria: string;
  receiptHead1: string;
  receiptHead2: string;
  receiptQty: string;
  receiptItem: string;
  receiptItems: { qty: string; item: string }[];
  receiptTotalLabel: string;
  receiptTotalValue: string;
  receiptFoot: string;
  stamp: string;
  workLabel: string;
  workTitle: string;
  problemLabel: string;
  workDidLabel: string;
  cases: CaseStudy[];
  historyLabel: string;
  history: { period: string; role: string; detail: string }[];
  historyNotePre: string;
  historyNoteLink: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutProse: string;
  facts: { label: string; value: string }[];
  checkoutLabel: string;
  checkoutTitle: string;
  subtotalLabel: string;
  subtotalValue: string;
  shippingLabel: string;
  shippingValue: string;
  totalLabel: string;
  totalValue: string;
  emailMe: string;
  footerThanks: string;
  footerLine: string;
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    langLabel: "PT",
    langHref: "pt/",
    resumeHref: "resume.pdf",
    skipToWork: "Skip to work",
    role: "Senior Full Stack Developer",
    topResume: "RESUME ↗",
    topAvailable: "AVAILABLE FOR REMOTE · ",
    topHire: "HIRE ME →",
    heroTitlePre: "I build the",
    heroTitleAccent: "checkout",
    heroSub:
      "POS terminals, self-service kiosks, event ticketing and the B2B SaaS behind them. Seven years of React, React Native, Node, Python and Ruby on Rails, shipped where people actually pay.",
    hireMe: "Hire me",
    receiptAria: "Career summary, styled as a store receipt",
    receiptHead1: "E-DEPLOY * STEFANINI * SOLO",
    receiptHead2: "FOZ DO IGUAÇU, BR · UTC-3",
    receiptQty: "QTY",
    receiptItem: "ITEM",
    receiptItems: [
      { qty: "7yr", item: "React / TypeScript" },
      { qty: "6yr", item: "Node.js APIs" },
      { qty: "6yr", item: "Python · Django · FastAPI" },
      { qty: "2yr", item: "Ruby on Rails" },
      { qty: "2x", item: "Enterprise POS platforms" },
      { qty: "1x", item: "Event-ticketing platform" },
      { qty: "1x", item: "B2B SaaS, built solo" },
    ],
    receiptTotalLabel: "TOTAL",
    receiptTotalValue: "7 YEARS",
    receiptFoot: "** SHIPPED TO PRODUCTION **",
    stamp: "PAID",
    workLabel: "ORDERS · SELECTED WORK",
    workTitle: "Four systems people pay through.",
    problemLabel: "THE PROBLEM",
    workDidLabel: "WHAT I DID",
    cases: [
      {
        order: "#004",
        client: "E-DEPLOY (AN IFOOD COMPANY)",
        period: "2025-NOW",
        title: "3S Checkout",
        problem:
          "Restaurants and markets run sales across counters, kiosks, kitchens and delivery, usually on systems that don't talk to each other.",
        work: [
          "I build full-stack features across the 3S Checkout ecosystem: embedded POS, self-service kiosks, kitchen management and delivery.",
          "Front-end interfaces wired into order management and payment processing back-ends: the part of the stack where a bug costs money at the counter.",
          "Daily work in a cross-functional squad with Product and Design, tuning user journeys to cut transaction time.",
        ],
        stack: ["React", "JavaScript", "Python"],
      },
      {
        order: "#003",
        client: "SEU MÉTODO · SOLO",
        period: "FOUNDER & DEVELOPER",
        title: "A B2B SaaS, end to end, alone",
        problem:
          "Deadline-bound service shops (labs, workshops) still run on legacy ERPs that fight how they actually work.",
        work: [
          "I designed, built and launched the whole product: a Kanban workflow engine, automated WhatsApp notifications, a white-label tracking portal.",
          "One adaptive React UI serving three contexts: a high-density backoffice, a touch-first shop floor, a public customer portal.",
          "Every decision (product, architecture, UI) was mine to make and mine to live with.",
        ],
        stack: ["React", "Django", "WhatsApp API"],
        links: [
          { label: "VISIT LIVE ↗", href: "https://seumetodo.com" },
          {
            label: "WATCH DEMO ↗",
            href: "https://www.youtube.com/watch?v=r4aiKYsN6Pk",
          },
        ],
      },
      {
        order: "#002",
        client: "YES7 TICKETS · FREELANCE",
        period: "2024-2026",
        title: "Tickets people pay in installments",
        problem:
          "Brazilian event producers needed to sell tickets online with installment payments, and run the whole operation from their pocket.",
        work: [
          "I built most of the customer-facing storefront of yes7tickets.net in Angular: browsing events, picking seats, paying in installments.",
          "Shipped backend features for the ticketing and order flows in Ruby on Rails with PostgreSQL.",
          "Built the event producer's companion app in React Native, so producers manage sales away from a desk.",
        ],
        stack: ["Angular", "Ruby on Rails", "PostgreSQL", "React Native"],
        links: [{ label: "VISIT LIVE ↗", href: "https://yes7tickets.net" }],
      },
      {
        order: "#001",
        client: "STEFANINI / CENCOSUD",
        period: "2022-2025",
        title: "Assisted-sales revamp",
        problem:
          "An enterprise retailer's assisted-sales system was slowing staff down, on mobile and on the web.",
        work: [
          "I led the UX/UI modernization end to end: stakeholder needs translated into user-centered architecture.",
          "React and React Native front-ends shipped on high-availability back-ends, streamlining checkouts to boost staff productivity.",
          "Promoted from Analyst to Senior Analyst along the way.",
        ],
        stack: ["React", "React Native", "Python", "C#"],
      },
    ],
    historyLabel: "ORDER HISTORY",
    history: [
      {
        period: "2019-2021",
        role: "Full Stack Developer",
        detail:
          "MaestroTech: case management platform for the Jamaican government",
      },
      {
        period: "2019-2022",
        role: "Global IT Support",
        detail: "Valoroso: server ops & monitoring, VOTT Platform",
      },
      {
        period: "2018-2019",
        role: "Intern Software Analyst",
        detail: "Itaipu Technological Park (CELTAB)",
      },
    ],
    historyNotePre: "Full history on the",
    historyNoteLink: "resume ↗",
    aboutLabel: "STORE INFO · ABOUT",
    aboutTitle: "The person behind the counter.",
    aboutProse:
      "I'm Dari Osorio Junior, a senior full-stack developer from the triple frontier of Brazil, Paraguay and Argentina. I've spent seven years building software for the moment money changes hands: embedded POS at an iFood company, enterprise retail systems for Cencosud, event ticketing, and a B2B SaaS I founded and built alone. I care about the pixel and the payload: interfaces people touch all day, and the back-ends that can't drop an order.",
    facts: [
      { label: "LOCATION", value: "Foz do Iguaçu, Brazil (UTC-3)" },
      { label: "WORKS", value: "Remote, worldwide" },
      {
        label: "LANGUAGES",
        value: "Portuguese (native) · English (fluent) · Spanish (advanced)",
      },
      {
        label: "STACK",
        value: "React · React Native · TypeScript · Node.js · Python · Rails",
      },
      {
        label: "CRAFT",
        value: "POS architecture · kiosk UX · WCAG 2.2 AA accessibility",
      },
    ],
    checkoutLabel: "CHECKOUT · CONTACT",
    checkoutTitle: "Ready when you are.",
    subtotalLabel: "SUBTOTAL",
    subtotalValue: "7 years of shipped software",
    shippingLabel: "SHIPPING",
    shippingValue: "remote, worldwide (UTC-3)",
    totalLabel: "TOTAL",
    totalValue: "one senior full-stack developer",
    emailMe: "Email me",
    footerThanks: "*** THANK YOU FOR YOUR VISIT ***",
    footerLine:
      "Foz do Iguaçu, Brazil · {year} · Designed & built by me, no templates.",
  },
  pt: {
    langLabel: "EN",
    langHref: "../",
    resumeHref: "../resume-pt.pdf",
    skipToWork: "Pular para os trabalhos",
    role: "Desenvolvedor Full Stack Sênior",
    topResume: "CURRÍCULO ↗",
    topAvailable: "DISPONÍVEL PARA REMOTO · ",
    topHire: "CONTRATE-ME →",
    heroTitlePre: "Eu construo o",
    heroTitleAccent: "checkout",
    heroSub:
      "Terminais POS, autoatendimento, venda de ingressos e o SaaS B2B por trás deles. Sete anos de React, React Native, Node, Python e Ruby on Rails, entregues onde as pessoas realmente pagam.",
    hireMe: "Contrate-me",
    receiptAria: "Resumo de carreira em formato de cupom fiscal",
    receiptHead1: "E-DEPLOY * STEFANINI * SOLO",
    receiptHead2: "FOZ DO IGUAÇU, BR · UTC-3",
    receiptQty: "QTD",
    receiptItem: "ITEM",
    receiptItems: [
      { qty: "7a", item: "React / TypeScript" },
      { qty: "6a", item: "APIs Node.js" },
      { qty: "6a", item: "Python · Django · FastAPI" },
      { qty: "2a", item: "Ruby on Rails" },
      { qty: "2x", item: "Plataformas POS corporativas" },
      { qty: "1x", item: "Plataforma de venda de ingressos" },
      { qty: "1x", item: "SaaS B2B, construído solo" },
    ],
    receiptTotalLabel: "TOTAL",
    receiptTotalValue: "7 ANOS",
    receiptFoot: "** ENTREGUE EM PRODUÇÃO **",
    stamp: "PAGO",
    workLabel: "PEDIDOS · TRABALHOS SELECIONADOS",
    workTitle: "Quatro sistemas por onde as pessoas pagam.",
    problemLabel: "O PROBLEMA",
    workDidLabel: "O QUE EU FIZ",
    cases: [
      {
        order: "#004",
        client: "E-DEPLOY (UMA EMPRESA IFOOD)",
        period: "2025-HOJE",
        title: "3S Checkout",
        problem:
          "Restaurantes e mercados vendem no balcão, no kiosk, na cozinha e no delivery, normalmente em sistemas que não conversam entre si.",
        work: [
          "Construo features full-stack no ecossistema 3S Checkout: POS embarcado, kiosks de autoatendimento, gestão de cozinha e delivery.",
          "Interfaces ligadas aos back-ends de gestão de pedidos e processamento de pagamento: a parte da stack onde um bug custa dinheiro no caixa.",
          "Trabalho diário em squad multidisciplinar com Produto e Design, otimizando jornadas para reduzir o tempo de transação.",
        ],
        stack: ["React", "JavaScript", "Python"],
      },
      {
        order: "#003",
        client: "SEU MÉTODO · SOLO",
        period: "FUNDADOR & DESENVOLVEDOR",
        title: "Um SaaS B2B, de ponta a ponta, sozinho",
        problem:
          "Operações de serviço com prazo (laboratórios, oficinas) ainda rodam em ERPs legados que brigam com o jeito que elas realmente trabalham.",
        work: [
          "Projetei, construí e lancei o produto inteiro: motor de workflow Kanban, notificações automáticas por WhatsApp, portal de acompanhamento white-label.",
          "Uma UI React adaptativa servindo três contextos: backoffice de alta densidade, chão de loja touch-first e portal público do cliente.",
          "Cada decisão (produto, arquitetura, UI) foi minha para tomar e minha para sustentar.",
        ],
        stack: ["React", "Django", "WhatsApp API"],
        links: [
          { label: "ACESSAR ↗", href: "https://seumetodo.com" },
          {
            label: "VER DEMO ↗",
            href: "https://www.youtube.com/watch?v=r4aiKYsN6Pk",
          },
        ],
      },
      {
        order: "#002",
        client: "YES7 TICKETS · FREELANCE",
        period: "2024-2026",
        title: "Ingressos parcelados",
        problem:
          "Produtores de eventos precisavam vender ingressos online com parcelamento e tocar a operação inteira do bolso.",
        work: [
          "Construí a maior parte do storefront de yes7tickets.net em Angular: navegar eventos, escolher lugares, pagar parcelado.",
          "Entreguei features de backend para os fluxos de ingresso e pedido em Ruby on Rails com PostgreSQL.",
          "Construí o app do produtor em React Native, para gerenciar vendas longe da mesa.",
        ],
        stack: ["Angular", "Ruby on Rails", "PostgreSQL", "React Native"],
        links: [{ label: "ACESSAR ↗", href: "https://yes7tickets.net" }],
      },
      {
        order: "#001",
        client: "STEFANINI / CENCOSUD",
        period: "2022-2025",
        title: "Revamp de venda assistida",
        problem:
          "O sistema de venda assistida de um grande varejista atrasava a equipe, no mobile e na web.",
        work: [
          "Liderei a modernização de UX/UI de ponta a ponta: necessidades de stakeholders traduzidas em arquitetura centrada no usuário.",
          "Front-ends em React e React Native sobre back-ends de alta disponibilidade, agilizando checkouts e a produtividade da equipe.",
          "Promovido de Analista a Analista Sênior no caminho.",
        ],
        stack: ["React", "React Native", "Python", "C#"],
      },
    ],
    historyLabel: "HISTÓRICO DE PEDIDOS",
    history: [
      {
        period: "2019-2021",
        role: "Desenvolvedor Full Stack",
        detail:
          "MaestroTech: plataforma de gestão de casos para o governo da Jamaica",
      },
      {
        period: "2019-2022",
        role: "Suporte de TI Global",
        detail: "Valoroso: operação e monitoramento de servidores, VOTT Platform",
      },
      {
        period: "2018-2019",
        role: "Analista de Software Estagiário",
        detail: "Parque Tecnológico Itaipu (CELTAB)",
      },
    ],
    historyNotePre: "Histórico completo no",
    historyNoteLink: "currículo ↗",
    aboutLabel: "INFORMAÇÕES DA LOJA · SOBRE",
    aboutTitle: "A pessoa atrás do balcão.",
    aboutProse:
      "Sou Dari Osorio Junior, desenvolvedor full-stack sênior da tríplice fronteira entre Brasil, Paraguai e Argentina. Passei sete anos construindo software para o momento em que o dinheiro troca de mãos: POS embarcado numa empresa iFood, sistemas de varejo enterprise para a Cencosud, venda de ingressos e um SaaS B2B que fundei e construí sozinho. Me importo com o pixel e com o payload: interfaces que as pessoas tocam o dia inteiro e back-ends que não podem perder um pedido.",
    facts: [
      { label: "LOCALIZAÇÃO", value: "Foz do Iguaçu, Brasil (UTC-3)" },
      { label: "ATUAÇÃO", value: "Remoto, mundo todo" },
      {
        label: "IDIOMAS",
        value: "Português (nativo) · Inglês (fluente) · Espanhol (avançado)",
      },
      {
        label: "STACK",
        value: "React · React Native · TypeScript · Node.js · Python · Rails",
      },
      {
        label: "OFÍCIO",
        value: "Arquitetura POS · UX de kiosk · Acessibilidade WCAG 2.2 AA",
      },
    ],
    checkoutLabel: "CHECKOUT · CONTATO",
    checkoutTitle: "Pronto quando você estiver.",
    subtotalLabel: "SUBTOTAL",
    subtotalValue: "7 anos de software entregue",
    shippingLabel: "FRETE",
    shippingValue: "remoto, mundo todo (UTC-3)",
    totalLabel: "TOTAL",
    totalValue: "um desenvolvedor full-stack sênior",
    emailMe: "Me mande um email",
    footerThanks: "*** OBRIGADO PELA VISITA ***",
    footerLine:
      "Foz do Iguaçu, Brasil · {year} · Desenhado e construído por mim, sem templates.",
  },
};
