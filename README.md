# Guard Site

Landing page responsiva da Guard Proteção Veicular, baseada no visual do site institucional original.

## Stack

- Angular 20 (standalone components + standalone build)
- HTML/CSS/JS com rotas SPA

## Estrutura

- `src/app/home/`: página institucional (landing page)
- `src/app/login/`: área do associado (`/acesso`)
- `src/app/header/`, `src/app/footer/`: componentes compartilhados
- `src/styles.css`: estilos globais responsivos
- `public/assets/original/`: imagens e ícones do site

## Desenvolvimento local

```bash
npm install
ng serve -o
```

## Build de produção

```bash
ng build
```

A saída vai para `dist/guard-site/browser`. Para visualizar localmente:

```bash
npx http-server dist/guard-site/browser -o
```