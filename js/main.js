let addedSkills = [];

function addSkill() {
    const selectElement = document.getElementById('habilidades-select');
    const skillText = selectElement.options[selectElement.selectedIndex].text;
    const skillValue = selectElement.value;

    if (skillValue && !addedSkills.includes(skillValue)) {
        addedSkills.push(skillValue);

        const skillsListArea = document.getElementById('habilidades-adicionadas');
        const skillTag = document.createElement('span');
        skillTag.classList.add('skill-tag');
        skillTag.setAttribute('data-value', skillValue);
        skillTag.innerHTML = `${skillText} <button type="button" onclick="removeSkill(this)">×</button>`;
        skillsListArea.appendChild(skillTag);

        selectElement.value = "";
    } else if (skillValue && addedSkills.includes(skillValue)) {
        alert('Esta habilidade já foi adicionada!');
    }
}

function removeSkill(buttonElement) {
    const skillTag = buttonElement.parentNode;
    const skillValue = skillTag.getAttribute('data-value');
    
    addedSkills = addedSkills.filter(skill => skill !== skillValue);
    skillTag.remove();
}

function validateForm() {
    const fullName = document.getElementById('nome-completo').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const tipoInteresse = document.getElementById('tipo-interesse').value;
    const feedbackArea = document.getElementById('feedback-area');
    let feedbackMessages = [];

    if (fullName.trim() === '') {
        feedbackMessages.push('Nome Completo é obrigatório.');
    }

    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        feedbackMessages.push('CPF inválido. Use o formato XXX.XXX.XXX-XX.');
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        feedbackMessages.push('E-mail inválido.');
    }

    if (tipoInteresse === '') {
        feedbackMessages.push('Tipo de Interesse é obrigatório.');
    }

    if (addedSkills.length === 0) {
        feedbackMessages.push('Adicione pelo menos uma habilidade.');
    }

    feedbackArea.innerHTML = '';
    if (feedbackMessages.length > 0) {
        feedbackMessages.forEach(msg => {
            const p = document.createElement('p');
            p.style.color = 'red';
            p.textContent = msg;
            feedbackArea.appendChild(p);
        });
    } else {
        feedbackArea.innerHTML = '<p style="color: green;">Formulário validado com sucesso! Dados enviados para processamento.</p>';
        
        console.log('Dados do formulário:', {
            fullName,
            cpf,
            email,
            tipoInteresse,
            habilidades: addedSkills
        });
    }
}

function showDemoResponse(userQuery) {
    const chatWindow = document.getElementById('chat-window');
    if (!chatWindow) return;

    let botResponse = '';

    chatWindow.innerHTML += `
        <div class="chat-message user-message">
            <p>${userQuery}</p>
        </div>
    `;

    if (userQuery === 'O que é uma Matrícula?') {
        botResponse = 'A Matrícula é o documento mais importante do imóvel, como um RG ou Certidão de Nascimento. Ela contém todo o histórico, descrição e quem é o proprietário atual.';
    } else if (userQuery === 'Quais documentos preciso para registrar uma compra?') {
        botResponse = 'Ótima pergunta! Para uma compra e venda, você geralmente precisará de: 1. Escritura Pública de Compra e Venda (feita no Tabelionato de Notas), 2. Guia do ITBI (imposto) paga, 3. Certidões negativas do vendedor.';
    } else if (userQuery === 'Como vejo o status do meu documento?') {
        botResponse = 'Você pode verificar o status do seu processo na nossa página "Rastreamento de Processo" (disponível após o login) ou informando o número de protocolo aqui.';
    } else if (userQuery === 'Onde fica o cartório mais próximo?') {
        botResponse = 'Para encontrar o cartório mais próximo, eu precisaria da sua localização. Você pode usar nossa ferramenta "Localizador de Cartórios" na página de Recursos para ver um mapa interativo.';
    } else if (userQuery === 'Onde fica o 15º Cartório?') {
        botResponse = 'O 15º Cartório de Registro de Imóveis de São Paulo fica na R. Conselheiro Crispiniano, 29 - República. Você pode ver o mapa na nossa página "Sobre Nós"!';
    } else {
        botResponse = 'Desculpe, não entendi essa pergunta na nossa demonstração.';
    }

    setTimeout(() => {
        chatWindow.innerHTML += `
            <div class="chat-message bot-message">
                <p>${botResponse}</p>
            </div>
        `;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 500);
}