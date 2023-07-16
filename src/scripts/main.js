const navbarToggler = $('.navbar-toggler');
const navbarCollapse = $('#navbarCollapse');

navbarToggler.on('click', function () {
    navbarCollapse.toggleClass('show');
});


$(document).ready(function () {
    var owlCarousel = $('#carousel-amenagements-interieurs');

    $('#carousel-amenagements-interieurs, #carousel-amenagements-bureaux').owlCarousel({
        loop: true,
        items: 3,
        margin: 10,
        responsiveClass: true,
        dots: true,
        nav: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1 // Affiche 1 élément pour les écrans de taille inférieure à 576px
            },
            576: {
                items: 2 // Affiche 2 éléments pour les écrans de taille supérieure ou égale à 576px
            },
            768: {
                items: 3 // Affiche 3 éléments pour les écrans de taille supérieure ou égale à 768px
            }
        }
    });

});

window.addEventListener('scroll', function() {
    var navbar = $('#navbar');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 300) {
        navbar.addClass('sticky-top sticky');
    } else {
        navbar.removeClass('sticky-top sticky');
    }
});