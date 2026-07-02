import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Scale,
  Landmark,
  ShieldCheck,
  Coins,
  Gavel,
  Building2,
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import signing from "@/assets/signing.jpg";
import partner from "@/assets/partner.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Escritório", href: "#escritorio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const STATS = [
  { k: "R$ 1.2Bi+", v: "recuperados para clientes" },
  { k: "18 anos", v: "de atuação especializada" },
  { k: "94%", v: "êxito em teses consolidadas" },
  { k: "37", v: "advogados dedicados" },
];

const SERVICES = [
  {
    icon: Coins,
    title: "Recuperação de Fundos de Investimento",
    text: "Reparação a cotistas lesados por má gestão, falhas de custódia, fraudes e liquidações irregulares em fundos abertos, exclusivos e estruturados.",
  },
  {
    icon: Landmark,
    title: "Ativos Financeiros e Bancários",
    text: "Bloqueios indevidos, cobranças abusivas, expurgos inflacionários e recuperação de valores retidos em instituições nacionais e internacionais.",
  },
  {
    icon: ShieldCheck,
    title: "Fraudes e Golpes Digitais",
    text: "Rastreamento patrimonial, medidas cautelares e recuperação de recursos desviados em pirâmides financeiras, criptoativos e esquemas fraudulentos.",
  },
  {
    icon: Gavel,
    title: "Créditos Judiciais e Precatórios",
    text: "Habilitação, execução e monetização de créditos em massa falida, recuperação judicial e Fazenda Pública.",
  },
  {
    icon: Building2,
    title: "Litígios Societários",
    text: "Disputas entre sócios, apuração de haveres e responsabilização de administradores por desvio de finalidade e conflito de interesses.",
  },
  {
    icon: Scale,
    title: "Arbitragem e Contencioso Estratégico",
    text: "Representação em câmaras arbitrais nacionais e internacionais em disputas de alto valor com estratégia probatória sob medida.",
  },
];

const METHOD = [
  {
    n: "01",
    t: "Diagnóstico Confidencial",
    d: "Análise técnica sob sigilo absoluto, com parecer sobre viabilidade, tese jurídica e horizonte de recuperação.",
  },
  {
    n: "02",
    t: "Arquitetura da Estratégia",
    d: "Definição de foro, medidas cautelares, tutela de urgência e estruturação probatória com equipe multidisciplinar.",
  },
  {
    n: "03",
    t: "Execução e Litígio",
    d: "Condução ativa do processo com peças autorais, sustentações orais e negociações lideradas por sócios sêniores.",
  },
  {
    n: "04",
    t: "Liquidação e Repatriação",
    d: "Bloqueio, penhora e transferência dos valores recuperados diretamente à conta do cliente, com prestação de contas.",
  },
];

