
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

    // $(document).on('scroll', function () {
    //     if ($(window).scrollTop() > (document.documentElement.clientHeight - 50)) {
    //         $(".computer").css("padding", "13px 0")
    //         $(".computer a").addClass("forheaderscroll")
    //         $(".gender").addClass("forheaderscroll")
    //         $(".search_input").addClass("forheaderscroll")
    //         $(".navigation .search ").css("border-bottom", "1px solid black")
    //         $(".search input").addClass("searchinputforjs")
    //         $(".search_icon").addClass("forheaderscroll")
    //         $(".cart_path").css("fill", "black")
    //         $(".cart_path").css("stroke", "black")
    //     }
    //     else {
    //         $(".computer").css("padding", "30px 0")
    //         $(".computer a").removeClass("forheaderscroll")
    //         $(".gender").removeClass("forheaderscroll")
    //         $(".search_input").removeClass("forheaderscroll")
    //         $(".navigation .search ").css("border-bottom", "1px solid white")
    //         $(".search input").removeClass("searchinputforjs")
    //         $(".search_icon").removeClass("forheaderscroll")
    //         $(".cart_path").css("fill", "white")
    //         $(".cart_path").css("stroke", "white")
    //     }
    // });

    $(document).on('scroll', function () {
        if ($(window).scrollTop() > (document.documentElement.clientHeight - 50)) {
            $(".header").css("background-color", "rgba(0, 0, 0, 0.2)")
            $(".computer").css("padding", "13px 0")
        }
        else {
            $(".header").css("background-color", "rgba(0, 0, 0, 0)")
            $(".computer").css("padding", "30px 0")
        }
    });

});
