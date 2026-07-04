import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "pt" | "en" | "de" | "fr" | "es" | "it";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "it", label: "IT", flag: "🇮🇹" },
];

type Dict = {
  nav: { inicio: string; escritorio: string; atuacao: string; metodo: string; resultados: string; presenca: string; depoimentos: string; contato: string };
  cta: { solicitar: string; consultaGratuita: string; casos: string; saibaMais: string; enviar: string };
  brand: { tagline: string };
  hero: {
    badge: string;
    titleA: string;
    titleAccent: string;
    subtitle: string;
    badges: { t: string; s: string }[];
  };
  awards: { label: string; items: { y: string; t: string; s: string }[] };
  escritorio: { pill: string; titleA: string; titleAccent: string; titleB: string; body: string };
  atuacao: { pill: string; titleA: string; titleAccent: string; subtitle: string; services: { tag: string; title: string; text: string }[] };
  why: { pill: string; titleA: string; titleAccent: string; titleB: string; items: { title: string; text: string }[] };
  metodo: { pill: string; titleA: string; titleAccent: string; titleB: string; items: { t: string; d: string }[] };
  resultados: { pill: string; titleA: string; titleAccent: string; cases: { v: string; t: string; d: string }[] };
  socia: { pill: string; quote: string; llLabel: string; yearsValue: string; yearsLabel: string; chambersLabel: string; role: string; name: string };
  presenca: { pill: string; titleA: string; titleAccent: string; subtitle: string; offices: { region: string; city: string; note: string }[]; mapAlt: string };
  depoimentos: { pill: string; title: string; subtitle: string; items: { i: string; city: string; q: string }[] };
  contato: {
    pill: string; titleA: string; titleAccent: string; subtitle: string;
    emailLabel: string;
    disclaimerStrong: string; disclaimerText: string;
    fNome: string; fEmail: string; fValor: string; fValorPh: string; fDesc: string; fDescPh: string;
    success: string;
  };
  footer: { about: string; navLabel: string; contatoLabel: string; presencaLabel: string; cities: string; copyright: string; regulated: string };
};

const pt: Dict = {
  nav: { inicio: "Início", escritorio: "Escritório", atuacao: "Atuação", metodo: "Método", resultados: "Resultados", presenca: "Presença", depoimentos: "Depoimentos", contato: "Contato" },
  cta: { solicitar: "Solicitar Consulta", consultaGratuita: "Consulta Gratuita", casos: "Casos em Andamento", saibaMais: "Saiba mais", enviar: "Enviar Solicitação" },
  brand: { tagline: "Fund Recovery Agents" },
  hero: {
    badge: "Agentes registrados na FCA",
    titleA: "Seu Caminho para a",
    titleAccent: "Recuperação",
    subtitle: "Escritório de advocacia especializado em recuperação de fundos e disputas financeiras.",
    badges: [
      { t: "Sem Êxito, Sem Honorários", s: "Pagamento apenas em caso de sucesso" },
      { t: "Zero Custo Inicial", s: "Nenhum valor adiantado" },
      { t: "Registro na FCA", s: "Autoridade de conduta financeira (UK)" },
    ],
  },
  awards: {
    label: "Reconhecimento do Setor",
    items: [
      { y: "2024", t: "Menção Honrosa", s: "Recuperação de Ativos · IBA" },
      { y: "2025", t: "Escritório Recomendado", s: "Chambers Latin America" },
      { y: "2026", t: "Prática em Destaque", s: "Legal 500 · Dispute Resolution" },
    ],
  },
  escritorio: { pill: "Excelência Jurídica", titleA: "Definindo o auge da", titleAccent: "excelência jurídica", titleB: "em recuperação", body: "Reconhecida nos principais rankings jurídicos internacionais desde 2024, a FTI consolidou-se como referência em resolução de crises de alto risco. Combinamos padrões jurídicos rigorosos com inteligência de casos assistida por IA, segurança de dados de nível institucional e discrição absoluta — entregando resultados mensuráveis em disputas transfronteiriças, recuperação de fraudes e assuntos privados sensíveis." },
  atuacao: {
    pill: "Áreas de Atuação", titleA: "Nossas", titleAccent: "áreas especializadas", subtitle: "Representação jurídica especializada em recuperação financeira e resolução de disputas para clientes em todo o mundo.",
    services: [
      { tag: "Fraude Digital", title: "Recuperação de Fraudes na Internet", text: "Rastreamento e recuperação de valores perdidos em plataformas fraudulentas, transferências não autorizadas, golpes de investimento e criptoativos. Atuamos com medidas cautelares e cooperação internacional." },
      { tag: "Disputas Financeiras", title: "Disputas & Execução Bancária", text: "Bloqueios indevidos, cobranças abusivas, fraudes de investimento e execução de direitos financeiros. Estratégia completa da negociação ao litígio, com enforcement transfronteiriço." },
      { tag: "Fundos & Ativos", title: "Recuperação de Fundos de Investimento", text: "Dedicados à recuperação para vítimas de esquemas fraudulentos e má gestão. Localização de ativos, negociação de acordos e ação coordenada para devolver seu patrimônio." },
    ],
  },
  why: {
    pill: "Por Que Nos Escolher", titleA: "Expertise de confiança, abordagem", titleAccent: "centrada no cliente", titleB: "",
    items: [
      { title: "Registro na FCA", text: "Agentes registrados na Financial Conduct Authority, em conformidade rigorosa com os padrões de conduta do setor." },
      { title: "Sem Pagamento Inicial", text: "Nossa política é não cobrar valores adiantados. Trabalhamos exclusivamente por êxito." },
      { title: "Modelo por Resultado", text: "Seu sucesso é o nosso sucesso. Sem taxas escondidas, sem custo inicial, transparência absoluta." },
    ],
  },
  metodo: {
    pill: "Como Trabalhamos", titleA: "Uma abordagem", titleAccent: "clara e estruturada", titleB: "para recuperar seus fundos",
    items: [
      { t: "Análise Inicial", d: "Avaliação confidencial do caso, análise de evidências e viabilidade jurídica em 24 a 48 horas." },
      { t: "Plano de Ação", d: "Estratégia de recuperação, ordens de preservação e medidas legais imediatas para proteger seus interesses." },
      { t: "Recuperação", d: "Negociação, litígio ou enforcement coordenado entre jurisdições para reaver seus recursos." },
      { t: "Liquidação", d: "Encerramento da recuperação, transferência dos ativos e documentação completa da resolução." },
    ],
  },
  resultados: {
    pill: "Casos Emblemáticos", titleA: "Resultados que se medem em", titleAccent: "cifras e precedentes",
    cases: [
      { v: "€ 42M", t: "Fundo multimercado", d: "Ação coletiva para 2.400 cotistas com gestão fraudulenta." },
      { v: "US$ 38M", t: "Litígio cross-border", d: "Reversão de bloqueio internacional e repatriação Brasil/EUA." },
      { v: "92%", t: "Fraude cripto", d: "Rastreio on-chain e recuperação em fraude de exchange." },
    ],
  },
  socia: { pill: "Palavra da Sócia", quote: "\"A recuperação de patrimônio não começa no tribunal — começa em como se escreve a primeira linha do processo.\"", llLabel: "Columbia Law", yearsValue: "22 anos", yearsLabel: "em contencioso", chambersLabel: "Band 1 · Dispute Resolution", role: "Agente da FCA · Sócia-Fundadora", name: "Dra. Hanna Weber" },
  presenca: {
    pill: "Presença Global", titleA: "Escritórios nos principais", titleAccent: "centros financeiros",
    subtitle: "Operamos com sedes e correspondentes nos principais países da Europa, América do Norte e América do Sul, permitindo enforcement coordenado entre jurisdições.",
    mapAlt: "Mapa mundial com escritórios e correspondentes",
    offices: [
      { region: "Reino Unido", city: "Londres", note: "Sede europeia · FCA" },
      { region: "Alemanha", city: "Frankfurt", note: "BaFin liaison" },
      { region: "Suíça", city: "Zurique", note: "FINMA correspondente" },
      { region: "Espanha", city: "Madrid", note: "CNMV correspondente" },
      { region: "França", city: "Paris", note: "AMF correspondente" },
      { region: "Estados Unidos", city: "Nova York", note: "SEC / FinCEN" },
      { region: "Canadá", city: "Toronto", note: "CIRO correspondente" },
      { region: "Brasil", city: "São Paulo", note: "CVM correspondente" },
      { region: "Argentina", city: "Buenos Aires", note: "CNV correspondente" },
    ],
  },
  depoimentos: {
    pill: "Depoimentos", title: "Depoimentos", subtitle: "Relatos de clientes atendidos nos últimos 24 meses, publicados com autorização e sob acordo de confidencialidade parcial.",
    items: [
      { i: "James M.", city: "Manchester, Reino Unido", q: "Perdi cerca de £48 mil em uma corretora que sumiu da noite para o dia. Fui atendido pela equipe em três dias, entenderam meu caso e recuperaram a maior parte em quatro meses. Comunicação sempre clara." },
      { i: "Sophie L.", city: "Toronto, Canadá", q: "Depois de meses tentando resolver por conta própria, contratei o escritório. O que mais me marcou foi não ter pago nada adiantado — só quando o dinheiro voltou pra minha conta." },
      { i: "Carlos R.", city: "São Paulo, Brasil", q: "Caí em um golpe de investimento em cripto e achei que tinha perdido tudo. A equipe fez rastreamento on-chain e conseguimos reaver aproximadamente 70% do valor. Recomendo." },
      { i: "Anna K.", city: "Munique, Alemanha", q: "Processo transparente do começo ao fim. Recebia atualizações a cada duas semanas e nunca precisei correr atrás de informação. Profissionais sérios." },
      { i: "Diego P.", city: "Buenos Aires, Argentina", q: "Tinha pouca esperança de recuperar o dinheiro de um fundo mal gerido. Levou quase um ano, mas o resultado veio. Vale a paciência." },
      { i: "Rachel T.", city: "Nova York, EUA", q: "Explicaram os riscos e o prazo realista logo na primeira reunião — sem promessa milagrosa. Isso fez toda a diferença na minha decisão de seguir com eles." },
    ],
  },
  contato: {
    pill: "Consulta Reservada", titleA: "Inicie sua", titleAccent: "consulta", subtitle: "Avaliação confidencial do caso disponível em até 24 horas. Nenhum documento sensível é exigido na análise inicial.",
    emailLabel: "E-mail",
    disclaimerStrong: "Sem pagamento inicial", disclaimerText: "— trabalhamos em modelo por êxito. Sigilo e confidencialidade garantidos em conformidade com a FCA.",
    fNome: "Nome completo", fEmail: "E-mail", fValor: "Valor estimado envolvido", fValorPh: "Valor aproximado", fDesc: "Descrição do caso", fDescPh: "Compartilhe, sob sigilo, o essencial do seu caso.",
    success: "Recebemos sua mensagem. Retornaremos em até 24 horas.",
  },
  footer: {
    about: "Fund Recovery Agents. Especialistas em rastreamento e recuperação de fundos, ativos e créditos em disputas transfronteiriças.",
    navLabel: "Navegação", contatoLabel: "Contato", presencaLabel: "Presença",
    cities: "Londres · Frankfurt · Zurique · Madrid · Paris · Nova York · Toronto · São Paulo · Buenos Aires",
    copyright: "Todos os direitos reservados.", regulated: "Autorizado e regulado pela Financial Conduct Authority (FCA).",
  },
};

