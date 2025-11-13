# NotaryAI - Global Solution 2025 (Front-End & Web Dev)

## 1. 🚀 Visão Geral do Projeto

Este repositório contém o projeto completo para a Global Solution 2025, unificando os requisitos das disciplinas de Front-End e Web Development.

O NotaryAI é um site **"vitrine"** que apresenta uma solução fictícia para um problema alinhado ao tema "O Futuro do Trabalho": a complexidade e a burocracia dos serviços de cartório no Brasil. A nossa solução é um assistente de IA que guia o usuário em cada etapa do registro de um imóvel.

O projeto explora como a **revolução tecnológica** (IA) está transformando profissões tradicionais, demonstrando como a **inovação e a educação** podem caminhar lado a lado para simplificar processos complexos e promover a **igualdade de oportunidades** para o cidadão comum.

## 2. 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Para a estrutura de todas as páginas.
* **CSS3 Puro (Vanilla):** Para toda a estilização, sem o uso de frameworks.
* **JavaScript Puro (Vanilla):** Para toda a interatividade do formulário de cadastro e da página de simulação (demo), sem frameworks.
* **Google Fonts:** Utilização da fonte "Poppins".
* **Boxicons:** Para a iconografia do site.

## 3. 📁 Estrutura do Projeto

O projeto segue a estrutura de pastas padrão exigida:

```text
/NotaryAI (Projeto)
  |
  +-- /css
  |    +-- style.css
  |
  +-- /js
  |    +-- main.js
  |
  +-- /imagens
  |    +-- logo.png
  |    +-- ia-chat.png
  |
  +-- index.html
  |
  +-- recursos.html
  |
  +-- sobre.html
  |
  +-- cadastro.html
  |
  +-- demo.html
  |
  +-- integrantes.txt
  |
  +-- README.md
```

## 4. 📄 Páginas e Funcionalidades

O projeto excede o requisito mínimo de 3 páginas, entregando 5 páginas de conteúdo distintas:

1.  **`index.html` (Início):** A página principal que serve como "vitrine" para a solução. Apresenta o problema (a burocracia) e a solução (NotaryAI), além de uma seção de Perguntas Frequentes (FAQ).
2.  **`recursos.html` (Recursos):** Detalha as 6 principais funcionalidades da IA, como "Checklist de Documentos", "Rastreamento de Processo" e "Estimativa de Custos".
3.  **`sobre.html` (Sobre Nós):** Apresenta o manifesto do projeto (conectando-o ao tema da Global Solution), os perfis dos criadores com links e um mapa do Google Maps incorporado.
4.  **`cadastro.html` (Cadastro):** Página dedicada ao formulário complexo exigido pelos requisitos de Web Development, demonstrando validação e interatividade com JavaScript.
5.  **`demo.html` (Teste o Demo):** Uma página de simulação interativa onde o usuário pode clicar em perguntas pré-definidas e ver o assistente de IA respondendo, demonstrando o conceito da solução.

## 5. 📖 Instruções de Uso

Para executar este projeto, não é necessário um servidor ou build. Basta seguir os passos:

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `index.html` em qualquer navegador moderno.
3.  Toda a navegação, estilos e scripts funcionarão localmente.

---

## 6. ✅ Checklist de Requisitos Cumpridos

O projeto foi desenvolvido para atender 100% dos requisitos de ambos os enunciados.

### PDF 1: Requisitos de Front-End (`1ESPS - Global Solution - Front-End.pdf`)

