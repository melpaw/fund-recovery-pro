import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Check,
  MessageCircle,
  FileText,
  Scale,
  Search,
  ClipboardList,
  Handshake,
  Trophy,
  Award,
  Coins,
  Landmark,
  Bitcoin,
  Globe,
} from "lucide-react";
import heroJustice from "@/assets/hero-justice.jpg";
import attorney from "@/assets/attorney.jpg";
import worldMap from "@/assets/world-map.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Início", href: "#top" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const HERO_BADGES = [
  { t: "Sem Êxito, Sem Honorários", s: "Pagamento apenas em caso de sucesso" },
  { t: "Zero Custo Inicial", s: "Nenhum valor adiantado" },
  { t: "OAB Federal", s: "Registro nacional ativo" },
];

const SERVICES = [
  {
    icon: Bitcoin,
    tag: "Fraude Digital",
    title: "Recuperação de Fraudes na Internet",
    text: "Rastreamento e recuperação de valores perdidos em plataformas fraudulentas, transferências não autorizadas, golpes de investimento e criptoativos. Atuamos com medidas cautelares e cooperação internacional.",
  },
  {
    icon: Landmark,
    tag: "Disputas Financeiras",
    title: "Disputas & Execução Bancária",
    text: "Bloqueios indevidos, cobranças abusivas, fraudes de investimento e execução de direitos financeiros. Estratégia completa da negociação ao litígio, com enforcement transfronteiriço.",
  },
  {
    icon: Coins,
    tag: "Fundos & Ativos",
    title: "Recuperação de Fundos de Investimento",
    text: "Dedicados à recuperação para vítimas de esquemas fraudulentos e má gestão. Localização de ativos, negociação de acordos e ação coordenada para devolver seu patrimônio.",
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "Registro na OAB",
    text: "Escritório com advogados devidamente inscritos, em conformidade rigorosa com padrões éticos e legais.",
  },
  {
    icon: Handshake,
    title: "Sem Pagamento Inicial",
    text: "Nossa política é não cobrar valores adiantados. Trabalhamos exclusivamente por êxito.",
  },
  {
    icon: Trophy,
    title: "Modelo por Resultado",
    text: "Seu sucesso é o nosso sucesso. Sem taxas escondidas, sem custo inicial, transparência absoluta.",
  },
];

const METHOD = [
  {
    n: "1",
    icon: Search,
    t: "Análise Inicial",
    d: "Avaliação confidencial do caso, análise de evidências e viabilidade jurídica em 24 a 48 horas.",
  },
  {
    n: "2",
    icon: ClipboardList,
    t: "Plano de Ação",
    d: "Estratégia de recuperação, ordens de preservação e medidas legais imediatas para proteger seus interesses.",
  },
  {
    n: "3",
    icon: Scale,
    t: "Recuperação",
    d: "Negociação, litígio ou enforcement coordenado entre jurisdições para reaver seus recursos.",
  },
  {
    n: "4",
    icon: Handshake,
    t: "Liquidação",
    d: "Encerramento da recuperação, transferência dos ativos e documentação completa da resolução.",
  },
];

const CASES = [
  { v: "R$ 214M", t: "Fundo multimercado", d: "Ação coletiva para 2.400 cotistas com gestão fraudulenta." },
  { v: "US$ 38M", t: "Litígio cross-border", d: "Reversão de bloqueio internacional e repatriação Brasil/EUA." },
  { v: "92%", t: "Fraude cripto", d: "Rastreio on-chain e recuperação em fraude de exchange." },
];