const en: Dict = {
  nav: { inicio: "Home", escritorio: "Firm", atuacao: "Practice", metodo: "Method", resultados: "Results", presenca: "Presence", depoimentos: "Testimonials", contato: "Contact" },
  cta: { solicitar: "Request Consultation", consultaGratuita: "Free Consultation", casos: "Active Cases", saibaMais: "Learn more", enviar: "Send Request" },
  brand: { tagline: "Fund Recovery Agents" },
  hero: {
    badge: "FCA-registered agents",
    titleA: "Your Path to",
    titleAccent: "Recovery",
    subtitle: "Law firm specialised in fund recovery and financial disputes.",
    badges: [
      { t: "No Win, No Fee", s: "Payment only upon successful recovery" },
      { t: "Zero Upfront Cost", s: "No advance payment required" },
      { t: "FCA-registered", s: "Financial Conduct Authority (UK)" },
    ],
  },
  awards: {
    label: "Industry Recognition",
    items: [
      { y: "2024", t: "Honourable Mention", s: "Asset Recovery · IBA" },
      { y: "2025", t: "Recommended Firm", s: "Chambers Latin America" },
      { y: "2026", t: "Highlighted Practice", s: "Legal 500 · Dispute Resolution" },
    ],
  },
  escritorio: { pill: "Legal Excellence", titleA: "Setting the standard of", titleAccent: "legal excellence", titleB: "in recovery", body: "Recognised across leading international legal rankings since 2024, FTI has established itself as a benchmark in high-stakes crisis resolution. We combine rigorous legal standards with AI-assisted case intelligence, institutional-grade data security and absolute discretion — delivering measurable outcomes in cross-border disputes, fraud recovery and sensitive private matters." },
  atuacao: {
    pill: "Practice Areas", titleA: "Our", titleAccent: "specialised practice areas", subtitle: "Specialised legal representation in financial recovery and dispute resolution for clients worldwide.",
    services: [
      { tag: "Digital Fraud", title: "Online Fraud Recovery", text: "Tracing and recovery of funds lost on fraudulent platforms, unauthorised transfers, investment scams and crypto assets. We act through injunctions and international cooperation." },
      { tag: "Financial Disputes", title: "Banking Disputes & Enforcement", text: "Improper freezes, abusive charges, investment fraud and enforcement of financial rights. Full strategy from negotiation to litigation, with cross-border enforcement." },
      { tag: "Funds & Assets", title: "Investment Fund Recovery", text: "Dedicated to recovery for victims of fraudulent schemes and mismanagement. Asset tracing, settlement negotiation and coordinated action to return your wealth." },
    ],
  },
  why: {
    pill: "Why Choose Us", titleA: "Trusted expertise, a", titleAccent: "client-centred", titleB: "approach",
    items: [
      { title: "FCA-registered", text: "Agents registered with the Financial Conduct Authority, in strict compliance with industry conduct standards." },
      { title: "No Upfront Payment", text: "Our policy is to charge no advance fees. We work exclusively on a success basis." },
      { title: "Results-based Model", text: "Your success is our success. No hidden fees, no upfront cost, absolute transparency." },
    ],
  },
  metodo: {
    pill: "How We Work", titleA: "A", titleAccent: "clear and structured", titleB: "approach to recovering your funds",
    items: [
      { t: "Initial Analysis", d: "Confidential case review, evidence analysis and legal feasibility within 24–48 hours." },
      { t: "Action Plan", d: "Recovery strategy, preservation orders and immediate legal measures to protect your interests." },
      { t: "Recovery", d: "Negotiation, litigation or coordinated cross-jurisdiction enforcement to recover your assets." },
      { t: "Settlement", d: "Closing of the recovery, transfer of assets and full resolution documentation." },
    ],
  },
  resultados: {
    pill: "Landmark Cases", titleA: "Results measured in", titleAccent: "figures and precedent",
    cases: [
      { v: "€ 42M", t: "Multi-strategy fund", d: "Class action for 2,400 unit-holders in a fraudulently managed fund." },
      { v: "US$ 38M", t: "Cross-border litigation", d: "Reversal of international freeze and repatriation Brazil/USA." },
      { v: "92%", t: "Crypto fraud", d: "On-chain tracing and recovery in an exchange fraud." },
    ],
  },
  socia: { pill: "Partner's Word", quote: "\"Wealth recovery does not start in court — it starts with how the first line of the case is written.\"", llLabel: "Columbia Law", yearsValue: "22 years", yearsLabel: "in litigation", chambersLabel: "Band 1 · Dispute Resolution", role: "FCA Agent · Founding Partner", name: "Dr. Hanna Weber" },
  presenca: {
    pill: "Global Presence", titleA: "Offices in the world's leading", titleAccent: "financial centres",
    subtitle: "We operate with offices and correspondents in the leading countries of Europe, North America and South America, enabling coordinated cross-jurisdiction enforcement.",
    mapAlt: "World map with offices and correspondents",
    offices: [
      { region: "United Kingdom", city: "London", note: "European HQ · FCA" },
      { region: "Germany", city: "Frankfurt", note: "BaFin liaison" },
      { region: "Switzerland", city: "Zurich", note: "FINMA correspondent" },
      { region: "Spain", city: "Madrid", note: "CNMV correspondent" },
      { region: "France", city: "Paris", note: "AMF correspondent" },
      { region: "United States", city: "New York", note: "SEC / FinCEN" },
      { region: "Canada", city: "Toronto", note: "CIRO correspondent" },
      { region: "Brazil", city: "São Paulo", note: "CVM correspondent" },
      { region: "Argentina", city: "Buenos Aires", note: "CNV correspondent" },
    ],
  },
  depoimentos: {
    pill: "Testimonials", title: "Testimonials", subtitle: "Statements from clients served in the last 24 months, published with authorisation and under a partial confidentiality agreement.",
    items: [
      { i: "James M.", city: "Manchester, United Kingdom", q: "I lost around £48k with a broker that vanished overnight. The team took on my case within three days, understood it fully and recovered most of it in four months. Communication was always clear." },
      { i: "Sophie L.", city: "Toronto, Canada", q: "After months trying to resolve it on my own, I hired the firm. What struck me most was paying nothing upfront — only once the money was back in my account." },
      { i: "Carlos R.", city: "São Paulo, Brazil", q: "I fell for a crypto investment scam and thought I'd lost everything. The team did on-chain tracing and we recovered roughly 70% of the amount. Highly recommend." },
      { i: "Anna K.", city: "Munich, Germany", q: "Transparent process from start to finish. I got updates every two weeks and never had to chase for information. Serious professionals." },
      { i: "Diego P.", city: "Buenos Aires, Argentina", q: "I had little hope of recovering money from a mismanaged fund. It took almost a year, but the result came. Worth the patience." },
      { i: "Rachel T.", city: "New York, USA", q: "They explained the risks and a realistic timeline in the very first meeting — no miracle promises. That made all the difference in deciding to go ahead." },
    ],
  },
  contato: {
    pill: "Private Consultation", titleA: "Start your", titleAccent: "consultation", subtitle: "Confidential case review available within 24 hours. No sensitive documents required for the initial analysis.",
    emailLabel: "Email",
    disclaimerStrong: "No upfront payment", disclaimerText: "— we work on a success-fee model. Confidentiality guaranteed in accordance with the FCA.",
    fNome: "Full name", fEmail: "Email", fValor: "Estimated amount involved", fValorPh: "Approximate amount", fDesc: "Case description", fDescPh: "Share, in confidence, the essentials of your case.",
    success: "We have received your message. We will reply within 24 hours.",
  },
  footer: {
    about: "Fund Recovery Agents. Specialists in tracing and recovering funds, assets and credits in cross-border disputes.",
    navLabel: "Navigation", contatoLabel: "Contact", presencaLabel: "Presence",
    cities: "London · Frankfurt · Zurich · Madrid · Paris · New York · Toronto · São Paulo · Buenos Aires",
    copyright: "All rights reserved.", regulated: "Authorised and regulated by the Financial Conduct Authority (FCA).",
  },
};

