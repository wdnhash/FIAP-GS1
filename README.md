# 🏛️ NotaryAI - O Futuro do Trabalho nos Cartórios

> **Global Solution 2025 - FIAP**
> *Engenharia de Software | Web Development & Front-End Design*

## 👥 Integrantes & Colaboradores
* **Wenderson da Silva Santos** - RM: 567847
* **Douglas Taveira Vilella Roberto** - RM: 567846
* **Igor Davi Avelar Rosa Cesário** - RM: 568163

---

## 💡 Sobre o Projeto: Conectando Tecnologia e Realidade

O **NotaryAI** é uma plataforma web concebida para desmistificar e democratizar o acesso aos serviços de registro de imóveis.

**O Problema:**
A burocracia cartorária é frequentemente opaca, cheia de termos jurídicos complexos ("juridiquês") e processos que intimidam o cidadão comum. Como profissionais atuantes na área de cartórios (Wenderson e Douglas), vivenciamos diariamente a dificuldade das pessoas em entender documentos básicos e requisitos legais.

**A Solução:**
Utilizando o conceito de **Futuro do Trabalho**, criamos um assistente inteligente e uma plataforma educativa. A tecnologia não substitui o fator humano de julgamento e fé pública, mas atua na **educação e triagem**, permitindo que o cidadão chegue ao cartório preparado e que os profissionais foquem em casos complexos.

---

## 📚 Dedicação e Aprendizado Contínuo

Este projeto foi desenvolvido com **100% de código autoral**, sem o uso de frameworks ou bibliotecas externas (como Bootstrap, jQuery ou React), respeitando rigorosamente o uso de **HTML, CSS e JavaScript Puro (Vanilla)**.

Mesmo com conteúdos que ainda não foram abordados em profundidade nas aulas, a equipe se esforçou para estudar por fora e implementar funcionalidades avançadas de manipulação do DOM e validação. Utilizamos as seguintes referências para construir este projeto:

* **[Curso em Vídeo (Gustavo Guanabara)](https://www.cursoemvideo.com/curso/html5/):** Base sólida para estruturação semântica HTML5 e estilização com CSS3 moderno.
* **[Alura (Formação Front-End)](https://www.alura.com.br/curso-online-javascript-web-paginas-dinamicas):** Cursos de JavaScript para entender a manipulação de elementos, eventos e lógica de programação para web.
* **[MDN Web Docs (Mozilla)](https://developer.mozilla.org/pt-BR/):** Consulta constante à documentação oficial para aplicar as melhores práticas da linguagem e resolver desafios técnicos.

Nosso objetivo foi não apenas cumprir a tabela de requisitos, mas demonstrar domínio real sobre as tecnologias fundamentais da Web, indo além do básico esperado.

---

## 🚀 Alinhamento com a Global Solution

Este projeto atende diretamente aos desafios propostos na Global Solution:

1.  **Inclusão e Educação:** O projeto foca no **ODS 4 (Educação de Qualidade)** e **ODS 10 (Redução das Desigualdades)**, garantindo que o conhecimento jurídico não seja um privilégio de poucos.
2.  **Tecnologia como Parceira:** Seguimos a premissa de que a IA deve ser parceira do ser humano, automatizando tarefas repetitivas e liberando tempo para competências humanas como empatia e pensamento crítico.
3.  **Futuro do Trabalho:** Propomos um modelo onde a tecnologia personaliza jornadas de aprendizagem para o cidadão e moderniza o ambiente de trabalho tradicional dos cartórios.

---

## 🛠️ Funcionalidades e Requisitos Técnicos Cumpridos

O projeto foi dividido em duas grandes entregas técnicas que se complementam:

### 1. Front-End (Design e Estrutura)
* **Estrutura Semântica:** Uso rigoroso de HTML5 (`header`, `main`, `section`, `footer`).
* **Estilização:** Design responsivo utilizando **Flexbox** para layouts modernos e organizados.
* **Identidade Visual:** Uso de variáveis CSS (`:root`), fontes importadas (Google Fonts - Poppins) e paleta de cores institucional (#0A2342) para transmitir confiança.
* **Navegação:** Site multipáginas (Início, Recursos, Sobre, Cadastro, Demo) com menu funcional.
* **Interatividade:** Página de demonstração (`demo.html`) simulando um Chatbot com respostas dinâmicas.

### 2. Web Development (Lógica e JavaScript)
A lógica principal está concentrada na página **`cadastro.html`** e no arquivo **`js/main.js`**, implementando um formulário de inscrição para o programa "FutureSkills" com validação robusta.

| Requisito Técnico | Implementação no Código | Arquivo |
| :--- | :--- | :--- |
| **Funções JS** | Criação de `validarFormulario()`, `checarEmail()`, `checarCPF()` e `addSkill()`. | `main.js` |
| **Vetores (Arrays)** | Uso do array `addedSkills = []` para armazenar e gerenciar as habilidades do usuário. | `main.js` |
| **Manipulação de Strings** | Validação de Email e CPF utilizando Regex e métodos de string nativos. | `main.js` |
| **Manipulação do DOM** | Captura de valores via `getElementById`, criação dinâmica de elementos (`createElement`) e inserção visual das tags de habilidades. | `main.js` |
| **Validação de Campos** | Validação obrigatória de Nome, CPF, Email e seleção de interesses antes do envio. | `main.js` |
| **Feedback ao Usuário** | Exibição de erros ou mensagens de sucesso na área dedicada (`div#feedback-area`) via injeção de HTML. | `main.js` |

---

## 📂 Estrutura de Pastas

O projeto segue a organização solicitada para facilitar a avaliação:

```
/
├── index.html          # Página Inicial (Hero e Visão Geral)
├── cadastro.html       # Página do Formulário (Foco da validação JS)
├── recursos.html       # Detalhes das ferramentas da IA
├── sobre.html          # Informações sobre a equipe e localização
├── demo.html           # Demonstração interativa do Chatbot
├── integrantes.txt     # Lista de RMs
├── css/
│   └── style.css       # Estilos Globais e Responsividade
├── js/
│   └── main.js         # Toda a lógica de validação e interatividade
└── images/             # Logos e ativos visuais
    └── banner.jpg
    └── logo.png
    └── ia-chat.png
    └── doug.jpg
    └── igor.jpeg
    └── wendd.jpg
```

---

## 🖥️ Como Rodar o Projeto

### 🌐 Acesso Online (GitHub Pages)
O projeto está hospedado e disponível para acesso imediato, sem necessidade de instalação, através do link abaixo:

👉 **[Acessar NotaryAI no GitHub Pages](https://wdnhash.github.io/FIAP-GS1/)**

### 💻 Instalação Local
Caso prefira baixar e rodar em sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/wdnhash/FIAP-GS1.git](https://github.com/wdnhash/FIAP-GS1.git)
    ```
2.  **Abra o projeto:**
    Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador de preferência (Chrome, Firefox, Edge).
3.  **Navegação:**
    * Utilize o menu superior para navegar entre as páginas.
    * Acesse **"Cadastre-se"** para testar a validação do formulário via JavaScript.
    * Acesse **"Demo"** para ver a simulação da IA.

---

<p align="center">Desenvolvido com 💙 e muito café por futuros Engenheiros de Software.</p>