const TESTIMONIALS = [
  { i: "James M.", city: "Manchester, Reino Unido", q: "Perdi cerca de £48 mil em uma corretora que sumiu da noite para o dia. Fui atendido pela equipe em três dias, entenderam meu caso e recuperaram a maior parte em quatro meses. Comunicação sempre clara." },
  { i: "Sophie L.", city: "Toronto, Canadá", q: "Depois de meses tentando resolver por conta própria, contratei o escritório. O que mais me marcou foi não ter pago nada adiantado — só quando o dinheiro voltou pra minha conta." },
  { i: "Carlos R.", city: "São Paulo, Brasil", q: "Caí em um golpe de investimento em cripto e achei que tinha perdido tudo. A equipe fez rastreamento on-chain e conseguimos reaver aproximadamente 70% do valor. Recomendo." },
  { i: "Anna K.", city: "Munique, Alemanha", q: "Processo transparente do começo ao fim. Recebia atualizações a cada duas semanas e nunca precisei correr atrás de informação. Profissionais sérios." },
  { i: "Diego P.", city: "Buenos Aires, Argentina", q: "Tinha pouca esperança de recuperar o dinheiro de um fundo mal gerido. Levou quase um ano, mas o resultado veio. Vale a paciência." },
  { i: "Rachel T.", city: "Nova York, EUA", q: "Explicaram os riscos e o prazo realista logo na primeira reunião — sem promessa milagrosa. Isso fez toda a diferença na minha decisão de seguir com eles." },
];