const de: Dict = {
  nav: { inicio: "Start", escritorio: "Kanzlei", atuacao: "Tätigkeit", metodo: "Methode", resultados: "Ergebnisse", presenca: "Präsenz", depoimentos: "Referenzen", contato: "Kontakt" },
  cta: { solicitar: "Beratung anfragen", consultaGratuita: "Kostenlose Beratung", casos: "Laufende Fälle", saibaMais: "Mehr erfahren", enviar: "Anfrage senden" },
  brand: { tagline: "Fund Recovery Agents" },
  hero: {
    badge: "Bei der FCA registrierte Agenten",
    titleA: "Ihr Weg zur",
    titleAccent: "Wiedererlangung",
    subtitle: "Anwaltskanzlei spezialisiert auf die Rückgewinnung von Geldern und Finanzstreitigkeiten.",
    badges: [
      { t: "Kein Erfolg, kein Honorar", s: "Zahlung nur im Erfolgsfall" },
      { t: "Keine Vorabkosten", s: "Keine Vorauszahlung erforderlich" },
      { t: "FCA-Registrierung", s: "Financial Conduct Authority (UK)" },
    ],
  },
  awards: {
    label: "Anerkennung der Branche",
    items: [
      { y: "2024", t: "Lobende Erwähnung", s: "Asset Recovery · IBA" },
      { y: "2025", t: "Empfohlene Kanzlei", s: "Chambers Latin America" },
      { y: "2026", t: "Hervorgehobene Praxis", s: "Legal 500 · Dispute Resolution" },
    ],
  },
  escritorio: { pill: "Juristische Exzellenz", titleA: "Maßstab für", titleAccent: "juristische Exzellenz", titleB: "in der Wiedererlangung", body: "Seit 2024 in den führenden internationalen Rechtsrankings anerkannt, hat sich FTI als Referenz für die Lösung von Hochrisikofällen etabliert. Wir verbinden strenge juristische Standards mit KI-gestützter Fallanalyse, Datensicherheit auf institutionellem Niveau und absoluter Diskretion — mit messbaren Ergebnissen in grenzüberschreitenden Streitigkeiten, Betrugswiedererlangung und sensiblen privaten Angelegenheiten." },
  atuacao: {
    pill: "Tätigkeitsbereiche", titleA: "Unsere", titleAccent: "spezialisierten Bereiche", subtitle: "Spezialisierte rechtliche Vertretung in Finanzwiedergewinnung und Streitbeilegung für Mandanten weltweit.",
    services: [
      { tag: "Digitaler Betrug", title: "Rückgewinnung bei Online-Betrug", text: "Nachverfolgung und Rückgewinnung von Verlusten auf betrügerischen Plattformen, unautorisierten Überweisungen, Anlagebetrug und Kryptowerten. Wir handeln mit einstweiligen Maßnahmen und internationaler Zusammenarbeit." },
      { tag: "Finanzstreitigkeiten", title: "Bankstreitigkeiten & Vollstreckung", text: "Ungerechtfertigte Sperren, missbräuchliche Gebühren, Anlagebetrug und Durchsetzung finanzieller Ansprüche. Vollständige Strategie von der Verhandlung bis zur Klage, mit grenzüberschreitender Vollstreckung." },
      { tag: "Fonds & Vermögen", title: "Rückgewinnung von Investmentfonds", text: "Für Opfer betrügerischer Systeme und Missmanagements. Vermögensortung, Vergleichsverhandlungen und koordinierte Maßnahmen zur Rückführung Ihres Vermögens." },
    ],
  },
  why: {
    pill: "Warum wir", titleA: "Vertrauenswürdige Expertise, ein", titleAccent: "mandantenzentrierter", titleB: "Ansatz",
    items: [
      { title: "FCA-Registrierung", text: "Bei der Financial Conduct Authority registrierte Agenten, in strenger Einhaltung der Branchenstandards." },
      { title: "Keine Vorabzahlung", text: "Unsere Politik: keine Vorabgebühren. Wir arbeiten ausschließlich erfolgsabhängig." },
      { title: "Ergebnisbasiertes Modell", text: "Ihr Erfolg ist unser Erfolg. Keine versteckten Gebühren, keine Vorabkosten, absolute Transparenz." },
    ],
  },
  metodo: {
    pill: "Wie wir arbeiten", titleA: "Ein", titleAccent: "klarer und strukturierter", titleB: "Ansatz zur Rückgewinnung Ihrer Gelder",
    items: [
      { t: "Erstanalyse", d: "Vertrauliche Fallprüfung, Beweisanalyse und rechtliche Machbarkeit innerhalb von 24–48 Stunden." },
      { t: "Aktionsplan", d: "Rückgewinnungsstrategie, Sicherungsanordnungen und sofortige rechtliche Maßnahmen zum Schutz Ihrer Interessen." },
      { t: "Rückgewinnung", d: "Verhandlung, Klage oder koordinierte grenzüberschreitende Vollstreckung zur Wiedererlangung Ihrer Mittel." },
      { t: "Abwicklung", d: "Abschluss der Rückgewinnung, Vermögensübertragung und vollständige Dokumentation der Lösung." },
    ],
  },
  resultados: {
    pill: "Wegweisende Fälle", titleA: "Ergebnisse gemessen in", titleAccent: "Zahlen und Präzedenzfällen",
    cases: [
      { v: "€ 42M", t: "Multi-Strategie-Fonds", d: "Sammelklage für 2.400 Anteilseigner eines betrügerisch verwalteten Fonds." },
      { v: "US$ 38M", t: "Grenzüberschreitende Klage", d: "Aufhebung einer internationalen Sperre und Repatriierung Brasilien/USA." },
      { v: "92%", t: "Krypto-Betrug", d: "On-Chain-Tracing und Rückgewinnung bei einem Börsenbetrug." },
    ],
  },
  socia: { pill: "Wort der Partnerin", quote: "\"Vermögensrückgewinnung beginnt nicht vor Gericht — sie beginnt mit der ersten Zeile des Falls.\"", llLabel: "Columbia Law", yearsValue: "22 Jahre", yearsLabel: "im Prozessrecht", chambersLabel: "Band 1 · Dispute Resolution", role: "FCA-Agentin · Gründungspartnerin", name: "Dr. Hanna Weber" },
  presenca: {
    pill: "Globale Präsenz", titleA: "Büros in den führenden", titleAccent: "Finanzzentren",
    subtitle: "Wir arbeiten mit Büros und Korrespondenten in den führenden Ländern Europas, Nordamerikas und Südamerikas und ermöglichen koordinierte grenzüberschreitende Vollstreckung.",
    mapAlt: "Weltkarte mit Büros und Korrespondenten",
    offices: [
      { region: "Vereinigtes Königreich", city: "London", note: "Europazentrale · FCA" },
      { region: "Deutschland", city: "Frankfurt", note: "BaFin-Verbindung" },
      { region: "Schweiz", city: "Zürich", note: "FINMA-Korrespondent" },
      { region: "Spanien", city: "Madrid", note: "CNMV-Korrespondent" },
      { region: "Frankreich", city: "Paris", note: "AMF-Korrespondent" },
      { region: "Vereinigte Staaten", city: "New York", note: "SEC / FinCEN" },
      { region: "Kanada", city: "Toronto", note: "CIRO-Korrespondent" },
      { region: "Brasilien", city: "São Paulo", note: "CVM-Korrespondent" },
      { region: "Argentinien", city: "Buenos Aires", note: "CNV-Korrespondent" },
    ],
  },
  depoimentos: {
    pill: "Referenzen", title: "Referenzen", subtitle: "Aussagen von Mandanten der letzten 24 Monate, veröffentlicht mit Einwilligung und unter teilweiser Vertraulichkeitsvereinbarung.",
    items: [
      { i: "James M.", city: "Manchester, Vereinigtes Königreich", q: "Ich verlor rund £48.000 bei einem Broker, der über Nacht verschwand. Das Team übernahm meinen Fall innerhalb von drei Tagen und erlangte das Meiste in vier Monaten zurück. Die Kommunikation war stets klar." },
      { i: "Sophie L.", city: "Toronto, Kanada", q: "Nach Monaten erfolgloser Eigenversuche beauftragte ich die Kanzlei. Am meisten beeindruckte mich, dass ich nichts im Voraus zahlte — erst als das Geld wieder auf meinem Konto war." },
      { i: "Carlos R.", city: "São Paulo, Brasilien", q: "Ich fiel auf einen Krypto-Anlagebetrug herein und dachte, alles sei verloren. Das Team führte ein On-Chain-Tracing durch und wir konnten rund 70% zurückgewinnen. Sehr zu empfehlen." },
      { i: "Anna K.", city: "München, Deutschland", q: "Transparenter Prozess von Anfang bis Ende. Alle zwei Wochen Updates, ohne dass ich nachfragen musste. Seriöse Profis." },
      { i: "Diego P.", city: "Buenos Aires, Argentinien", q: "Ich hatte kaum Hoffnung, Geld aus einem schlecht verwalteten Fonds zurückzuerhalten. Es dauerte fast ein Jahr, aber das Ergebnis kam. Geduld lohnt sich." },
      { i: "Rachel T.", city: "New York, USA", q: "Schon im ersten Gespräch wurden Risiken und realistischer Zeitrahmen erklärt — keine Wunderversprechen. Das war ausschlaggebend für meine Entscheidung." },
    ],
  },
  contato: {
    pill: "Vertrauliche Beratung", titleA: "Starten Sie Ihre", titleAccent: "Beratung", subtitle: "Vertrauliche Fallprüfung innerhalb von 24 Stunden verfügbar. Für die Erstanalyse werden keine sensiblen Dokumente benötigt.",
    emailLabel: "E-Mail",
    disclaimerStrong: "Keine Vorabzahlung", disclaimerText: "— wir arbeiten nach dem Erfolgshonorar-Modell. Vertraulichkeit garantiert gemäß den FCA-Vorgaben.",
    fNome: "Vollständiger Name", fEmail: "E-Mail", fValor: "Geschätzter Betrag", fValorPh: "Ungefährer Betrag", fDesc: "Fallbeschreibung", fDescPh: "Teilen Sie das Wesentliche Ihres Falls vertraulich mit.",
    success: "Wir haben Ihre Nachricht erhalten. Wir antworten innerhalb von 24 Stunden.",
  },
  footer: {
    about: "Fund Recovery Agents. Spezialisten für die Nachverfolgung und Rückgewinnung von Geldern, Vermögen und Forderungen in grenzüberschreitenden Streitigkeiten.",
    navLabel: "Navigation", contatoLabel: "Kontakt", presencaLabel: "Präsenz",
    cities: "London · Frankfurt · Zürich · Madrid · Paris · New York · Toronto · São Paulo · Buenos Aires",
    copyright: "Alle Rechte vorbehalten.", regulated: "Zugelassen und reguliert durch die Financial Conduct Authority (FCA).",
  },
};

