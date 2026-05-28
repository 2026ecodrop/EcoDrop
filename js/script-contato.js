const form = document.getElementById('formContato');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    mensagem.classList.add('ativo');
    form.reset();
    setTimeout(() => {
        mensagem.classList.remove('ativo');
    }, 3500);
});
