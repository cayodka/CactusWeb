const boxMensagens = document.getElementById('conteudo');
const inputMensagem = document.getElementById('texto');
const perfil = document.getElementById('perfil');
const alterarDados = document.getElementById('alterarDados');
const alterarNome = document.getElementById('alterarNome');
const alterarFoto = document.getElementById('alterarFoto');
const userName = document.getElementById('username');
const userIcon = document.getElementById('userIcon');
const salvarDados = document.querySelector('#alterarDados button');

inputMensagem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const mensagem = inputMensagem.value.trim();
        if (mensagem !== '') {
            const novaMensagem = document.createElement('div');
            novaMensagem.classList.add('mensagem');
            novaMensagem.innerHTML = `
                <div class="mensagem-header">
                    <img src="${userIcon.src}" alt="User Icon" class="mensagem-icon">
                    <span class="mensagem-username">${userName.textContent}</span>
                </div>
                <p class="mensagem-texto">${mensagem}</p>
            `;
            boxMensagens.appendChild(novaMensagem);
            inputMensagem.value = '';
            boxMensagens.scrollTop = boxMensagens.scrollHeight;
        }
    }
});

perfil.addEventListener('click', function() {
    alterarDados.style.display = alterarDados.style.display === 'flex' ? 'none' : 'flex';
});

salvarDados.addEventListener('click', function() {
    const novoNome = alterarNome.value.trim();
    if (novoNome !== '') {
        userName.textContent = novoNome;
    }
    const file = alterarFoto.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userIcon.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    alterarDados.style.display = 'none';
});

function adicionarMensagem(texto, classes = ['mensagem']) {
    const novaMensagem = document.createElement('div');
    novaMensagem.classList.add(...classes);
    novaMensagem.innerHTML = `
        <div class="mensagem-header">
            <img src="${userIcon.src}" height="4rem" width="4rem" border-radius="100%" alt="User Icon" class="mensagem-icon">
            <span class="mensagem-username">${userName.textContent}</span>
        </div>
        <p class="mensagem-texto">${texto}</p>
    `;
    boxMensagens.appendChild(novaMensagem);
    boxMensagens.scrollTop = boxMensagens.scrollHeight;
}