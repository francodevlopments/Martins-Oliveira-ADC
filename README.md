# Martins de Oliveira Advogados

Site institucional desenvolvido com React, TypeScript, Vite e CSS puro.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Publicação

O projeto está configurado para GitHub Pages, inclusive em subpastas, com `base: './'`. O workflow em `.github/workflows/deploy-pages.yml` é acionado após push para a branch `main`.

## Conteúdo e imagens

Os dados empresariais ficam centralizados em `src/data/business.ts`. A interface foi estruturada para receber fotografias públicas e confirmadas do escritório em `public/assets/google-maps/`; não são incluídas imagens genéricas ou de banco de imagens.