const fr: Dict = {
  nav: { inicio: "Accueil", escritorio: "Cabinet", atuacao: "Pratique", metodo: "Méthode", resultados: "Résultats", presenca: "Présence", depoimentos: "Témoignages", contato: "Contact" },
  cta: { solicitar: "Demander une consultation", consultaGratuita: "Consultation gratuite", casos: "Affaires en cours", saibaMais: "En savoir plus", enviar: "Envoyer la demande" },
  brand: { tagline: "Fund Recovery Agents" },
  hero: {
    badge: "Agents enregistrés auprès de la FCA",
    titleA: "Votre voie vers la",
    titleAccent: "récupération",
    subtitle: "Cabinet d'avocats spécialisé dans la récupération de fonds et les litiges financiers.",
    badges: [
      { t: "Pas de succès, pas d'honoraires", s: "Paiement uniquement en cas de succès" },
      { t: "Aucun coût initial", s: "Aucun versement anticipé" },
      { t: "Enregistrement FCA", s: "Financial Conduct Authority (UK)" },
    ],
  },
  awards: {
    label: "Reconnaissance du secteur",
    items: [
      { y: "2024", t: "Mention honorable", s: "Asset Recovery · IBA" },
      { y: "2025", t: "Cabinet recommandé", s: "Chambers Latin America" },
      { y: "2026", t: "Pratique mise en avant", s: "Legal 500 · Dispute Resolution" },
    ],
  },
  escritorio: { pill: "Excellence juridique", titleA: "Définir le sommet de l'", titleAccent: "excellence juridique", titleB: "en récupération", body: "Reconnu par les principaux classements juridiques internationaux depuis 2024, FTI s'est imposé comme une référence dans la résolution de crises à fort enjeu. Nous combinons des standards juridiques rigoureux, une intelligence de dossier assistée par IA, une sécurité des données de niveau institutionnel et une discrétion absolue — pour des résultats mesurables dans les litiges transfrontaliers, la récupération de fraudes et les affaires privées sensibles." },
  atuacao: {
    pill: "Domaines d'intervention", titleA: "Nos", titleAccent: "domaines spécialisés", subtitle: "Représentation juridique spécialisée en récupération financière et résolution de litiges pour des clients dans le monde entier.",
    services: [
      { tag: "Fraude numérique", title: "Récupération de fraudes en ligne", text: "Traçage et récupération de fonds perdus sur des plateformes frauduleuses, virements non autorisés, arnaques à l'investissement et cryptoactifs. Nous agissons par mesures conservatoires et coopération internationale." },
      { tag: "Litiges financiers", title: "Litiges bancaires & exécution", text: "Blocages indus, frais abusifs, fraudes à l'investissement et exécution des droits financiers. Stratégie complète de la négociation au contentieux, avec exécution transfrontalière." },
      { tag: "Fonds & actifs", title: "Récupération de fonds d'investissement", text: "Dédiés à la récupération pour les victimes de fraudes et de mauvaise gestion. Localisation d'actifs, négociation d'accords et action coordonnée pour restituer votre patrimoine." },
    ],
  },
  why: {
    pill: "Pourquoi nous choisir", titleA: "Une expertise de confiance, une approche", titleAccent: "centrée client", titleB: "",
    items: [
      { title: "Enregistrement FCA", text: "Agents enregistrés auprès de la Financial Conduct Authority, en stricte conformité avec les standards de conduite du secteur." },
      { title: "Aucun paiement initial", text: "Notre politique : aucuns frais anticipés. Nous travaillons exclusivement au succès." },
      { title: "Modèle au résultat", text: "Votre succès est le nôtre. Sans frais cachés, sans coût initial, transparence absolue." },
    ],
  },
  metodo: {
    pill: "Notre approche", titleA: "Une approche", titleAccent: "claire et structurée", titleB: "pour récupérer vos fonds",
    items: [
      { t: "Analyse initiale", d: "Évaluation confidentielle du dossier, analyse des preuves et faisabilité juridique sous 24 à 48 heures." },
      { t: "Plan d'action", d: "Stratégie de récupération, ordonnances de préservation et mesures juridiques immédiates pour protéger vos intérêts." },
      { t: "Récupération", d: "Négociation, contentieux ou exécution coordonnée entre juridictions pour récupérer vos ressources." },
      { t: "Règlement", d: "Clôture de la récupération, transfert des actifs et documentation complète de la résolution." },
    ],
  },
  resultados: {
    pill: "Affaires emblématiques", titleA: "Des résultats mesurés en", titleAccent: "chiffres et précédents",
    cases: [
      { v: "€ 42M", t: "Fonds multi-stratégies", d: "Action collective pour 2 400 porteurs de parts d'un fonds à gestion frauduleuse." },
      { v: "US$ 38M", t: "Contentieux transfrontalier", d: "Levée d'un blocage international et rapatriement Brésil/États-Unis." },
      { v: "92%", t: "Fraude crypto", d: "Traçage on-chain et récupération dans une fraude d'exchange." },
    ],
  },
  socia: { pill: "Mot de l'associée", quote: "\"La récupération du patrimoine ne commence pas au tribunal — elle commence à la première ligne du dossier.\"", llLabel: "Columbia Law", yearsValue: "22 ans", yearsLabel: "de contentieux", chambersLabel: "Band 1 · Dispute Resolution", role: "Agent FCA · Associée fondatrice", name: "Me Hanna Weber" },
  presenca: {
    pill: "Présence mondiale", titleA: "Bureaux dans les principaux", titleAccent: "centres financiers",
    subtitle: "Nous opérons avec des bureaux et correspondants dans les principaux pays d'Europe, d'Amérique du Nord et d'Amérique du Sud, permettant une exécution coordonnée entre juridictions.",
    mapAlt: "Carte du monde avec bureaux et correspondants",
    offices: [
      { region: "Royaume-Uni", city: "Londres", note: "Siège européen · FCA" },
      { region: "Allemagne", city: "Francfort", note: "Liaison BaFin" },
      { region: "Suisse", city: "Zurich", note: "Correspondant FINMA" },
      { region: "Espagne", city: "Madrid", note: "Correspondant CNMV" },
      { region: "France", city: "Paris", note: "Correspondant AMF" },
      { region: "États-Unis", city: "New York", note: "SEC / FinCEN" },
      { region: "Canada", city: "Toronto", note: "Correspondant CIRO" },
      { region: "Brésil", city: "São Paulo", note: "Correspondant CVM" },
      { region: "Argentine", city: "Buenos Aires", note: "Correspondant CNV" },
    ],
  },
  depoimentos: {
    pill: "Témoignages", title: "Témoignages", subtitle: "Témoignages de clients accompagnés au cours des 24 derniers mois, publiés avec autorisation et sous accord de confidentialité partielle.",
    items: [
      { i: "James M.", city: "Manchester, Royaume-Uni", q: "J'ai perdu environ 48 000 £ avec un courtier disparu du jour au lendemain. L'équipe a pris mon dossier en trois jours et a récupéré l'essentiel en quatre mois. Communication toujours claire." },
      { i: "Sophie L.", city: "Toronto, Canada", q: "Après des mois à essayer seule, j'ai fait appel au cabinet. Ce qui m'a marquée : ne rien avoir payé d'avance — uniquement quand l'argent est revenu sur mon compte." },
      { i: "Carlos R.", city: "São Paulo, Brésil", q: "Je suis tombé dans une arnaque d'investissement crypto et je pensais tout avoir perdu. L'équipe a fait un traçage on-chain et nous avons récupéré environ 70%. Je recommande." },
      { i: "Anna K.", city: "Munich, Allemagne", q: "Processus transparent de bout en bout. Des mises à jour toutes les deux semaines sans avoir à relancer. Des professionnels sérieux." },
      { i: "Diego P.", city: "Buenos Aires, Argentine", q: "J'avais peu d'espoir de récupérer l'argent d'un fonds mal géré. Cela a pris presque un an, mais le résultat est venu. La patience en valait la peine." },
      { i: "Rachel T.", city: "New York, États-Unis", q: "Ils ont expliqué les risques et un délai réaliste dès la première réunion — aucune promesse miraculeuse. Cela a fait toute la différence." },
    ],
  },
  contato: {
    pill: "Consultation privée", titleA: "Lancez votre", titleAccent: "consultation", subtitle: "Évaluation confidentielle du dossier disponible sous 24 heures. Aucun document sensible requis pour l'analyse initiale.",
    emailLabel: "E-mail",
    disclaimerStrong: "Aucun paiement initial", disclaimerText: "— nous travaillons au succès. Confidentialité garantie conformément à la FCA.",
    fNome: "Nom complet", fEmail: "E-mail", fValor: "Montant estimé concerné", fValorPh: "Montant approximatif", fDesc: "Description de l'affaire", fDescPh: "Partagez, en toute confidentialité, l'essentiel de votre dossier.",
    success: "Nous avons bien reçu votre message. Nous vous répondrons sous 24 heures.",
  },
  footer: {
    about: "Fund Recovery Agents. Spécialistes du traçage et de la récupération de fonds, actifs et créances dans les litiges transfrontaliers.",
    navLabel: "Navigation", contatoLabel: "Contact", presencaLabel: "Présence",
    cities: "Londres · Francfort · Zurich · Madrid · Paris · New York · Toronto · São Paulo · Buenos Aires",
    copyright: "Tous droits réservés.", regulated: "Autorisé et réglementé par la Financial Conduct Authority (FCA).",
  },
};

