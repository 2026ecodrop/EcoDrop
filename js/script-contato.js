const form = document.getElementById('formContato');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const dados = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: dados,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            mensagem.classList.add('ativo');
            form.reset();
            setTimeout(() => {
                mensagem.classList.remove('ativo');
            }, 3500);
        } else {
            alert("Oops! Tivemos um problema ao enviar o e-mail.");
        }
    })
    .catch(error => {
        alert("Erro de conexão. Tente novamente.");
    });
});
