$(function () {



    //====   preloader ====// 
    $(window).load(function () {
        $("#preloader").delay(1500).fadeOut(500);
    })


    //====  sticky menu ====// 
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });


    //==== close button mobile menu ====//  
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });


    //====  counterUp ====/ 
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });


    //====  WOW js ====/ 
    new WOW().init();


    //====  SmoothScroll ====/
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });


    //====portfolio  mixitup ====/
    var mixer = mixitup('#portfolio_part');


    //====  blog_part slider ====/
    $('.wrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
	  }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
	  }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
	  }, ]

    });


    //====  testimonials slider ====/
    $('.testimonials_wrapper').slick({
        dots: true,
        vertical: false,
        infinite: false,
        speed: 1000,
        fade: false,
        autoplay: true,
        arrows: false,
        pauseOnHover: true,

    })


    //====  typed js ====/
    var typed = new Typed('.type', {
        strings: [
            " Websites.",
            "Wordpress templete.",
            "Designing Logo.",
            "Designing UI/UX."
        ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

 


    //====  venobox start ====// 
    $('.venobox').venobox({

        framewidth: '500px',
        spinner: 'wave'

    });
 

});
