## Diagnóstico

O `POST /api/contact` está dando erro 500 no preview do Lovable porque:

- O endpoint atual mora em `functions/api/contact.ts` (Cloudflare **Pages Function**).
- O preview do Lovable roda em **Cloudflare Worker** (via TanStack Start SSR), que **não executa** arquivos em `functions/`.
- Sem esse handler, a URL cai no fallback SPA → devolve HTML → o front tenta `res.json()` → erro.

## Objetivo

Fazer o formulário funcionar tanto no preview do Lovable quanto no deploy real na Cloudflare Pages, sem duplicar lógica.

## Mudanças

1. **Criar rota TanStack `src/routes/api/contact.ts`** (server route com `createFileRoute`)
   - Handlers `POST` e `OPTIONS`, sempre respondendo `application/json` (200/400/405/500).
   - Valida `full_name` e `email` (Zod), aplica `.trim()` e limites de tamanho.
   - Se `process.env.DB` / binding D1 estiver disponível → insere em `contacts`.
   - Se não estiver (preview Lovable, sem D1) → apenas loga `console.info("[contact] submission", ...)` (visível em `server-function-logs`) e retorna `{ ok: true, stored: false }`. Assim o front testa o fluxo de sucesso normalmente.

2. **Remover `functions/api/contact.ts`**
   - A rota TanStack já é servida pelo Worker gerado por `wrangler deploy`, com acesso ao binding `DB` declarado em `wrangler.toml`. Um único caminho de código, sem risco de divergência.

3. **Ajustar o front (`src/routes/index.tsx`)**
   - Manter o `fetch("/api/contact", ...)` como está.
   - Melhorar a mensagem de erro caso `res.ok` seja falso, mostrando o `error` do JSON quando existir.

4. **Não mexer em nada de UI/i18n/layout.**

## Detalhes técnicos

- O binding D1 (`DB`) é injetado pelo Cloudflare Workers em runtime; acesso via `getRequest()` do TanStack não expõe `env` diretamente, então usaremos o padrão suportado: ler `env` do contexto do handler via `(globalThis as any).__env` **não** é confiável — a forma correta é usar o wrapper que o TanStack Worker já expõe no `context` do server-route (ou, se indisponível, cair no fallback "sem D1" e continuar respondendo JSON válido). Em produção Cloudflare o binding é acessado via o mesmo caminho que `src/server.ts` já usa hoje.
- Se o acesso ao binding via server-route não estiver disponível na versão atual do TanStack Start deste projeto, mantemos `src/server.ts` como interceptador do path `/api/contact` (que já lê `env.DB` corretamente no Worker) e a nova rota TanStack serve **apenas** como fallback para o preview Lovable. Assim: produção usa `env.DB`; preview responde JSON de sucesso simulado.
- Nenhuma alteração de schema SQL — a tabela `contacts` já existe no seu D1.
