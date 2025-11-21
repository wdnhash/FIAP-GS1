let addedSkills = [];

function checarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function checarCPF(cpf) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function exibirFeedback(vetorErros) {
    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.innerHTML = '';

    if (vetorErros.length > 0) {
        vetorErros.forEach(msg => {
            const p = document.createElement('p');
            p.style.color = 'red';
            p.textContent = msg;
            feedbackArea.appendChild(p);
        });
    } else {
        feedbackArea.innerHTML = '<p style="color: green; font-weight: bold;">Formulário validado com sucesso! Dados enviados para processamento.</p>';
    }
}

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
    
    let feedbackMessages = [];

    if (fullName.trim() === '') {
        feedbackMessages.push('Nome Completo é obrigatório.');
    }

    if (!checarCPF(cpf)) {
        feedbackMessages.push('CPF inválido. Use o formato XXX.XXX.XXX-XX.');
    }

    if (!checarEmail(email)) {
        feedbackMessages.push('E-mail inválido.');
    }

    if (tipoInteresse === '') {
        feedbackMessages.push('Tipo de Interesse é obrigatório.');
    }

    if (addedSkills.length < 3) {
        feedbackMessages.push(`Adicione pelo menos 3 habilidades. (Atual: ${addedSkills.length})`);
    }

    exibirFeedback(feedbackMessages);

    if (feedbackMessages.length === 0) {
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
    
    } else if (userQuery === 'Simular valor do ITBI') {
        
        const inputValor = prompt("Por favor, digite o valor do imóvel (apenas números) para a simulação:");
        
        if (inputValor) {
            const valorLimpo = inputValor.replace(/\./g, '').replace(',', '.');
            const valorNumerico = parseFloat(valorLimpo);

            if (!isNaN(valorNumerico)) {
                const itbi = valorNumerico * 0.03; 
                
                const valorFormatado = valorNumerico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                const itbiFormatado = itbi.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                botResponse = `Para um imóvel de <strong>${valorFormatado}</strong>, a estimativa do ITBI (alíquota média de 3%) é de: <br><br><strong style="font-size: 1.2em;">${itbiFormatado}</strong>.`;
            } else {
                botResponse = 'Não consegui entender o valor digitado. Por favor, tente novamente usando apenas números.';
            }
        } else {
            botResponse = 'Simulação cancelada. Posso ajudar com algo mais?';
        }

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