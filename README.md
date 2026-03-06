# 🏷️ Portfólio Profissional 👨‍💻

## 📝 Sobre o Projeto

Este projeto foi desenvolvido pelos desenvolvedores Ana Flávia e Miguel Matins. Ele é um portfólio profissional interativo, desenvolvido em Vue 3 com TypeScript, com o objetivo de apresentar nossas respectivas experiências, projetos e competências técnicas de forma diferenciada e memorável. Ele foi concebido não apenas como uma vitrine de trabalhos realizados, mas como uma demonstração prática das nossas habilidades em arquitetura front-end, organização modular, roteamento, gerenciamento de estado e construção de interfaces temáticas.

A motivação para sua criação surgiu da percepção de que muitos portfólios profissionais seguem um padrão visual muito semelhante e pouco interativo. A proposta deste projeto é romper com esse modelo tradicional ao incorporar uma interface inspirada em terminais clássicos, como o IBM PC 5150, combinando estética retrô com tecnologias modernas. Essa abordagem permite transformar a navegação em uma experiência imersiva, incluindo comandos no estilo DOS, efeitos visuais de CRT e transições entre modos de interface.

O projeto resolve, portanto, a necessidade de se destacar em um cenário competitivo, oferecendo uma experiência mais envolvente para recrutadores e visitantes. Além de apresentar informações sobre projetos e experiências, ele demonstra domínio técnico na prática, evidenciando organização estrutural, uso de Vue Router para navegação dinâmica, Pinia para gerenciamento de estado e Vite como ferramenta de build.

Seu contexto é ao mesmo tempo profissional e experimental. Profissional porque funciona como portfólio público; experimental porque serve como laboratório para explorar conceitos de interface, design retrô aplicado a aplicações modernas e interações diferenciadas, como sistemas de comandos e simulações de boot.

Ele pode ser utilizado como apresentação em processos seletivos, como base de estudos sobre UI temática ou como referência de arquitetura front-end modular e escalável. Mais do que apenas expor projetos, o portfólio entrega uma identidade visual forte, uma experiência interativa e uma demonstração concreta de engenharia de interface aplicada.

Em essência, este projeto não é apenas um site pessoal, mas uma aplicação concebida para unir nostalgia tecnológica e arquitetura moderna, reforçando minha capacidade de transformar conceitos criativos em soluções técnicas bem estruturadas.

---

## ✨ Funcionalidades Principais

- 🖥 **Interface Retrô Interativa:** Layout inspirado em terminais clássicos (IBM PC 5150), com efeitos visuais de CRT, cursor piscante e estética de monitor antigo.

- ⌨ **Navegação por Comandos:** Sistema de navegação via linha de comando, permitindo acessar páginas como `home`, `sobre-mim`, `projetos`, `experiencias` e `contatos` diretamente pelo terminal.

- 🔄 **Sistema de Roteamento Dinâmico:** Navegação estruturada com Vue Router, incluindo carregamento sob demanda (lazy loading) para melhor desempenho.

- 🎛 **Alternância de Tema:** Possibilidade de alternar entre interfaces retrô e atuais

- 📦 **Simulação de Transferência XMODEM:** Experiência interativa inspirada em protocolos clássicos de download, com transição entre layout retrô e moderno.

- 🧠 **Gerenciamento de Estado:** Controle de layout e preferências do usuário utilizando Pinia.

- ⚡ **Performance Otimizada:** Build moderna com Vite, garantindo carregamento rápido e desenvolvimento ágil.

- 🧩 **Estrutura Modular:** Organização por módulos (sobre mim, projetos, experiências e contatos), facilitando manutenção e escalabilidade.

- 📱 **Layout Responsivo:** Adaptação da interface para diferentes tamanhos de tela, mantendo a identidade visual do projeto.

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas, frameworks e bibliotecas foram utilizados na construção deste projeto. Recomenda-se o uso das versões listadas (ou superiores) para garantir a compatibilidade.

* **Framework:** Vue.js 3
* **Linguagem:** TypeScript
* **Estilização:** CSS customizado (estilo CRT/terminal), Tailwind CSS 4
* **Roteamento:** Vue Router 4 (com lazy loading)
* **Gerenciamento de Estado:** Pinia
* **Build:** Vite 7 (com vue-tsc para checagem de tipos no build)
* **Bibliotecas auxiliares:** vue-typed-js (Typed.js), Fuse.js (busca fuzzy)

