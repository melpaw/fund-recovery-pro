import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  Languages,
  Menu,
  X,
} from "lucide-react";
import heroJustice from "@/assets/hero-justice.jpg";
import attorney from "@/assets/attorney.jpg";
import worldMap from "@/assets/world-map.jpg";
import { useI18n, LANGS, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

const SERVICE_ICONS = [Bitcoin, Landmark, Coins];
const WHY_ICONS = [ShieldCheck, Handshake, Trophy];
const METHOD_ICONS = [Search, ClipboardList, Scale, Handshake];

function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ink-2/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-parchment/80 transition-colors hover:text-gold"
        aria-label="Select language"
      >
        <Languages className="h-3.5 w-3.5 text-gold" />
        <span>{current.flag} {current.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-ink-2 shadow-lg z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                setLang(l.code as Lang);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-3 py-2 text-left text-xs uppercase tracking-[0.18em] transition-colors hover:bg-gold/10 ${
                l.code === lang ? "text-gold" : "text-parchment/80"
              }`}
            >
              <span className="font-semibold">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Index() {
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV = [
    { label: t.nav.inicio, href: "#top" },
    { label: t.nav.escritorio, href: "#escritorio" },
    { label: t.nav.atuacao, href: "#atuacao" },
    { label: t.nav.metodo, href: "#metodo" },
    { label: t.nav.resultados, href: "#resultados" },
    { label: t.nav.presenca, href: "#presenca" },
    { label: t.nav.depoimentos, href: "#depoimentos" },
    { label: t.nav.contato, href: "#contato" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-lux flex items-center justify-between py-3 md:py-6">
          <a href="#top" className="flex min-w-0 items-center gap-2 text-parchment sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ink-2/60 sm:h-10 sm:w-10">
              <Scale className="h-4 w-4 text-gold sm:h-5 sm:w-5" strokeWidth={1.5} />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-display text-base tracking-[0.2em] sm:text-lg">FTI</div>
              <div className="hidden truncate text-[9px] uppercase tracking-[0.28em] text-parchment/50 sm:block">
                {t.brand.tagline}
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {NAV.slice(0, 6).map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[10px] uppercase tracking-[0.2em] text-parchment/70 transition-colors hover:text-gold xl:text-[11px] xl:tracking-[0.22em]"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-6">
            <LanguageSwitcher />
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-gold px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink shadow-gold transition-colors hover:bg-gold-soft md:px-5 md:py-2.5 md:text-[11px] md:tracking-[0.16em]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{t.cta.solicitar}</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-ink-2/60 text-gold lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink/98 backdrop-blur lg:hidden">
          <div className="container-lux flex items-center justify-between py-4">
            <div className="flex items-center gap-3 text-parchment">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-ink-2/60">
                <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <span className="font-display text-lg tracking-[0.2em]">FTI</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink-2/60 text-gold"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-lux mt-4 flex flex-1 flex-col gap-1 overflow-y-auto pb-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border/60 py-4 text-sm uppercase tracking-[0.22em] text-parchment/80 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-gold"
            >
              <Phone className="h-4 w-4" /> {t.cta.solicitar}
            </a>
          </nav>
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-[85svh] overflow-hidden bg-ink md:min-h-[100svh]">
        <img
          src={heroJustice}
          alt="Justice"
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
        <div className="container-lux relative flex min-h-[85svh] flex-col items-center justify-center py-20 text-center text-parchment md:min-h-[100svh] md:py-40">
          <span className="gold-pill">
            <ShieldCheck className="h-3.5 w-3.5" /> {t.hero.badge}
          </span>
          <h1 className="mt-4 font-display text-[1.85rem] leading-[1.05] tracking-tight sm:text-5xl md:mt-8 md:text-7xl lg:text-[5.5rem]">
            {t.hero.titleA} <span className="italic text-gold">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-parchment/70 sm:text-base md:mt-8 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-5 grid w-full max-w-4xl gap-2 sm:mt-14 sm:grid-cols-3 sm:gap-4">
            {t.hero.badges.map((b) => (
              <div key={b.t} className="card-navy flex items-center gap-3 p-3 text-left sm:gap-4 sm:p-5">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[color:var(--success)] sm:h-9 sm:w-9">
                  <Check className="h-4 w-4 text-ink" strokeWidth={3} />
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-parchment sm:text-sm">{b.t}</div>
                  <div className="text-[11px] text-parchment/60 sm:text-xs">{b.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-2.5 sm:mt-12 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#contato" className="btn-gold justify-center">
              <Phone className="h-4 w-4" /> {t.cta.solicitar}
            </a>
            <a href="#resultados" className="btn-outline-gold justify-center">
              <FileText className="h-4 w-4" /> {t.cta.casos}
            </a>
          </div>
        </div>
      </section>



      {/* AWARDS BAR */}
      <section className="border-y border-border bg-ink-2/40 py-6 md:py-8">
        <div className="container-lux">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <span className="text-[11px] uppercase tracking-[0.28em] text-parchment/50">
              {t.awards.label}
            </span>
            <div className="grid w-full grid-cols-3 items-start gap-3 md:max-w-4xl md:gap-8">
              {t.awards.items.map((a) => (
                <div key={a.y} className="flex flex-col items-center gap-1.5 text-center md:gap-2">
                  <Award className="h-6 w-6 text-gold md:h-9 md:w-9" strokeWidth={1.3} />
                  <div className="font-display text-sm text-parchment md:text-lg">{a.y}</div>
                  <div className="text-[11px] text-parchment/80 md:text-sm">{a.t}</div>
                  <div className="hidden text-[10px] uppercase tracking-[0.2em] text-parchment/50 md:block">
                    {a.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESCRITÓRIO */}
      <section id="escritorio" className="py-8 md:py-32">
        <div className="container-lux text-center">
          <span className="gold-pill">
            <Trophy className="h-3.5 w-3.5" /> {t.escritorio.pill}
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-6xl">
            {t.escritorio.titleA} <span className="italic text-gold">{t.escritorio.titleAccent}</span> {t.escritorio.titleB}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:mt-8 sm:text-lg leading-relaxed text-parchment/70">
            {t.escritorio.body}
          </p>
        </div>
      </section>

      {/* ATUAÇÃO */}
      <section id="atuacao" className="border-y border-border bg-ink-2/30 py-8 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <Scale className="h-3.5 w-3.5" /> {t.atuacao.pill}
            </span>
            <h2 className="mt-6 font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-5xl">
              {t.atuacao.titleA} <span className="italic text-gold">{t.atuacao.titleAccent}</span>
            </h2>
            <p className="mt-4 text-sm text-parchment/70 sm:mt-6 sm:text-base">{t.atuacao.subtitle}</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-16 sm:gap-6">
            {t.atuacao.services.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <ExpandableCard
                  key={s.title}
                  Icon={Icon}
                  tag={s.tag}
                  title={s.title}
                  text={s.text}
                  moreLabel={t.cta.saibaMais}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-8 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <ShieldCheck className="h-3.5 w-3.5" /> {t.why.pill}
            </span>
            <h2 className="mt-6 font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-5xl">
              {t.why.titleA} <span className="italic text-gold">{t.why.titleAccent}</span> {t.why.titleB}
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-16 sm:gap-6">
            {t.why.items.map((w, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div key={w.title} className="card-navy p-3 text-center sm:p-8">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30 sm:h-16 sm:w-16">
                    <Icon className="h-5 w-5 text-gold sm:h-8 sm:w-8" strokeWidth={1.3} />
                  </div>
                  <h3 className="mt-2 font-display text-[13px] leading-tight text-parchment sm:mt-6 sm:text-2xl">{w.title}</h3>
                  <p className="mt-1.5 hidden text-sm leading-relaxed text-parchment/65 sm:mt-3 sm:block">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="border-y border-border bg-ink-2/30 py-8 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <ClipboardList className="h-3.5 w-3.5" /> {t.metodo.pill}
            </span>
            <h2 className="mt-6 font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-5xl">
              {t.metodo.titleA} <span className="italic text-gold">{t.metodo.titleAccent}</span> {t.metodo.titleB}
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-16 sm:gap-6 lg:grid-cols-4">
            {t.metodo.items.map((m, i) => {
              const Icon = METHOD_ICONS[i];
              return (
                <div key={m.t} className="card-navy relative p-3 sm:p-8">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink font-display text-sm sm:h-12 sm:w-12 sm:text-xl">
                      {i + 1}
                    </div>
                    <Icon className="h-4 w-4 text-gold/70 sm:h-6 sm:w-6" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-2 font-display text-[13px] leading-tight text-parchment sm:mt-6 sm:text-2xl">{m.t}</h3>
                  <p className="mt-1.5 hidden text-sm leading-relaxed text-parchment/65 sm:mt-3 sm:block">{m.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-8 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <Trophy className="h-3.5 w-3.5" /> {t.resultados.pill}
            </span>
            <h2 className="mt-6 font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-5xl">
              {t.resultados.titleA} <span className="italic text-gold">{t.resultados.titleAccent}</span>
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-16 sm:gap-6">
            {t.resultados.cases.map((c) => (
              <div key={c.t} className="card-navy p-3 text-center sm:p-10">
                <div className="font-display text-2xl text-gold sm:text-5xl md:text-6xl">{c.v}</div>
                <div className="mt-1.5 text-[9px] uppercase tracking-[0.16em] text-parchment/60 sm:mt-3 sm:text-[11px] sm:tracking-[0.22em]">
                  {c.t}
                </div>
                <p className="mt-2 hidden text-sm leading-relaxed text-parchment/70 sm:mt-5 sm:block">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÓCIA */}
      <section className="border-y border-border bg-ink-2/30 py-8 md:py-32">
        <div className="container-lux grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <img
                src={attorney}
                alt={t.socia.name}
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink to-transparent p-6">
                <div className="font-display text-xl text-parchment sm:text-2xl">{t.socia.name}</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  {t.socia.role}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <span className="gold-pill">
              <Scale className="h-3.5 w-3.5" /> {t.socia.pill}
            </span>
            <blockquote className="mt-8 font-display text-3xl leading-[1.25] text-parchment md:text-4xl">
              {t.socia.quote}
            </blockquote>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <div className="font-display text-3xl text-gold">LL.M.</div>
                <div className="text-xs uppercase tracking-[0.18em] text-parchment/60">
                  {t.socia.llLabel}
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">{t.socia.yearsValue}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-parchment/60">
                  {t.socia.yearsLabel}
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">Chambers</div>
                <div className="text-xs uppercase tracking-[0.18em] text-parchment/60">
                  {t.socia.chambersLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENÇA GLOBAL */}
      <section id="presenca" className="py-8 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <Globe className="h-3.5 w-3.5" /> {t.presenca.pill}
            </span>
            <h2 className="mt-6 font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-5xl">
              {t.presenca.titleA} <span className="italic text-gold">{t.presenca.titleAccent}</span>
            </h2>
            <p className="mt-4 text-sm text-parchment/60 sm:mt-6 sm:text-base">{t.presenca.subtitle}</p>
          </div>

          <div className="relative mt-8 overflow-hidden md:mt-16 rounded-2xl border border-border bg-ink-2/40">
            <img
              src={worldMap}
              alt={t.presenca.mapAlt}
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

          <div className="mt-6 text-center sm:mt-12">
            <h3 className="font-display text-lg uppercase tracking-[0.18em] text-gold sm:text-2xl">
              {t.presenca.officesLabel}
            </h3>
          </div>
          <div className="mt-4 grid gap-3 sm:mt-8 sm:grid-cols-3">
            {t.presenca.offices.map((o) => (
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
      <section id="depoimentos" className="border-t border-border bg-ink-2/30 py-8 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-pill">
              <MessageCircle className="h-3.5 w-3.5" /> {t.depoimentos.pill}
            </span>
            <h2 className="mt-6 font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-5xl">
              <span className="italic text-gold">{t.depoimentos.title}</span>
            </h2>
            <p className="mt-4 text-sm text-parchment/60 sm:mt-6 sm:text-base">{t.depoimentos.subtitle}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-16 sm:gap-6 lg:grid-cols-3">
            {t.depoimentos.items.map((tt) => (
              <figure key={tt.i + tt.city} className="card-navy flex flex-col p-3 sm:p-8">
                <blockquote className="flex-1 text-[12px] leading-relaxed text-parchment/80 sm:text-sm">
                  "{tt.q}"
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-2 border-t border-border pt-3 sm:mt-6 sm:gap-4 sm:pt-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 font-display text-[11px] text-gold ring-1 ring-gold/30 sm:h-11 sm:w-11 sm:text-sm">
                    {tt.i.replace(/[^A-Z]/g, "")}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[12px] font-semibold text-parchment sm:text-sm">{tt.i}</div>
                    <div className="truncate text-[10px] text-parchment/50 sm:text-xs">{tt.city}</div>
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
        className="relative overflow-hidden border-y border-border bg-ink-2/40 py-8 md:py-32"
      >
        <div className="container-lux grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="gold-pill">
              <Phone className="h-3.5 w-3.5" /> {t.contato.pill}
            </span>
            <h2 className="mt-6 font-display text-2xl leading-tight text-parchment sm:text-4xl md:text-6xl">
              {t.contato.titleA} <span className="italic text-gold">{t.contato.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-md text-parchment/70">{t.contato.subtitle}</p>

            <div className="mt-6 space-y-4 text-sm sm:mt-10 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-parchment/50">{t.contato.emailLabel}</div>
                  <div className="text-parchment">support@ftiagent.com</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-lg sm:mt-10 border border-gold/30 bg-gold/5 p-4">
              <ShieldCheck className="h-5 w-5 flex-none text-gold" />
              <p className="text-xs leading-relaxed text-parchment/70">
                <strong className="text-parchment">{t.contato.disclaimerStrong}</strong> {t.contato.disclaimerText}
              </p>
            </div>
          </div>

          <form
            className="md:col-span-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const payload = {
                full_name: String(fd.get("full_name") ?? ""),
                email: String(fd.get("email") ?? ""),
                phone: String(fd.get("phone") ?? ""),
                country: String(fd.get("country") ?? ""),
                platform: String(fd.get("platform") ?? ""),
                amount_lost: String(fd.get("amount_lost") ?? ""),
                message: String(fd.get("message") ?? ""),
              };
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(payload),
                });
                const ctype = res.headers.get("content-type") ?? "";
                if (!ctype.includes("application/json")) {
                  const text = await res.text();
                  throw new Error(
                    `Servidor não respondeu em JSON (status ${res.status}). Verifique se a rota /api/contact foi publicada. Início da resposta: ${text.slice(0, 120)}`,
                  );
                }
                const data = (await res.json()) as { ok?: boolean; error?: string };
                if (!res.ok || !data.ok) {
                  throw new Error(data.error ?? `HTTP ${res.status}`);
                }
                alert(t.contato.success);
                form.reset();
              } catch (err) {
                alert("Error: " + (err instanceof Error ? err.message : String(err)));
              }
            }}
          >

            <div className="card-navy space-y-3 p-4 sm:space-y-5 sm:p-8 md:p-10">
              <Field label={t.contato.fNome} name="full_name" />
              <Field label={t.contato.fEmail} name="email" type="email" />
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <Field label="Phone" name="phone" type="tel" placeholder="+00 000 000" />
                <Field label="Country" name="country" placeholder="Country" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <Field label="Platform" name="platform" placeholder="Broker" />
                <Field label={t.contato.fValor} name="amount_lost" placeholder={t.contato.fValorPh} />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.22em] text-parchment/60">
                  {t.contato.fDesc}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="mt-2 w-full rounded-md border border-border bg-ink/40 px-3 py-2 text-sm text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none sm:text-base"
                  placeholder={t.contato.fDescPh}
                />
              </div>
              <button type="submit" className="btn-gold w-full">
                {t.cta.enviar} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink pt-8 pb-6 md:pt-16 md:pb-10 text-parchment/60">
        <div className="container-lux">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 text-parchment">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50">
                  <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="font-display text-lg tracking-[0.2em]">
                  FTI
                </span>
              </div>
              <p className="mt-5 max-w-xs text-sm">{t.footer.about}</p>
            </div>
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.22em] text-parchment/40">
                {t.footer.navLabel}
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
                {t.footer.contatoLabel}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                <li>support@ftiagent.com</li>
              </ul>
              <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-parchment/40">
                {t.footer.presencaLabel}
              </div>
              <p className="mt-3 text-xs text-parchment/50">{t.footer.cities}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start sm:mt-14 justify-between gap-4 border-t border-border pt-8 text-xs md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} FTI Recovery. {t.footer.copyright}</span>
            <span className="text-parchment/40">{t.footer.regulated}</span>
          </div>
        </div>
      </footer>

      {/* FLOATING CTA — ícone no mobile, botão completo no desktop */}
      <a
        href="#contato"
        aria-label={t.cta.consultaGratuita}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-gold text-ink shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5 h-14 w-14 md:h-auto md:w-auto md:px-5 md:py-3"
      >
        <MessageCircle className="h-5 w-5 md:h-4 md:w-4" />
        <span className="hidden md:inline text-xs font-semibold uppercase tracking-[0.16em]">{t.cta.consultaGratuita}</span>
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

function ExpandableCard({
  Icon,
  tag,
  title,
  text,
  moreLabel,
}: {
  Icon: typeof Bitcoin;
  tag: string;
  title: string;
  text: string;
  moreLabel: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card-navy group flex flex-col p-3 transition-all hover:border-gold/40 hover:-translate-y-1 sm:p-8">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30 sm:h-14 sm:w-14">
        <Icon className="h-4 w-4 text-gold sm:h-7 sm:w-7" strokeWidth={1.4} />
      </div>
      <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-gold sm:mt-6 sm:text-[10px] sm:tracking-[0.22em]">
        {tag}
      </div>
      <h3 className="mt-1 font-display text-[13px] leading-tight text-parchment sm:mt-2 sm:text-2xl">
        {title}
      </h3>
      <p
        className={`mt-2 flex-1 text-[12px] leading-relaxed text-parchment/65 sm:mt-4 sm:text-sm sm:block ${
          open ? "block" : "hidden"
        }`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-gold transition-transform group-hover:translate-x-1 sm:hidden"
      >
        {moreLabel} <ArrowRight className="h-3 w-3" />
      </button>
      <a
        href="#contato"
        className="mt-8 hidden items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold transition-transform group-hover:translate-x-1 sm:inline-flex"
      >
        {moreLabel} <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}
