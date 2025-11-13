# NotaryAI - Global Solution 2025 (Front-End & Web Dev)

## 1. 🚀 Visão Geral do Projeto

Este repositório contém o projeto completo para a Global Solution 2025, unificando os requisitos das disciplinas de Front-End e Web Development.

[cite_start]O NotaryAI é um site **"vitrine"** [cite: 3] [cite_start]que apresenta uma solução fictícia para um problema alinhado ao tema "O Futuro do Trabalho"[cite: 42, 43]: a complexidade e a burocracia dos serviços de cartório no Brasil. A nossa solução é um assistente de IA que guia o usuário em cada etapa do registro de um imóvel.

[cite_start]O projeto explora como a **revolução tecnológica** (IA) está transformando profissões tradicionais [cite: 2][cite_start], demonstrando como a **inovação e a educação** podem caminhar lado a lado [cite: 2] [cite_start]para simplificar processos complexos e promover a **igualdade de oportunidades** [cite: 2] para o cidadão comum.

## 2. 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Para a estrutura de todas as páginas.
* [cite_start]**CSS3 Puro (Vanilla):** Para toda a estilização, sem o uso de bibliotecas ou frameworks[cite: 19].
* [cite_start]**JavaScript Puro (Vanilla):** Para toda a interatividade do formulário de cadastro e da página de simulação (demo), sem frameworks[cite: 91].
* [cite_start]**Google Fonts:** Utilização da fonte "Poppins"[cite: 21].
* [cite_start]**Boxicons:** Para a iconografia do site[cite: 24].

## 3. 📁 Estrutura do Projeto

[cite_start]O projeto segue a estrutura de pastas padrão exigida[cite: 12]:

/NotaryAI (Projeto) | +-- /css | +-- style.css | +-- /js | +-- main.js | +-- /imagens | +-- logo.png | +-- ia-chat.png | +-- integrantes.txt | +-- index.html | +-- recursos.html | +-- sobre.html | +-- cadastro.html | +-- demo.html | +-- README.md

## 4. 📄 Páginas e Funcionalidades

[cite_start]O projeto excede o requisito mínimo de 3 páginas[cite: 27], entregando 5 páginas de conteúdo distintas:

1.  [cite_start]**`index.html` (Início):** A página principal que serve como "vitrine" [cite: 3] para a solução. Apresenta o problema (a burocracia) e a solução (NotaryAI), além de uma seção de Perguntas Frequentes (FAQ).
2.  **`recursos.html` (Recursos):** Detalha as 6 principais funcionalidades da IA, como "Checklist de Documentos", "Rastreamento de Processo" e "Estimativa de Custos".
3.  **`sobre.html` (Sobre Nós):** Apresenta o manifesto do projeto (conectando-o ao tema da Global Solution), os perfis dos criadores com links para o GitHub e um mapa do Google Maps incorporado com a localização do cartório.
4.  [cite_start]**`cadastro.html` (Cadastro):** Página dedicada ao formulário complexo exigido pelos requisitos de Web Development[cite: 50, 60], demonstrando validação e interatividade com JavaScript.
5.  **`demo.html` (Teste o Demo):** Uma página de simulação interativa onde o usuário pode clicar em perguntas pré-definidas e ver o assistente de IA respondendo, demonstrando o conceito da solução.

---

## 5. ✅ Checklist de Requisitos Cumpridos

O projeto foi desenvolvido para atender 100% dos requisitos de ambos os enunciados.

### [cite_start]PDF 1: Requisitos de Front-End (`1ESPS`) [cite: 1]