---

## 🔧 Instalação e Execução

### Pré-requisitos

Antes de iniciar o projeto, certifique-se de que seu ambiente esteja configurado com as seguintes ferramentas:

- **Node.js:** Versão LTS (v18.x ou superior)
- **Gerenciador de Pacotes:** npm (já incluído com o Node.js)
- **Git:** Para clonar o repositório
- **Navegador Moderno:** Chrome, Firefox ou Edge atualizados

---

#### Variáveis de Ambiente (opcional)

Se o projeto utilizar integração com **EmailJS** (formulário de contato), configure as variáveis no painel da Vercel (Project Settings > Environment Variables) ou crie um arquivo **`.env.local`** dentro da pasta **`portfolio-profissional`**:

```
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID_FOR_ME=seu_template_id_for_me_aqui
VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER=seu_template_id_for_sender_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

> **Obs:** Em projetos **Vite**, variáveis expostas ao cliente devem começar com `VITE_`. O arquivo `.env.local` não deve ser versionado (inclua-o no `.gitignore`).

### 📦 Instalação de Dependências

1. **Clone o repositório:**

```bash
git clone <URL_DO_REPOSITÓRIO>
cd portfolio-profissional/portfolio-profissional
```

2. **Instale as dependências e execute:**

```bash
npm install
npm run portfolio-dev
```

O projeto estará disponível em `http://localhost:5173` (ou na porta indicada pelo Vite).

**Scripts disponíveis:**

| Script | Descrição |
|--------|-----------|
| `npm run portfolio-dev` | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build` | Verificação TypeScript + build de produção (pasta `dist`) |
| `npm run preview` | Serve a pasta `dist` localmente para testar o build |

## 🚀 Deploy
Instruções para deploy em produção (apenas front-end estático).

1.  **Build do projeto:** Entre na pasta da aplicação e execute o build. A pasta **`dist`** será gerada com os arquivos estáticos.

```bash
# Build do projeto (Vue/Vite) - Gera a pasta /dist com arquivos estáticos
cd portfolio-profissional/portfolio-profissional
npm install
npm run build
```

2.  **Configuração do ambiente (opcional):** Se usar EmailJS, configure no provedor: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID_FOR_ME`, `VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER`, `VITE_EMAILJS_PUBLIC_KEY`.

3. **Preview e hospedagem:** Para testar o build localmente: `cd portfolio-profissional/portfolio-profissional && npm run preview`. Para produção: front-end estático apenas — use Vercel, Netlify ou upload da pasta `dist`. Vercel/Netlify: raiz `portfolio-profissional`, build `npm run build`, output `dist`.

---

## 📂 Estrutura de Pastas

Estrutura principal da aplicação Vue (pasta `portfolio-profissional`):

```
portfolio-profissional/
├── index.html              # Página HTML principal
├── package.json            # Dependências e scripts
├── vite.config.ts          # Configuração do Vite
├── tsconfig.json           # Configuração do TypeScript
│
└── src/
    ├── main.ts             # Entrada da aplicação
    ├── App.vue             # Componente raiz
    ├── style.css           # Estilos globais
    ├── loading.ts          # Estado global de boot
    ├── vite-env.d.ts       # Tipos do Vite
    │
    ├── assets/             # Recursos estáticos
    │   ├── crt.css         # Estilos do tema CRT/terminal
    │   └── modern.css      # Estilos do tema moderno
    │
    ├── components/         # Componentes reutilizáveis
    │   ├── BootLoading.vue # Animação de boot
    │   └── XmodemDownload.vue
    │
    ├── layouts/            # Layouts (retrô e moderno)
    │   ├── RetroLayout.vue
    │   └── ModernLayout.vue
    │
    ├── views/              # Páginas/rotas
    │   ├── LayoutAwareView.vue  # View que escolhe layout por rota
    │   ├── HomeViewOld.vue
    │   └── HomeViewModern.vue
    │
    ├── app/module/         # Módulos por seção (sobre mim, projetos, experiências, contatos)
    │   ├── sobremim/       # SobreMimViewOld.vue, SobreMimViewModern.vue
    │   ├── projetos/       # ProjetosViewOld.vue, ProjetosViewModern.vue
    │   ├── experiencias/   # ExperienciasViewOld.vue, ExperienciasViewModern.vue
    │   └── contatos/       # ContatosViewOld.vue, ContatosViewModern.vue
    │
    ├── router/             # Vue Router
    │   └── index.ts
    │
    ├── stores/             # Pinia (estado global)
    │   └── layout.ts
    │
    └── util/               # Utilitários
        └── xmodemDownload.ts
```

