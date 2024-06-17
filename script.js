document.addEventListener('DOMContentLoaded', () => {

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    showSlide(slideIndex);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    window.nextSlide = function() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    };

    window.previousSlide = function() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    };

    document.getElementById('sobrebotao').addEventListener('click', () => {
        alert('A Mahindra é dedicada a fornecer soluções tecnológicas inovadoras.');
    });

    document.getElementById('contatoform').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert('Solicitação de contato enviado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