* **[✔] Tema "Futuro do Trabalho":** O site é uma "vitrine" que propõe uma solução de IA para modernizar uma profissão tradicional, focando em "inovação e educação".
* **[✔] Estrutura HTML5:** O código utiliza tags semânticas como `<header>`, `<main>`, `<footer>`, `<section>` e `<nav>`.
* **[✔] `class` e `id`:** As classes são usadas para estilização (ex: `.btn`, `.container`) e IDs são usados para elementos únicos e ganchos de JavaScript (ex: `#btn-cad`, `#feedback-area`).
* **[✔] Estrutura de Pastas:** O projeto segue rigorosamente a estrutura solicitada (`/css`, `/imagens`, `integrantes.txt`, `index.html`).
* **[✔] CSS Externo:** Todo o estilo está contido em `css/style.css`.
* **[✔] Google Fonts:** Utiliza a fonte "Poppins" importada do Google Fonts.
* **[✔] Ícones:** Utiliza ícones do Boxicons em várias seções (ex: `recursos.html`).
* **[✔] Menu de Navegação Funcional:** O `<header>` contém um menu funcional presente em todas as 5 páginas.
* **[✔] Mínimo de 3 Páginas:** O projeto **excede** o requisito, entregando 5 páginas.
* **[✔] Layout com Flexbox:** Flexbox é usado para o alinhamento principal do layout, incluindo o cabeçalho, rodapé e os grids de conteúdo (ex: `.header-container`, `.problem-grid`, `.content-grid`).
* **[✔] Design Coerente:** A paleta de cores e a tipografia "Poppins" são mantidas em todo o site.

### PDF 2: Requisitos de Web Dev (`GS-Webdev-Enunciado.pdf`)

* **[✔] JavaScript Puro (Vanilla):** O arquivo `js/main.js` não utiliza frameworks ou bibliotecas (como jQuery).
* **[✔] Título do Formulário:** O formulário em `cadastro.html` possui o título "Inscrição para o Programa FutureSkills".
* **[✔] Campos Obrigatórios do Formulário:**
    * `Nome Completo` (Texto): **Implementado**.
    * `CPF` (Texto): **Implementado**.
    * `e-mail` (Texto): **Implementado**.
    * `Lista de Habilidades` (Select/Radio): **Implementado** como `<select>`.
    * `Tipo de Interesse` (Select/Radio): **Implementado** como `<select>`.
    * `Botão de Adicionar Habilidade` (Button): **Implementado** (chama a função `addSkill()`).
    * `Lista de Habilidades Adicionadas` (Área de Lista): **Implementado** como uma `<div>` (`#habilidades-adicionadas`).
    * `Botão de Submissão` (Button): **Implementado** (chama a função `validateForm()`).
    * `Área de Feedback` (`<div>` ou `<span>`): **Implementado** como uma `<div>` (`#feedback-area`).
* **[✔] Requisitos de JavaScript:**
    * **Funções:** O projeto utiliza múltiplas funções (`validateForm()`, `addSkill()`, `removeSkill()`, `showDemoResponse()`). A função `validateForm()` é a principal que coordena a validação.
    * **Vetores (Arrays):**
        1.  O vetor `addedSkills = []` é usado para armazenar as habilidades que o usuário adiciona.
        2.  O vetor `feedbackMessages = []` é usado para armazenar mensagens de erro de validação, que são então passadas para a área de feedback.
    * **Manipulação de Strings:**
        1.  A validação do CPF e do Email no `js/main.js` usa `.test()` (Regex) para checar o formato.
        2.  A validação do Nome Completo usa `.trim()`.
    * **Manipulação do DOM:**
        1.  Todos os dados dos inputs são lidos usando `document.getElementById('...').value`.
        2.  Todas as mensagens de sucesso ou erro são escritas na área de feedback usando `document.getElementById('feedback-area').innerHTML`.

---

## 7. 👥 Autores

Este projeto foi desenvolvido pela equipe, conforme requisito do `README.md`.

* **Wenderson da Silva Santos** - RM: 567847
    * *Responsável pelo HTML, CSS e JavaScript*
    * GitHub: [wdnhash](https://github.com/wdnhash)

* **Douglas Taveira Vilella Roberto** - RM: 567846
    * *Responsável pelo Bot (Conceito e Funcionalidades)*