---

## 🎥 Demonstração

Adicione GIFs ou screenshots do portfólio (telas em tema retrô e tema moderno) para mostrar o projeto em ação.

---

## 🧪 Testes

Este projeto não possui testes automatizados configurados no momento. Para incluir testes no futuro, recomenda-se:

- **Testes unitários:** Vitest (integrado ao ecossistema Vite/Vue)
- **Testes E2E:** Cypress ou Playwright

Exemplo de execução após configuração:

```bash
cd portfolio-profissional/portfolio-profissional
npm run test        # testes unitários
npm run test:e2e    # testes E2E (se configurado)
```

---

## 🔗 Documentações utilizadas

* 📖 **Vue.js:** [Documentação Oficial do Vue 3](https://vuejs.org/)
* 📖 **Vite:** [Guia de Configuração do Vite](https://vitejs.dev/config/)
* 📖 **Vue Router:** [Vue Router 4](https://router.vuejs.org/)
* 📖 **Pinia:** [Pinia – Estado para Vue](https://pinia.vuejs.org/)
* 📖 **Conventional Commits:** [Padrão de mensagens de commit](https://www.conventionalcommits.org/en/v1.0.0/)

---
<!-- ## 👥 Autores
Liste os principais contribuidores. Você pode usar links para seus perfis.

| 👤 Nome | 🖼️ Foto | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|----------|-----------------|-------------|-----------|
| Ana Flávia de Souza Ribeiro  | <div align="center"><img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/user1"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/user1"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:user1@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |
| Miguel Martins  | <div align="center"><img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/user2"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/user2"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:user2@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |

> [!TIP]
> 💡 **Dica:** Escolha uma foto profissional, preferencialmente de rosto, evitando imagens com baixa qualidade, filtros excessivos ou elementos distrativos.

--- -->

## 🤝 Contribuição
Guia para contribuições ao projeto.

1.  Faça um `fork` do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`). **(Utilize [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))**
4.  Faça o `push` para a branch (`git push origin feature/minha-feature`).
5.  Abra um **Pull Request (PR)**.

> [!IMPORTANT]
> 📝 **Regras:** Por favor, verifique o arquivo [`CONTRIBUTING.md`](./CONTRIBUTING.md) para detalhes sobre nosso guia de estilo de código e o processo de submissão de PRs.

---

## 🙏 Agradecimentos
Em ambiente acadêmico, citar fontes e inspirações é crucial (integridade acadêmica). Em ambiente profissional, mostra humildade e conexão com a comunidade.

Gostaria de agradecer aos seguintes canais e pessoas que foram fundamentais para o desenvolvimento deste projeto:

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) - Pelo apoio institucional, estrutura acadêmica e fomento à inovação e boas práticas de engenharia.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) - Pelos valiosos ensinamentos sobre **Arquitetura de Software** e **Padrões de Projeto**.
* [**Fernanda Kipper**](https://www.instagram.com/kipper.dev/) - Pelos valiosos ensinamentos em **Desenvolvimento Web**, **DevOps** e melhores práticas em **Front-end**.
* [**Rodrigo Branas**](https://branas.io/) - Pela didática excepcional em **Clean Architecture** e **Clean Code**.
* [**Código Fonte TV**](https://codigofonte.tv/) - Pelo vasto conteúdo e cobertura de notícias, tutoriais e apoio à comunidade de **Desenvolvimento Web**.

---

## 📄 Licença

Este projeto é distribuído sob a **[Licença MIT](https://github.com/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software/blob/main/LICENSE)**.

---