* [cite_start]**[✔] Tema "Futuro do Trabalho":** O site é uma "vitrine" [cite: 3] [cite_start]que propõe uma solução de IA para modernizar uma profissão tradicional, focando em "inovação e educação"[cite: 2].
* [cite_start]**[✔] Estrutura HTML5:** O código utiliza tags semânticas como `<header>`, `<main>`, `<footer>`, `<section>` e `<nav>`[cite: 7].
* [cite_start]**[✔] `class` e `id`:** As classes são usadas para estilização (ex: `.btn`, `.container`) e IDs são usados para elementos únicos e ganchos de JavaScript (ex: `#btn-cad`, `#feedback-area`)[cite: 9].
* [cite_start]**[✔] Estrutura de Pastas:** O projeto segue rigorosamente a estrutura solicitada (`/css`, `/imagens`, `integrantes.txt`, `index.html`) e a expande com `/js` e páginas adicionais[cite: 12, 13, 14, 15, 16, 17].
* [cite_start]**[✔] CSS Externo:** Todo o estilo está contido em `css/style.css`[cite: 19].
* [cite_start]**[✔] Google Fonts:** Utiliza a fonte "Poppins" importada do Google Fonts[cite: 21].
* [cite_start]**[✔] Ícones:** Utiliza ícones do Boxicons em várias seções (ex: `recursos.html`)[cite: 24].
* [cite_start]**[✔] Menu de Navegação Funcional:** O `<header>` contém um menu funcional presente em todas as 5 páginas[cite: 26].
* [cite_start]**[✔] Mínimo de 3 Páginas:** O projeto **excede** o requisito, entregando 5 páginas[cite: 27].
* [cite_start]**[✔] Layout com Flexbox:** Flexbox é usado para o alinhamento principal do layout, incluindo o cabeçalho, rodapé e os grids de conteúdo (ex: `.header-container`, `.problem-grid`, `.content-grid`)[cite: 28].
* [cite_start]**[✔] Design Coerente:** A paleta de cores (azul `primary`, branco `surface`, etc.) e a tipografia "Poppins" são mantidas em todo o site[cite: 30, 31].

### [cite_start]PDF 2: Requisitos de Web Dev (Formulário JS) [cite: 41]

* [cite_start]**[✔] JavaScript Puro (Vanilla):** O arquivo `js/main.js` não utiliza frameworks ou bibliotecas (como jQuery)[cite: 91].
* [cite_start]**[✔] Título do Formulário:** O formulário em `cadastro.html` possui o título "Inscrição para o Programa FutureSkills"[cite: 60].
* [cite_start]**[✔] Campos Obrigatórios do Formulário[cite: 61]:**
    * `Nome Completo` (Texto): **Implementado**.
    * `CPF` (Texto): **Implementado**.
    * `e-mail` (Texto): **Implementado**.
    * `Lista de Habilidades` (Select/Radio): **Implementado** como `<select>`.
    * `Tipo de Interesse` (Select/Radio): **Implementado** como `<select>`.
    * `Botão de Adicionar Habilidade` (Button): **Implementado** (chama a função `addSkill()`).
    * `Lista de Habilidades Adicionadas` (Área de Lista): **Implementado** como uma `<div>` (`#habilidades-adicionadas`).
    * `Botão de Submissão` (Button): **Implementado** (chama a função `validateForm()`).
    * `Área de Feedback` (`<div>` ou `<span>`): **Implementado** como uma `<div>` (`#feedback-area`).
* [cite_start]**[✔] Requisitos de JavaScript[cite: 64]:**
    * **Funções:** O projeto utiliza múltiplas funções. [cite_start]A função `validateForm()` é a principal que coordena a validação[cite: 67].
    * [cite_start]**Vetores (Arrays)[cite: 71]:**
        1.  [cite_start]O vetor `addedSkills = []` é usado para armazenar as habilidades que o usuário adiciona[cite: 72, 73].
        2.  [cite_start]O vetor `feedbackMessages = []` é usado para armazenar mensagens de erro de validação, que são então passadas para a área de feedback[cite: 74, 70].
    * [cite_start]**Manipulação de Strings[cite: 75]:**
        1.  [cite_start]A validação do CPF (`isValidCPF`) e do Email (`isValidEmail`) no `js/main.js` usa `.test()` (Regex) para checar o formato[cite: 76, 77].
        2.  [cite_start]A validação do Nome Completo usa `.trim()`[cite: 76].
    * [cite_start]**Manipulação do DOM[cite: 78]:**
        1.  [cite_start]Todos os dados dos inputs são lidos usando `document.getElementById('...').value`[cite: 79].
        2.  [cite_start]Todas as mensagens de sucesso ou erro são escritas na área de feedback usando `document.getElementById('feedback-area').innerHTML`[cite: 81].

## 6. 👥 Autores

Este projeto foi desenvolvido por:

* **Wenderson da Silva Santos** - RM: 567847
    * *Responsável pelo HTML, CSS e JavaScript*
    * GitHub: [wdnhash](https://github.com/wdnhash)

* **Douglas Taveira Vilella Roberto** - RM: 567846
    * *Responsável pelo Bot (Conceito e Funcionalidades)*