const OFFICES = [
  { region: "Reino Unido", city: "Londres", note: "Sede europeia · FCA" },
  { region: "Alemanha", city: "Frankfurt", note: "BaFin liaison" },
  { region: "Suíça", city: "Zurique", note: "FINMA correspondente" },
  { region: "Espanha", city: "Madrid", note: "CNMV correspondente" },
  { region: "França", city: "Paris", note: "AMF correspondente" },
  { region: "Estados Unidos", city: "Nova York", note: "SEC / FinCEN" },
  { region: "Canadá", city: "Toronto", note: "CIRO correspondente" },
  { region: "Brasil", city: "São Paulo", note: "CVM correspondente" },
  { region: "Argentina", city: "Buenos Aires", note: "CNV correspondente" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-lux flex items-center justify-between py-6">
          <a href="#top" className="flex items-center gap-3 text-parchment">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-ink-2/60">
              <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">
                Vasconcellos <span className="text-gold">&</span> Marques
              </div>
              <div className="text-[9px] uppercase tracking-[0.28em] text-parchment/50">
                Advogados Associados
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.slice(0, 6).map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[11px] uppercase tracking-[0.22em] text-parchment/70 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contato" className="hidden md:inline-flex btn-gold !py-3 !px-5">
            <Phone className="h-3.5 w-3.5" /> Solicitar Consulta
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <img
          src={heroJustice}
          alt="Estátua da Justiça"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.19 0.04 258 / 0.4) 0%, oklch(0.19 0.04 258 / 0.85) 55%, var(--ink) 100%)",
          }}
        />
        <div className="container-lux relative flex min-h-[100svh] flex-col items-center justify-center py-40 text-center text-parchment">
          <span className="gold-pill">
            <ShieldCheck className="h-3.5 w-3.5" /> Agentes registrados na FCA
          </span>
          <h1 className="mt-8 font-display text-5xl leading-[1.03] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Seu Caminho para a <span className="italic text-gold">Recuperação</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-parchment/70 md:text-lg">
            Escritório de advocacia especializado em recuperação de fundos e
            disputas financeiras.
          </p>

          <div className="mt-14 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
            {HERO_BADGES.map((b) => (
              <div key={b.t} className="card-navy flex items-center gap-4 p-5 text-left">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[color:var(--success)]">
                  <Check className="h-4 w-4 text-ink" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-parchment">{b.t}</div>
                  <div className="text-xs text-parchment/60">{b.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#contato" className="btn-gold">
              <Phone className="h-4 w-4" /> Solicitar Consulta
            </a>
            <a href="#resultados" className="btn-outline-gold">
              <FileText className="h-4 w-4" /> Casos em Andamento
            </a>
          </div>
        </div>
      </section>

      {/* AWARDS BAR */}
      <section className="border-y border-border bg-ink-2/40 py-10">
        <div className="container-lux">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <span className="text-[11px] uppercase tracking-[0.28em] text-parchment/50">
              Reconhecimento do Setor
            </span>
            <div className="grid w-full grid-cols-1 items-start gap-8 md:max-w-4xl md:grid-cols-3">
              {[
                { y: "2024", t: "Menção Honrosa", s: "Recuperação de Ativos · IBA" },
                { y: "2025", t: "Escritório Recomendado", s: "Chambers Latin America" },
                { y: "2026", t: "Prática em Destaque", s: "Legal 500 · Dispute Resolution" },
              ].map((a) => (
                <div key={a.y} className="flex flex-col items-center gap-2 text-center">
                  <Award className="h-9 w-9 text-gold" strokeWidth={1.3} />
                  <div className="font-display text-lg text-parchment">{a.y}</div>
                  <div className="text-sm text-parchment/80">{a.t}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-parchment/50">
                    {a.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESCRITÓRIO */}
      <section id="escritorio" className="py-28 md:py-36">
        <div className="container-lux text-center">
          <span className="gold-pill">
            <Trophy className="h-3.5 w-3.5" /> Excelência Jurídica
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-tight text-parchment md:text-6xl">
            Definindo o auge da <span className="italic text-gold">excelência jurídica</span> em recuperação
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-parchment/70">
            Reconhecido nos principais rankings jurídicos internacionais desde
            2024, o Vasconcellos & Marques consolidou-se como referência em
            resolução de crises de alto risco. Combinamos padrões jurídicos
            rigorosos com inteligência de casos assistida por IA, segurança de
            dados de nível institucional e discrição absoluta — entregando
            resultados mensuráveis em disputas transfronteiriças, recuperação
            de fraudes e assuntos privados sensíveis.
          </p>
        </div>
      </section>

      {/* ATUAÇÃO */}
      <section id="atuacao" className="border-y border-border bg-ink-2/30 py-28 md:py-36">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <Scale className="h-3.5 w-3.5" /> Áreas de Atuação
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              Nossas <span className="italic text-gold">áreas especializadas</span>
            </h2>
            <p className="mt-6 text-parchment/70">
              Representação jurídica especializada em recuperação financeira e
              resolução de disputas para clientes em todo o Brasil e no exterior.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="card-navy group flex flex-col p-8 transition-all hover:border-gold/40 hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30">
                  <s.icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                </div>
                <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-gold">
                  {s.tag}
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight text-parchment">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-parchment/65">
                  {s.text}
                </p>
                <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold transition-transform group-hover:translate-x-1">
                  Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 md:py-36">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <ShieldCheck className="h-3.5 w-3.5" /> Por Que Nos Escolher
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              Expertise de confiança, abordagem <span className="italic text-gold">centrada no cliente</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="card-navy p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                  <w.icon className="h-8 w-8 text-gold" strokeWidth={1.3} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-parchment">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/65">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="border-y border-border bg-ink-2/30 py-28 md:py-36">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <ClipboardList className="h-3.5 w-3.5" /> Como Trabalhamos
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              Uma abordagem <span className="italic text-gold">clara e estruturada</span> para recuperar seus fundos
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((m) => (
              <div key={m.n} className="card-navy relative p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink font-display text-xl">
                    {m.n}
                  </div>
                  <m.icon className="h-6 w-6 text-gold/70" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-parchment">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/65">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-28 md:py-36">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <Trophy className="h-3.5 w-3.5" /> Casos Emblemáticos
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              Resultados que se medem em <span className="italic text-gold">cifras e precedentes</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {CASES.map((c) => (
              <div key={c.t} className="card-navy p-10 text-center">
                <div className="font-display text-5xl text-gold md:text-6xl">{c.v}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-parchment/60">
                  {c.t}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-parchment/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÓCIA */}
      <section className="border-y border-border bg-ink-2/30 py-28 md:py-36">
        <div className="container-lux grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <img
                src={attorney}
                alt="Dra. Hanna Weber, agente da FCA"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink to-transparent p-6">
                <div className="font-display text-2xl text-parchment">Dra. Hanna Weber</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  Agente da FCA · Sócia-Fundadora
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <span className="gold-pill">
              <Scale className="h-3.5 w-3.5" /> Palavra da Sócia
            </span>
            <blockquote className="mt-8 font-display text-3xl leading-[1.25] text-parchment md:text-4xl">
              "A recuperação de patrimônio não começa no tribunal — começa em
              como se escreve a primeira linha do processo."
            </blockquote>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <div className="font-display text-3xl text-gold">LL.M.</div>
                <div className="text-xs uppercase tracking-[0.18em] text-parchment/60">
                  Columbia Law
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">22 anos</div>
                <div className="text-xs uppercase tracking-[0.18em] text-parchment/60">
                  em contencioso
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">Chambers</div>
                <div className="text-xs uppercase tracking-[0.18em] text-parchment/60">
                  Band 1 · Dispute Resolution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENÇA GLOBAL */}
      <section id="presenca" className="py-28 md:py-36">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <Globe className="h-3.5 w-3.5" /> Presença Global
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              Escritórios nos principais <span className="italic text-gold">centros financeiros</span>
            </h2>
            <p className="mt-6 text-parchment/60">
              Operamos com sedes e correspondentes nos principais países da
              Europa, América do Norte e América do Sul, permitindo enforcement
              coordenado entre jurisdições.
            </p>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-ink-2/40">
            <img
              src={worldMap}
              alt="Mapa mundial com escritórios e correspondentes"
              width={1600}
              height={640}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, var(--ink) 100%)",
              }}
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OFFICES.map((o) => (
              <div key={o.city} className="card-navy flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                    {o.region}
                  </div>
                  <div className="font-display text-lg text-parchment">{o.city}</div>
                  <div className="text-xs text-parchment/55">{o.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="border-t border-border bg-ink-2/30 py-28 md:py-36">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <MessageCircle className="h-3.5 w-3.5" /> Depoimentos
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              <span className="italic text-gold">Depoimentos</span>
            </h2>
            <p className="mt-6 text-parchment/60">
              Relatos de clientes atendidos nos últimos 24 meses, publicados
              com autorização e sob acordo de confidencialidade parcial.
            </p>
          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.i + t.city} className="card-navy flex flex-col p-8">
                <blockquote className="flex-1 text-sm leading-relaxed text-parchment/80">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-display text-sm text-gold ring-1 ring-gold/30">
                    {t.i.replace(/[^A-Z]/g, "")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-parchment">{t.i}</div>
                    <div className="text-xs text-parchment/50">{t.city}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="relative overflow-hidden border-y border-border bg-ink-2/40 py-28 md:py-36"
      >
        <div className="container-lux grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="gold-pill">
              <Phone className="h-3.5 w-3.5" /> Consulta Reservada
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-6xl">
              Inicie sua <span className="italic text-gold">consulta</span>
            </h2>
            <p className="mt-6 max-w-md text-parchment/70">
              Avaliação confidencial do caso disponível em até 24 horas. Nenhum
              documento sensível é exigido na análise inicial.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-parchment/50">Telefone</div>
                  <div className="text-parchment">+55 11 3000 0000</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-parchment/50">E-mail</div>
                  <div className="text-parchment">suport@ftiagent.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-parchment/50">Endereço</div>
                  <div className="text-parchment">
                    Av. Brigadeiro Faria Lima, 3900 — 12º andar, São Paulo
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-lg border border-gold/30 bg-gold/5 p-4">
              <ShieldCheck className="h-5 w-5 flex-none text-gold" />
              <p className="text-xs leading-relaxed text-parchment/70">
                <strong className="text-parchment">Sem pagamento inicial</strong> — trabalhamos
                em modelo por êxito. Sigilo profissional garantido pelo art. 34, VII da OAB.
              </p>
            </div>
          </div>

          <form
            className="md:col-span-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Recebemos sua mensagem. Retornaremos em até 24 horas.");
            }}
          >
            <div className="card-navy space-y-6 p-8 md:p-10">
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
                  className="mt-2 w-full rounded-md border border-border bg-ink/40 px-3 py-2 text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none"
                  placeholder="Compartilhe, sob sigilo, o essencial do seu caso."
                />
              </div>
              <button type="submit" className="btn-gold w-full">
                Enviar Solicitação <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink pt-16 pb-10 text-parchment/60">
        <div className="container-lux">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 text-parchment">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50">
                  <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
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
                Navegação
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {NAV.slice(1).map((n) => (
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
                <li>suport@ftiagent.com</li>
                <li>Av. Brig. Faria Lima, 3900 — SP</li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Vasconcellos & Marques Advogados. OAB/SP 12.345.</span>
            <span className="text-parchment/40">
              Em conformidade com o Provimento 205/2021 da OAB.
            </span>
          </div>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <a
        href="#contato"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-4 w-4" /> Consulta Gratuita
      </a>
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
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.22em] text-parchment/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-ink/40 px-3 py-2 text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
