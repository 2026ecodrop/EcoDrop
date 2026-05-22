document.addEventListener('DOMContentLoaded', () => {
    const subirsobre = document.getElementById('subirsobre');

    if (subirsobre) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                subirsobre.classList.add('visivel');
            } else {
                subirsobre.classList.remove('visivel');
            }
        });

        subirsobre.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});