const es: Dict = {
  nav: { inicio: "Inicio", escritorio: "Despacho", atuacao: "Práctica", metodo: "Método", resultados: "Resultados", presenca: "Presencia", depoimentos: "Testimonios", contato: "Contacto" },
  cta: { solicitar: "Solicitar consulta", consultaGratuita: "Consulta gratuita", casos: "Casos en curso", saibaMais: "Saber más", enviar: "Enviar solicitud" },
  brand: { tagline: "Fund Recovery Agents" },
  hero: {
    badge: "Agentes registrados en la FCA",
    titleA: "Tu camino hacia la",
    titleAccent: "recuperación",
    subtitle: "Despacho de abogados especializado en recuperación de fondos y disputas financieras.",
    badges: [
      { t: "Sin éxito, sin honorarios", s: "Pago solo en caso de éxito" },
      { t: "Cero coste inicial", s: "Sin pago por adelantado" },
      { t: "Registro en la FCA", s: "Financial Conduct Authority (UK)" },
    ],
  },
  awards: {
    label: "Reconocimiento del sector",
    items: [
      { y: "2024", t: "Mención honorífica", s: "Asset Recovery · IBA" },
      { y: "2025", t: "Despacho recomendado", s: "Chambers Latin America" },
      { y: "2026", t: "Práctica destacada", s: "Legal 500 · Dispute Resolution" },
    ],
  },
  escritorio: { pill: "Excelencia jurídica", titleA: "Definiendo la cumbre de la", titleAccent: "excelencia jurídica", titleB: "en recuperación", body: "Reconocido en los principales rankings jurídicos internacionales desde 2024, FTI se ha consolidado como referencia en la resolución de crisis de alto riesgo. Combinamos estándares jurídicos rigurosos con inteligencia de casos asistida por IA, seguridad de datos de nivel institucional y discreción absoluta — con resultados medibles en disputas transfronterizas, recuperación de fraudes y asuntos privados sensibles." },
  atuacao: {
    pill: "Áreas de práctica", titleA: "Nuestras", titleAccent: "áreas especializadas", subtitle: "Representación jurídica especializada en recuperación financiera y resolución de disputas para clientes en todo el mundo.",
    services: [
      { tag: "Fraude digital", title: "Recuperación de fraudes en internet", text: "Rastreo y recuperación de fondos perdidos en plataformas fraudulentas, transferencias no autorizadas, estafas de inversión y criptoactivos. Actuamos con medidas cautelares y cooperación internacional." },
      { tag: "Disputas financieras", title: "Disputas bancarias & ejecución", text: "Bloqueos indebidos, cargos abusivos, fraudes de inversión y ejecución de derechos financieros. Estrategia completa desde la negociación hasta el litigio, con ejecución transfronteriza." },
      { tag: "Fondos & activos", title: "Recuperación de fondos de inversión", text: "Dedicados a víctimas de esquemas fraudulentos y mala gestión. Localización de activos, negociación de acuerdos y acción coordinada para devolver su patrimonio." },
    ],
  },
  why: {
    pill: "Por qué elegirnos", titleA: "Experiencia de confianza, enfoque", titleAccent: "centrado en el cliente", titleB: "",
    items: [
      { title: "Registro en la FCA", text: "Agentes registrados en la Financial Conduct Authority, en cumplimiento estricto de los estándares del sector." },
      { title: "Sin pago inicial", text: "Nuestra política: sin honorarios anticipados. Trabajamos exclusivamente por éxito." },
      { title: "Modelo por resultado", text: "Su éxito es nuestro éxito. Sin tarifas ocultas, sin coste inicial, transparencia absoluta." },
    ],
  },
  metodo: {
    pill: "Cómo trabajamos", titleA: "Un enfoque", titleAccent: "claro y estructurado", titleB: "para recuperar sus fondos",
    items: [
      { t: "Análisis inicial", d: "Evaluación confidencial del caso, análisis de pruebas y viabilidad jurídica en 24–48 horas." },
      { t: "Plan de acción", d: "Estrategia de recuperación, órdenes de preservación y medidas legales inmediatas para proteger sus intereses." },
      { t: "Recuperación", d: "Negociación, litigio o ejecución coordinada entre jurisdicciones para recuperar sus recursos." },
      { t: "Liquidación", d: "Cierre de la recuperación, transferencia de activos y documentación completa de la resolución." },
    ],
  },
  resultados: {
    pill: "Casos emblemáticos", titleA: "Resultados medidos en", titleAccent: "cifras y precedentes",
    cases: [
      { v: "€ 42M", t: "Fondo multiestrategia", d: "Acción colectiva para 2.400 partícipes con gestión fraudulenta." },
      { v: "US$ 38M", t: "Litigio transfronterizo", d: "Reversión de bloqueo internacional y repatriación Brasil/EE.UU." },
      { v: "92%", t: "Fraude cripto", d: "Rastreo on-chain y recuperación en fraude de exchange." },
    ],
  },
  socia: { pill: "Palabra de la socia", quote: "\"La recuperación del patrimonio no empieza en el tribunal — empieza en la primera línea del expediente.\"", llLabel: "Columbia Law", yearsValue: "22 años", yearsLabel: "en litigio", chambersLabel: "Band 1 · Dispute Resolution", role: "Agente de la FCA · Socia fundadora", name: "Dra. Hanna Weber" },
  presenca: {
    pill: "Presencia global", titleA: "Oficinas en los principales", titleAccent: "centros financieros",
    subtitle: "Operamos con oficinas y corresponsales en los principales países de Europa, América del Norte y América del Sur, permitiendo ejecución coordinada entre jurisdicciones.",
    mapAlt: "Mapa mundial con oficinas y corresponsales",
    offices: [
      { region: "Reino Unido", city: "Londres", note: "Sede europea · FCA" },
      { region: "Alemania", city: "Fráncfort", note: "Enlace BaFin" },
      { region: "Suiza", city: "Zúrich", note: "Corresponsal FINMA" },
      { region: "España", city: "Madrid", note: "Corresponsal CNMV" },
      { region: "Francia", city: "París", note: "Corresponsal AMF" },
      { region: "Estados Unidos", city: "Nueva York", note: "SEC / FinCEN" },
      { region: "Canadá", city: "Toronto", note: "Corresponsal CIRO" },
      { region: "Brasil", city: "São Paulo", note: "Corresponsal CVM" },
      { region: "Argentina", city: "Buenos Aires", note: "Corresponsal CNV" },
    ],
  },
  depoimentos: {
    pill: "Testimonios", title: "Testimonios", subtitle: "Relatos de clientes atendidos en los últimos 24 meses, publicados con autorización y bajo acuerdo de confidencialidad parcial.",
    items: [
      { i: "James M.", city: "Mánchester, Reino Unido", q: "Perdí unas £48.000 con un bróker que desapareció de un día para otro. El equipo tomó mi caso en tres días y recuperó la mayor parte en cuatro meses. Comunicación siempre clara." },
      { i: "Sophie L.", city: "Toronto, Canadá", q: "Tras meses intentándolo por mi cuenta, contraté al despacho. Lo que más me marcó fue no pagar nada por adelantado — solo cuando el dinero volvió a mi cuenta." },
      { i: "Carlos R.", city: "São Paulo, Brasil", q: "Caí en una estafa de inversión cripto y pensé que lo había perdido todo. El equipo hizo rastreo on-chain y recuperamos aproximadamente el 70%. Muy recomendable." },
      { i: "Anna K.", city: "Múnich, Alemania", q: "Proceso transparente de principio a fin. Recibía actualizaciones cada dos semanas sin tener que insistir. Profesionales serios." },
      { i: "Diego P.", city: "Buenos Aires, Argentina", q: "Tenía pocas esperanzas de recuperar el dinero de un fondo mal gestionado. Tardó casi un año, pero llegó el resultado. Valió la paciencia." },
      { i: "Rachel T.", city: "Nueva York, EE.UU.", q: "Explicaron los riesgos y un plazo realista desde la primera reunión — sin promesas milagrosas. Eso marcó la diferencia." },
    ],
  },
  contato: {
    pill: "Consulta reservada", titleA: "Inicie su", titleAccent: "consulta", subtitle: "Evaluación confidencial del caso disponible en 24 horas. No se requieren documentos sensibles en el análisis inicial.",
    emailLabel: "Correo electrónico",
    disclaimerStrong: "Sin pago inicial", disclaimerText: "— trabajamos con honorarios por éxito. Confidencialidad garantizada conforme a la FCA.",
    fNome: "Nombre completo", fEmail: "Correo electrónico", fValor: "Importe estimado", fValorPh: "Importe aproximado", fDesc: "Descripción del caso", fDescPh: "Comparta, bajo sigilo, lo esencial de su caso.",
    success: "Hemos recibido su mensaje. Le responderemos en un plazo de 24 horas.",
  },
  footer: {
    about: "Fund Recovery Agents. Especialistas en rastreo y recuperación de fondos, activos y créditos en disputas transfronterizas.",
    navLabel: "Navegación", contatoLabel: "Contacto", presencaLabel: "Presencia",
    cities: "Londres · Fráncfort · Zúrich · Madrid · París · Nueva York · Toronto · São Paulo · Buenos Aires",
    copyright: "Todos los derechos reservados.", regulated: "Autorizado y regulado por la Financial Conduct Authority (FCA).",
  },
};

