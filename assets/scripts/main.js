
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
        autoplay: true,
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
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    //ili je 1 dene
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: false
                }
            }
        ]
    });

    //--------------------------------- header scroll
    //it is for another design 

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

    //--------------------------------- header scroll

    $(document).on('scroll', function () {
        if (!$('.where').text()) {
            if ($(window).width() < 576) {
                if ($(window).scrollTop() > (($(window).height() / 2) - 50)) {
                    $(".mobile").css("padding", "15px 10px")
                    $(".mobile").css("background-color", "rgba(0, 0, 0, 0.2)")
                }
                else {
                    $(".mobile").css("padding", "20px 10px")
                    $(".mobile").css("background-color", "rgba(0, 0, 0, 0)")
                }
            }
            else {
                if ($(window).scrollTop() > ($(window).height() - 50)) {
                    $(".header").css("background-color", "rgba(0, 0, 0, 0.2)")
                    $(".computer").css("padding", "13px 0")
                }
                else {
                    $(".header").css("background-color", "rgba(0, 0, 0, 0)")
                    $(".computer").css("padding", "30px 0")
                }
            }
        }
    });


    //---------------------------------tabmenu in sidebar

    $('#' + $('.active-tab').data('rel')).show();

    $(document).on('click', '.tab-menu li', function () {
        $(this).addClass('active-tab').siblings('li').removeClass('active-tab');
        $('#' + $(this).data('rel')).show().siblings('ul').hide();
    })


    //---------------------------------Prevent a href in sidebar toggle menu

    $(document).on('click', '.sidebar_ahref', function (e) {
        e.preventDefault();
    });


    //---------------------------------Sidebar open

    $(document).on('click', '.hamburgermenu', function (e) {

        if ($('.sidebarmenu').hasClass('open')) {
            $('.sidebarmenu').removeClass('open');
        }
        else {
            $('.sidebarmenu').addClass('open');
        }
    });

    //---------------------------------Sidebar close

    $(document).on('click', '.close_btn', function (e) {

        if ($('.sidebarmenu').hasClass('open')) {
            $('.sidebarmenu').removeClass('open');
        }
        else {
            $('.sidebarmenu').addClass('open');
        }
    });


    //--------------------------------- get location of website to change header design
    //ne xochu shto b header i footer menalis na raznix stranickax poetomu budu delat js


    $(document).on('ready', function () {

        if ($('.where').text()) {
            $(".mobile").css("background-color", "rgba(0, 0, 0, 0.2)")
            $(".header").css("background-color", "rgba(0, 0, 0, 0.2)")
            $(".computer").css("padding", "13px 0")
            $(".mobile").css("padding", "15px 10px")
        }

    });










});


