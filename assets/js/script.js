$(document).ready(function () {
    // Controlling sticky navbar when scrolled
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else{
            $('.navbar').removeClass('sticky');
        }
    });
    
    // toggle menu/navbar responsive
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    })

    // Typing text animation controller for Hero section
    var typed1 = new Typed(".typing-area-1", {
        strings:[
            "Data Enthusiast", "ML Developer", "Flutter Developer", "Dukun 5.0"
        ],
        typeSpeed:100,
        backSpeed:60,
        loop: true,
    });

    // Typing text animation controller for About section
    var typed2 = new Typed(".typing-area-2", {
        strings:[
            "Data Enthusiast", "ML Developer", "Flutter Developer", "Dukun 5.0"
        ],
        typeSpeed:100,
        backSpeed:60,
        loop: true,
    });
});