// const navbarToggler = $('.navbar-toggler');
// const navbarCollapse = $('#navbarCollapse');
//
// navbarToggler.on('click', function () {
//     navbarCollapse.toggleClass('show');
// });


$(document).ready(function () {
    const navLinks = $(".nav-link");

    navLinks.on("click", function () {
        // Vérifiez si la navbar est actuellement étendue
        if ($(".navbar-collapse").hasClass("show")) {
            // Réduire la navbar en supprimant la classe "show"
            $(".navbar-collapse").removeClass("show");
        }
    });

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

window.addEventListener('scroll', function () {
    const navbar = $('#navbar');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 300) {
        navbar.addClass('sticky-top sticky');
    } else {
        navbar.removeClass('sticky-top sticky');
    }
});