
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            
            const mensagemSucesso = document.getElementById('mensagem-sucesso');
            if (mensagemSucesso) {
                mensagemSucesso.classList.add('visivel');
                setTimeout(function() {
                    mensagemSucesso.classList.remove('visivel');
                }, 5000);
            }
            
            form.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.querySelector('.header-right nav');

    if(btnMobile && nav) {
        btnMobile.addEventListener('click', function() {
            nav.classList.toggle('ativo');
        });
    }
});

$(document).ready(function(){

    // --- CÓDIGO DO BOTÃO "VOLTA AO TOPO" ---
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // --- CÓDIGO PARA O BOTÃO "VOLTA AO TOPO" ---
    $('#back-to-top').click(function(event) {
        event.preventDefault(); 
        $('html, body').animate({ scrollTop: 0 }, 400);
    });

    // --- CÓDIGO DO EFEITO HOVER ---
    $('.projeto').hover(function() {
        $(this).css('color', '#3f51b5');
    }, function() {
        $(this).css('color', 'black');
    });

});


