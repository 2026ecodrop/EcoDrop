document.addEventListener('DOMContentLoaded', () => {
    const btnHamburger = document.getElementById('btn-hamburger');
    const menuLista = document.getElementById('menu-lista');

    if (btnHamburger && menuLista) {
        btnHamburger.addEventListener('click', () => {
            menuLista.classList.toggle('menu-ativo');
        });
    }

    const track = document.getElementById('track');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const containerIndicadores = document.getElementById('indicadores');

    if (track && btnNext && btnPrev && containerIndicadores) {
        const slides = Array.from(track.children);
        let slideAtual = 0;
        let autoPlay;

        slides.forEach((_, index) => {
            const bolinha = document.createElement('div');
            bolinha.classList.add('bolinha');
            if (index === 0) bolinha.classList.add('ativa');
            bolinha.addEventListener('click', () => moverParaSlide(index));
            containerIndicadores.appendChild(bolinha);
        });

        const bolinhas = document.querySelectorAll('.bolinha');

        function atualizarInterface() {
            const larguraSlide = slides[0].offsetWidth;
            track.style.transform = `translateX(-${slideAtual * larguraSlide}px)`;
            bolinhas.forEach((b, i) => {
                b.classList.toggle('ativa', i === slideAtual);
            });
        }

        function proximoSlide() {
            slideAtual = (slideAtual + 1) % slides.length;
            atualizarInterface();
        }

        function slideAnterior() {
            slideAtual = (slideAtual - 1 + slides.length) % slides.length;
            atualizarInterface();
        }

        function moverParaSlide(index) {
            slideAtual = index;
            atualizarInterface();
            reiniciarAutoPlay();
        }

        btnNext.addEventListener('click', () => {
            proximoSlide();
            reiniciarAutoPlay();
        });

        btnPrev.addEventListener('click', () => {
            slideAnterior();
            reiniciarAutoPlay();
        });

        function iniciarAutoPlay() {
            autoPlay = setInterval(proximoSlide, 5000);
        }

        function reiniciarAutoPlay() {
            clearInterval(autoPlay);
            iniciarAutoPlay();
        }

        window.addEventListener('resize', () => {
            atualizarInterface();
        });

        iniciarAutoPlay();
    }

    const btnTopo = document.getElementById('btn-topo');

    if (btnTopo) {
        window.addEventListener('scroll', () => {
            btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        btnTopo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

function calcular() {
    const atual = Number(document.getElementById("banho-atual").value);
    const reducao = Number(document.getElementById("banho-reducao").value);
    const resultado = document.getElementById("resultado");

    if (atual <= 0 || reducao <= 0) {
        resultado.innerHTML = "<p>Por favor, informe valores maiores que zero.</p>";
        resultado.style.display = "block";
        return;
    }

    if (reducao >= atual) {
        resultado.innerHTML = "<p>A redução não pode ser maior ou igual ao tempo atual do banho.</p>";
        resultado.style.display = "block";
        return;
    }

    const litrosPorMinuto = 12;
    const consumoAtual = atual * litrosPorMinuto;
    const consumoNovo = (atual - reducao) * litrosPorMinuto;
    const economia = reducao * litrosPorMinuto;

    resultado.innerHTML = `
        <p>🚿 Consumo atual: <strong>${consumoAtual} litros</strong></p>
        <p>✅ Novo consumo: <strong>${consumoNovo} litros</strong></p>
        <p>💧 Economia por banho: <strong>${economia} litros</strong></p>
        <p>📅 Economia mensal: <strong>${economia * 30} litros</strong></p>
        <p>📆 Economia anual: <strong>${economia * 365} litros</strong></p>
    `;
    resultado.style.display = "block";
}

const formularioContato = document.getElementById('enviar');
const meuFormulario = document.getElementById('meuFormulario'); 

formularioContato.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
	meuFormulario.reset(); 
});
