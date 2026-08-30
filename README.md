# Alphractal — Tela de Login

Projeto React (Vite + TypeScript) com uma única tela: o login da Alphractal.

## Stack

- React 19 + TypeScript
- Vite 8
- CSS puro com design tokens em `src/index.css` (sem framework de UI)
- Fontes: **Outfit** (display) e **Instrument Sans** (interface), via Google Fonts

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
```

Outros scripts:

```bash
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o build
npm run lint     # oxlint
```

## Estrutura

```
src/
  components/
    Backdrop.tsx / .css   fundo em camadas: aurora, grão, vinheta
    Logo.tsx              marca "A" em SVG com gradiente
    LoginPage.tsx / .css  layout split: institucional + formulário
  App.tsx
  index.css               reset + tokens (cores, raios, tipografia)
```

## Sobre o fundo

O fundo é composto por camadas independentes em `Backdrop.css`, todas decorativas
e fora da árvore de acessibilidade:

1. **Base** — gradientes radiais azuis (canto inferior esquerdo e superior direito) sobre um degradê navy/preto.
2. **Aurora** — três manchas desfocadas com deriva lenta (`drift-a`, `drift-b`, `pulse`).
3. **Grão + vinheta** — ruído em `overlay` e escurecimento das bordas para dar profundidade.

Para calibrar a intensidade do azul, ajuste `opacity` de `.backdrop__aurora` e os
`rgba()` de `.backdrop__base`.

## Formulário

O submit é simulado (`setTimeout` de 1.1s) — não há backend. Há validação de
e-mail/telefone e senha mínima de 6 caracteres, estado de carregamento, alternância
de visibilidade da senha e feedback anunciado via `aria-live`.

Para integrar de verdade, substitua o corpo de `handleSubmit` em
`src/components/LoginPage.tsx` pela chamada à sua API de autenticação.

## Acessibilidade

- Labels visualmente ocultos, mas presentes para leitores de tela
- `aria-invalid` / `aria-describedby` ligando os campos ao feedback
- Foco visível (`:focus-visible`) em todos os controles
- Animações respeitam `prefers-reduced-motion`
