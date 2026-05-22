const formularioContato = document.getElementById('enviar');
const meuFormulario = document.getElementById('meuFormulario'); 

formularioContato.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
	meuFormulario.reset(); 
});