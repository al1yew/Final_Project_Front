
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

    $(document).on('scroll', function () {
        if (!$('.where').text()) {
            if ($(window).width() < 576) {
                if ($(window).scrollTop() > (($(window).height() / 2) - 50)) {
                    $(".mobile").css("padding", "15px 10px");
                    $(".mobile").css("background-color", "rgba(0, 0, 0, 0.2)");
                }
                else {
                    $(".mobile").css("padding", "20px 10px");
                    $(".mobile").css("background-color", "rgba(0, 0, 0, 0)");
                }
            }
            else {
                if ($(window).scrollTop() > ($(window).height() - 50)) {
                    $(".header").css("background-color", "rgba(0, 0, 0, 0.2)");
                    $(".computer").css("padding", "13px 0");
                }
                else {
                    $(".header").css("background-color", "rgba(0, 0, 0, 0)");
                    $(".computer").css("padding", "30px 0");
                }
            }
        }
    });



    //---------------------------------products stranica form dla zakaza produkta submit na button

    $(document).on('submit', '.addingtobasketinshoppage', function (e) {
        e.preventDefault();
        let input = $(this).find('input:checked');
        let select = $(this).find('option:selected');

        console.log(input.val());
        console.log(select.val());

        //eto ili fetch s custom url nado sdelat ili je otpravit kak obyekt zad ya xz

    });



    //--------------------------------- moya custom sortirovka, ostalnoe ya reshu v MVC
    $(document).on('click', '.filterdiv', function () {

        $($(this).find('ul')).toggle();

        $(this).find(".svgkeeper").toggleClass('roundarrow');

    });

    $(document).on('click', '.filterul li', function () {

        $(this).parent().parent().children()[0].innerHTML = $(this).text();

        $(this).addClass("yellowli");

        $(this).siblings("li").removeClass('yellowli');

    });
    //--------------------------------- moya custom sortirovka, ostalnoe ya reshu v MVC



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
            $(".mobile").css("background-color", "rgba(0, 0, 0, 0.2)");
            $(".header").css("background-color", "rgba(0, 0, 0, 0.2)");
            $(".computer").css("padding", "13px 0");
            $(".mobile").css("padding", "15px 10px");
        }

    });










});


