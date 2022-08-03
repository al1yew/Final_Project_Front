
$(document).ready(function () {

    //---------------------------------main page slider

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    adaptiveHeight: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    adaptiveHeight: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            }
        ]
    });


    //--------------------------------- header scroll

    $(document).on('scroll', function () {
        if ($(window).scrollTop() > (document.documentElement.clientHeight)) {
            $(".computer").css("padding", "10px 0")
            $(".computer").css("color", "black")
            // $(".search_input").css("color", "black")
            // $(".navigation .search ").css("border-bottom", "1px solid black")
            // $("#header_search").placeholder.css("color", "black")
        }//yellow mojno sdelat vmesto black
        else {
            $(".computer").css("padding", "30px 0")
            $(".computer").css("color", "white")
            // $(".search_input").css("color", "white")
            // $(".navigation .search ").css("border-bottom", "1px solid white")
            // $("#header_search").placeholder.css("color", "white")
        }
    });


});
