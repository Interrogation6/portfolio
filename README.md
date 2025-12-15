# Portfolio

Este repositório contém o código-fonte do meu Portfólio personalizado.

**Resumo rápido:** aplicação front-end construída com React + TypeScript e Vite, estilizada com TailwindCSS.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)
- react-icons

## Dependências (conforme package.json)

Runtime:
- react
- react-dom
- lucide-react
- react-icons
- tailwindcss

Dev / Build:
- vite
- typescript
- @vitejs/plugin-react
- eslint (configurações e plugins)

## Estrutura de diretórios

Pasta `src/`:

- `assets/` - imagens e recursos estáticos (somente icone do site)
- `components/` - componentes React (ex: `about.tsx`, `mainContent.tsx`, `gitCard.tsx`, `projetos.tsx`, `contacts.tsx`)
- `contexts/` - contextos de classes
- `hooks/` - hooks/triggers do projeto
- `pages/` - páginas ou seções da aplicação
- `providers/` - providers de dados
- `styles/` - arquivos CSS customizados
- `types/` - definições de tipos TypeScript

Arquivos de configuração:

- `vite.config.ts` - configuração do Vite
- `tsconfig.json` / `tsconfig.app.json` - TypeScript
- `package.json` - scripts e dependências
- `index.html` - entrada da aplicação

## Instalação e execução local

Pre-requisitos:
- Node.js (recomenda-se v18+)

Instalação das dependências:

```bash
npm install
```

Modo desenvolvimento (servidor local com hot-reload):

```bash
npm run dev
```

Produção / build estático:

```bash
npm run build

# visualizar build produzido
npm run preview
```

Observação: o script `build` executa `tsc -b` e depois `vite build` conforme `package.json`.


## Link do site publicado

Este projeto foi publicado dentro do Render no link:

- https://portfolio-7o6t.onrender.com/


