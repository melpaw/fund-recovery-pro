## Ajustes solicitados

**1. Logo sobreposta pelo menu (header)**
- Em `src/routes/index.tsx`, adicionar `z-index` maior na logo e/ou reorganizar o header para que o link "Início" e demais itens do menu não sobreponham a logo em larguras intermediárias. Garantir `flex-shrink-0` na logo e ajustar breakpoints do menu (mostrar hamburguer um pouco antes, ex.: `lg:` em vez de `md:`).

**2. Letra "I" do "FTI" em amarelo → branco**
- Localizar em `src/routes/index.tsx` (e onde mais aparecer) o texto do logotipo "FTI" que renderiza o "I" com classe de cor accent/dourada e trocar para a mesma cor das outras letras (foreground/branco).

**3. Bandeira do inglês: "gb en" → "uk en"**
- Em `src/lib/i18n.tsx` (ou no componente LanguageSwitcher), trocar o código/emoji da bandeira do idioma English de GB para UK (🇬🇧 permanece o mesmo emoji, mas o rótulo textual deve mostrar "UK EN" em vez de "GB EN").

**4. Rodapé — lista de cidades**
- No footer em `src/routes/index.tsx`, remover "Frankfurt" e "Nova York" e adicionar "Viena", resultando em: `Londres · Viena · Zurique · Madrid · Paris · Toronto · São Paulo · Buenos Aires`.

**5. Email de contato**
- Substituir todas ocorrências do email atual por `support@ftiagent.com` em `src/routes/index.tsx` e `src/lib/i18n.tsx` (traduções e links `mailto:`).

**6. Favicon com a logo enviada**
- Copiar `user-uploads://Screenshot_2026-07-05_041057.png` para `public/favicon.png`.
- Atualizar `src/routes/__root.tsx` no bloco `links`: substituir `{ rel: "icon", href: "/favicon.ico" }` por `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
- Remover o arquivo padrão `public/favicon.ico`.

Nenhuma lógica de backend é alterada; apenas UI, i18n e assets estáticos.