const CASES = [
  {
    tag: "Fundo Multimercado",
    title: "R$ 214 milhões recuperados a cotistas de fundo com gestão fraudulenta",
    meta: "Ação coletiva • 2.400 investidores",
  },
  {
    tag: "Instituição Financeira",
    title: "Reversão de bloqueio internacional e repatriação de US$ 38 milhões",
    meta: "Litígio cross-border • Brasil/EUA",
  },
  {
    tag: "Criptoativos",
    title: "Rastreamento e recuperação de 92% em fraude de exchange",
    meta: "Cautelar • Rastreio on-chain",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-lux flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-3 text-parchment">
            <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="font-display text-lg tracking-wide">
              Vasconcellos <span className="text-gold">&</span> Marques
            </span>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[11px] uppercase tracking-[0.22em] text-parchment/70 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contato" className="hidden md:inline-flex btn-gold">
            Consulta Reservada
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <img
          src={heroOffice}
          alt="Escritório de advocacia ao entardecer"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.18 0.03 260 / 0.55) 0%, oklch(0.18 0.03 260 / 0.75) 60%, oklch(0.18 0.03 260) 100%)",
          }}
        />
        <div className="container-lux relative flex min-h-[100svh] flex-col justify-end pb-24 pt-40 text-parchment">
          <div className="max-w-3xl">
            <span className="gold-rule">Advocacia de Recuperação de Ativos</span>
            <h1 className="mt-8 font-display text-5xl leading-[1.02] tracking-tight text-parchment md:text-7xl lg:text-[5.5rem]">
              Onde outros veem
              <br />
              perda, <span className="italic text-gold">nós reconstruímos</span>
              <br />
              patrimônio.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-parchment/70 md:text-lg">
              Especialistas em recuperação de fundos, ativos financeiros e créditos.
              Atuação técnica, discreta e comprometida com o resultado — para
              investidores, empresas e famílias de alto patrimônio.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contato" className="btn-gold">
                Agendar Consulta <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#atuacao" className="btn-ghost-ink">
                Áreas de Atuação
              </a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-parchment/15 pt-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.k}>
                <div className="font-display text-3xl text-gold md:text-4xl">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-parchment/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCRITÓRIO */}
      <section id="escritorio" className="py-28 md:py-40">
        <div className="container-lux grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <span className="gold-rule">O Escritório</span>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Precisão jurídica ao lado de quem tem muito a recuperar.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Fundado em 2007, o Vasconcellos & Marques nasceu com uma vocação
              única: devolver patrimônio a quem foi lesado por más gestões,
              fraudes e falhas institucionais. Ao longo de quase duas décadas,
              consolidamos teses inéditas nos tribunais superiores e conduzimos
              litígios que redefiniram a jurisprudência brasileira de recuperação
              de ativos.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Trabalhamos com discrição absoluta, honorários alinhados a resultado
              e uma rede internacional que permite rastrear e repatriar recursos
              em mais de 30 jurisdições.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Sigilo profissional inegociável",
                "Honorários vinculados ao êxito",
                "Rede internacional em 30+ países",
                "Equipe multidisciplinar sênior",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-gold" strokeWidth={2} />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ATUAÇÃO */}
      <section id="atuacao" className="border-y border-border bg-secondary/40 py-28 md:py-40">
        <div className="container-lux">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="gold-rule">Áreas de Atuação</span>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                Uma prática construída sobre teses que os tribunais respeitam.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Cada mandato é conduzido por um sócio responsável, com equipe
              dedicada e cronograma processual auditável.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group relative flex flex-col justify-between bg-background p-8 transition-colors hover:bg-ink"
              >
                <div>
                  <s.icon
                    className="h-8 w-8 text-gold transition-transform group-hover:-translate-y-0.5"
                    strokeWidth={1.3}
                  />
                  <h3 className="mt-8 font-display text-2xl leading-tight text-foreground transition-colors group-hover:text-parchment">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-parchment/70">
                    {s.text}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold">
                  Saber mais <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="relative overflow-hidden bg-ink py-28 text-parchment md:py-40">
        <img
          src={signing}
          alt="Assinatura de documento jurídico"
          width={1200}
          height={1408}
          loading="lazy"
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 md:block"
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, var(--ink) 40%, oklch(0.18 0.03 260 / 0.85) 65%, transparent 100%)",
          }}
        />
        <div className="container-lux relative">
          <div className="max-w-2xl">
            <span className="gold-rule">Nosso Método</span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              Da análise à repatriação, sem improviso.
            </h2>
            <p className="mt-6 text-parchment/70">
              Um protocolo em quatro estágios que atravessa cada caso —
              construído em quase duas décadas conduzindo litígios de alta
              complexidade.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:max-w-3xl">
            {METHOD.map((m) => (
              <div key={m.n} className="border-t border-parchment/15 pt-6">
                <div className="font-display text-sm text-gold">{m.n}</div>
                <h3 className="mt-2 font-display text-2xl text-parchment">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/70">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-28 md:py-40">
        <div className="container-lux">
          <div className="max-w-2xl">
            <span className="gold-rule">Casos Emblemáticos</span>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Resultados que se medem em cifras — e em precedentes.
            </h2>
          </div>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {CASES.map((c, i) => (
              <a
                key={i}
                href="#contato"
                className="group grid grid-cols-12 items-baseline gap-6 py-10 transition-colors hover:bg-secondary/40"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                    {c.tag}
                  </span>
                </div>
                <h3 className="col-span-12 font-display text-2xl leading-tight md:col-span-7 md:text-3xl">
                  {c.title}
                </h3>
                <div className="col-span-12 flex items-center justify-between md:col-span-3 md:justify-end">
                  <span className="text-sm text-muted-foreground md:mr-6">{c.meta}</span>
                  <ArrowUpRight className="h-5 w-5 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-gold" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SÓCIO */}
      <section className="bg-secondary/40 py-28 md:py-40">
        <div className="container-lux grid gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={partner}
                alt="Dr. Rafael Vasconcellos, sócio-fundador"
                width={912}
                height={1104}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-ink px-5 py-4 text-parchment">
                <div className="font-display text-lg">Dr. Rafael Vasconcellos</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold">
                  Sócio-Fundador
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pt-10">
            <span className="gold-rule">Palavra do Sócio</span>
            <blockquote className="mt-8 font-display text-3xl leading-[1.25] text-foreground md:text-4xl">
              “A recuperação de patrimônio não começa no tribunal — começa em
              como se escreve a primeira linha do processo. Aqui, cada palavra
              é escolhida com a certeza de que ela pode devolver a alguém o que
              foi tomado.”
            </blockquote>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <div className="font-display text-2xl text-gold">LL.M.</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Columbia Law
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold">22 anos</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  em contencioso
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold">Chambers</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Band 1 — Dispute Resolution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative overflow-hidden bg-ink py-28 text-parchment md:py-40">
        <div className="container-lux grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="gold-rule">Consulta Reservada</span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-6xl">
              O primeiro passo é uma conversa — sob sigilo absoluto.
            </h2>
            <p className="mt-6 max-w-md text-parchment/70">
              Nossa equipe retorna em até 24 horas com uma análise preliminar
              gratuita sobre a viabilidade da recuperação.
            </p>
            <div className="mt-12 space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-parchment/80">+55 11 3000 0000</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-parchment/80">contato@vasconcellosmarques.adv.br</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-parchment/80">
                  Av. Brigadeiro Faria Lima, 3900 — 12º andar, São Paulo
                </span>
              </div>
            </div>
          </div>

          <form
            className="md:col-span-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Recebemos sua mensagem. Retornaremos em até 24 horas.");
            }}
          >
            <div className="space-y-6 border border-parchment/15 bg-parchment/[0.03] p-8 backdrop-blur-sm md:p-10">
              <Field label="Nome completo" name="nome" />
              <Field label="E-mail" name="email" type="email" />
              <Field label="Telefone" name="tel" />
              <Field label="Valor estimado envolvido" name="valor" placeholder="R$" />
              <div>
                <label className="text-[11px] uppercase tracking-[0.22em] text-parchment/60">
                  Descrição do caso
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  className="mt-2 w-full border-b border-parchment/25 bg-transparent py-2 text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none"
                  placeholder="Compartilhe, sob sigilo, o essencial do seu caso."
                />
              </div>
              <button type="submit" className="btn-gold w-full">
                Enviar Solicitação <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-[11px] leading-relaxed text-parchment/50">
                Todas as informações são protegidas por sigilo profissional (OAB
                art. 34, VII).
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink pt-16 pb-10 text-parchment/60">
        <div className="container-lux">
          <div className="grid gap-12 border-t border-parchment/10 pt-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 text-parchment">
                <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span className="font-display text-lg">
                  Vasconcellos <span className="text-gold">&</span> Marques
                </span>
              </div>
              <p className="mt-5 max-w-xs text-sm">
                Advocacia especializada em recuperação de fundos, ativos e
                créditos. São Paulo · Rio de Janeiro · Lisboa.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.22em] text-parchment/40">
                Escritório
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-gold">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-parchment/40">
                Contato
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                <li>+55 11 3000 0000</li>
                <li>contato@vasconcellosmarques.adv.br</li>
                <li>Av. Brig. Faria Lima, 3900 — SP</li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-parchment/10 pt-8 text-xs md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Vasconcellos & Marques Advogados. OAB/SP 12.345.</span>
            <span className="text-parchment/40">
              Em conformidade com o Provimento 205/2021 da OAB.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] uppercase tracking-[0.22em] text-parchment/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-parchment/25 bg-transparent py-2 text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