const it: Dict = {
  nav: { inicio: "Home", escritorio: "Studio", atuacao: "Pratica", metodo: "Metodo", resultados: "Risultati", presenca: "Presenza", depoimentos: "Testimonianze", contato: "Contatti" },
  cta: { solicitar: "Richiedi consulenza", consultaGratuita: "Consulenza gratuita", casos: "Casi in corso", saibaMais: "Scopri di più", enviar: "Invia richiesta" },
  brand: { tagline: "Fund Recovery Agents" },
  hero: {
    badge: "Agenti registrati presso la FCA",
    titleA: "Il tuo percorso verso il",
    titleAccent: "recupero",
    subtitle: "Studio legale specializzato nel recupero di fondi e controversie finanziarie.",
    badges: [
      { t: "Nessun successo, nessun onorario", s: "Pagamento solo in caso di successo" },
      { t: "Zero costi iniziali", s: "Nessun pagamento anticipato" },
      { t: "Registrazione FCA", s: "Financial Conduct Authority (UK)" },
    ],
  },
  awards: {
    label: "Riconoscimenti del settore",
    items: [
      { y: "2024", t: "Menzione d'onore", s: "Asset Recovery · IBA" },
      { y: "2025", t: "Studio raccomandato", s: "Chambers Latin America" },
      { y: "2026", t: "Pratica in evidenza", s: "Legal 500 · Dispute Resolution" },
    ],
  },
  escritorio: { pill: "Eccellenza giuridica", titleA: "Definire il vertice dell'", titleAccent: "eccellenza giuridica", titleB: "nel recupero", body: "Riconosciuto nei principali ranking legali internazionali dal 2024, FTI si è affermato come punto di riferimento nella risoluzione di crisi ad alto rischio. Uniamo standard giuridici rigorosi, intelligenza dei casi assistita da IA, sicurezza dei dati di livello istituzionale e discrezione assoluta — con risultati misurabili nelle controversie transfrontaliere, nel recupero da frodi e nelle questioni private sensibili." },
  atuacao: {
    pill: "Aree di pratica", titleA: "Le nostre", titleAccent: "aree specializzate", subtitle: "Rappresentanza legale specializzata nel recupero finanziario e nella risoluzione delle controversie per clienti in tutto il mondo.",
    services: [
      { tag: "Frode digitale", title: "Recupero da frodi online", text: "Tracciamento e recupero di fondi persi su piattaforme fraudolente, bonifici non autorizzati, truffe agli investimenti e criptovalute. Agiamo con misure cautelari e cooperazione internazionale." },
      { tag: "Controversie finanziarie", title: "Controversie bancarie & esecuzione", text: "Blocchi indebiti, addebiti abusivi, frodi agli investimenti ed esecuzione dei diritti finanziari. Strategia completa dalla trattativa al contenzioso, con esecuzione transfrontaliera." },
      { tag: "Fondi & attivi", title: "Recupero di fondi di investimento", text: "Dedicati alle vittime di schemi fraudolenti e cattiva gestione. Localizzazione di attivi, negoziazione di accordi e azione coordinata per restituire il patrimonio." },
    ],
  },
  why: {
    pill: "Perché sceglierci", titleA: "Competenza affidabile, approccio", titleAccent: "orientato al cliente", titleB: "",
    items: [
      { title: "Registrazione FCA", text: "Agenti registrati presso la Financial Conduct Authority, in rigorosa conformità con gli standard di condotta del settore." },
      { title: "Nessun pagamento iniziale", text: "Nessun onorario anticipato. Lavoriamo esclusivamente a successo." },
      { title: "Modello a risultato", text: "Il vostro successo è il nostro. Nessun costo nascosto, nessun costo iniziale, trasparenza assoluta." },
    ],
  },
  metodo: {
    pill: "Come lavoriamo", titleA: "Un approccio", titleAccent: "chiaro e strutturato", titleB: "per recuperare i vostri fondi",
    items: [
      { t: "Analisi iniziale", d: "Valutazione riservata del caso, analisi delle prove e fattibilità giuridica entro 24–48 ore." },
      { t: "Piano d'azione", d: "Strategia di recupero, ordini conservativi e misure legali immediate per tutelare i vostri interessi." },
      { t: "Recupero", d: "Negoziazione, contenzioso o esecuzione coordinata tra giurisdizioni per recuperare le vostre risorse." },
      { t: "Liquidazione", d: "Chiusura del recupero, trasferimento degli attivi e documentazione completa della risoluzione." },
    ],
  },
  resultados: {
    pill: "Casi emblematici", titleA: "Risultati misurati in", titleAccent: "cifre e precedenti",
    cases: [
      { v: "€ 42M", t: "Fondo multi-strategia", d: "Azione collettiva per 2.400 partecipanti con gestione fraudolenta." },
      { v: "US$ 38M", t: "Contenzioso transfrontaliero", d: "Revoca di un blocco internazionale e rimpatrio Brasile/USA." },
      { v: "92%", t: "Frode cripto", d: "Tracciamento on-chain e recupero in una frode di exchange." },
    ],
  },
  socia: { pill: "Parola della socia", quote: "\"Il recupero del patrimonio non inizia in tribunale — inizia dalla prima riga della causa.\"", llLabel: "Columbia Law", yearsValue: "22 anni", yearsLabel: "nel contenzioso", chambersLabel: "Band 1 · Dispute Resolution", role: "Agente FCA · Socia fondatrice", name: "Avv. Hanna Weber" },
  presenca: {
    pill: "Presenza globale", titleA: "Uffici nei principali", titleAccent: "centri finanziari",
    subtitle: "Operiamo con uffici e corrispondenti nei principali paesi di Europa, Nord America e Sud America, per un'esecuzione coordinata tra giurisdizioni.",
    mapAlt: "Mappa del mondo con uffici e corrispondenti",
    offices: [
      { region: "Regno Unito", city: "Londra", note: "Sede europea · FCA" },
      { region: "Germania", city: "Francoforte", note: "Contatto BaFin" },
      { region: "Svizzera", city: "Zurigo", note: "Corrispondente FINMA" },
      { region: "Spagna", city: "Madrid", note: "Corrispondente CNMV" },
      { region: "Francia", city: "Parigi", note: "Corrispondente AMF" },
      { region: "Stati Uniti", city: "New York", note: "SEC / FinCEN" },
      { region: "Canada", city: "Toronto", note: "Corrispondente CIRO" },
      { region: "Brasile", city: "San Paolo", note: "Corrispondente CVM" },
      { region: "Argentina", city: "Buenos Aires", note: "Corrispondente CNV" },
    ],
  },
  depoimentos: {
    pill: "Testimonianze", title: "Testimonianze", subtitle: "Dichiarazioni di clienti seguiti negli ultimi 24 mesi, pubblicate con autorizzazione e con accordo di riservatezza parziale.",
    items: [
      { i: "James M.", city: "Manchester, Regno Unito", q: "Ho perso circa £48.000 con un broker sparito da un giorno all'altro. Il team ha preso in carico il mio caso in tre giorni e ha recuperato la maggior parte in quattro mesi. Comunicazione sempre chiara." },
      { i: "Sophie L.", city: "Toronto, Canada", q: "Dopo mesi di tentativi da sola, ho affidato il caso allo studio. Ciò che mi ha colpito di più: non ho pagato nulla in anticipo — solo quando il denaro è tornato sul mio conto." },
      { i: "Carlos R.", city: "San Paolo, Brasile", q: "Sono caduto in una truffa di investimento cripto e pensavo di aver perso tutto. Il team ha fatto tracciamento on-chain e abbiamo recuperato circa il 70%. Consigliato." },
      { i: "Anna K.", city: "Monaco di Baviera, Germania", q: "Processo trasparente dall'inizio alla fine. Ricevevo aggiornamenti ogni due settimane senza dover sollecitare. Professionisti seri." },
      { i: "Diego P.", city: "Buenos Aires, Argentina", q: "Avevo poche speranze di recuperare il denaro di un fondo mal gestito. C'è voluto quasi un anno, ma il risultato è arrivato. La pazienza è valsa la pena." },
      { i: "Rachel T.", city: "New York, USA", q: "Hanno spiegato rischi e tempi realistici già al primo incontro — nessuna promessa miracolosa. Questo ha fatto la differenza nella mia decisione." },
    ],
  },
  contato: {
    pill: "Consulenza riservata", titleA: "Avvia la tua", titleAccent: "consulenza", subtitle: "Valutazione riservata del caso disponibile entro 24 ore. Non sono richiesti documenti sensibili per l'analisi iniziale.",
    emailLabel: "Email",
    disclaimerStrong: "Nessun pagamento iniziale", disclaimerText: "— lavoriamo con onorario a successo. Riservatezza garantita in conformità con la FCA.",
    fNome: "Nome completo", fEmail: "Email", fValor: "Importo stimato coinvolto", fValorPh: "Importo approssimativo", fDesc: "Descrizione del caso", fDescPh: "Condividi, in riservatezza, l'essenziale del tuo caso.",
    success: "Abbiamo ricevuto il tuo messaggio. Risponderemo entro 24 ore.",
  },
  footer: {
    about: "Fund Recovery Agents. Specialisti nel tracciamento e recupero di fondi, attivi e crediti nelle controversie transfrontaliere.",
    navLabel: "Navigazione", contatoLabel: "Contatti", presencaLabel: "Presenza",
    cities: "Londra · Francoforte · Zurigo · Madrid · Parigi · New York · Toronto · San Paolo · Buenos Aires",
    copyright: "Tutti i diritti riservati.", regulated: "Autorizzato e regolato dalla Financial Conduct Authority (FCA).",
  },
};

export const DICTS: Record<Lang, Dict> = { pt, en, de, fr, es, it };

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "pt", setLang: () => {}, t: pt,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    try {
      const stored = localStorage.getItem("fti-lang") as Lang | null;
      if (stored && DICTS[stored]) setLangState(stored);
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("fti-lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: DICTS[lang] }), [lang]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
