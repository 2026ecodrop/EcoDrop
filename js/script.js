const track = document.getElementById('track');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const containerIndicadores = document.getElementById('indicadores');

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
    track.style.transform = `translateX(-${slideAtual * 100}%)`;
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

iniciarAutoPlay();

const btnTopo = document.getElementById('btn-topo');
const primeiraSecao = document.getElementById('detalhe-maquina');

window.addEventListener('scroll', () => {
    if (primeiraSecao) {
        const topoSecao = primeiraSecao.getBoundingClientRect().top;
        if (topoSecao <= 50) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});