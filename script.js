document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada e pronta.');

    // Adiciona um efeito de parallax nas imagens ao rolar a página
    const parallaxElements = document.querySelectorAll('.gallery-img');

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const scrollPosition = window.pageYOffset;
            el.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    });

    // Animações ao clicar nas seções do menu
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });
});
