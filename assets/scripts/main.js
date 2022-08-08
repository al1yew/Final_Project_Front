
$(document).ready(function () {

    //#region slayderi

    //---------------------------------main page first slider 

    $('.sliderfirst').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        prevArrow: $(".prevfirst"),
        nextArrow: $(".nextfirst"),
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

    //---------------------------------main page second slider 

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

    //#endregion slayderi

    //---------------------------------------------------------------------------------------------------------------

    //#region header scroll

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

    //#endregion header scroll

    //---------------------------------------------------------------------------------------------------------------

    //#region  form products page

    //---------------------------------products stranica form dla zakaza produkta submit na button

    $(document).on('submit', '.addingtobasketinshoppage', function (e) {
        e.preventDefault();
        let input = $(this).find('input:checked');
        let select = $(this).find('option:selected');

        console.log(input.val());
        console.log(select.val());

        //eto ili fetch s custom url nado sdelat ili je otpravit kak obyekt zad ya xz
        // https://api.color.pizza/v1/{{hexvalue without the #}} eto dla togo shto b 
        //color name toje mojno bilo vpisivat, otpravlayem tuda value bez #
        //https://api.color.pizza/v1/c777b3,8a77c7 naprimer ya otpravil dva cveta, 
        //fetch delayem tuda i on vozvrashayet mne json kak ya ponal - smotri guthub
        //https://github.com/meodai/color-names
        //nado bi dla SORT BY POPULAR schitat v MVC skolko raz zaxodili na moy sayt
        // prosto her defe product detail sehifesine daxil olanda hemin produktun
        //v sql u neqo budet viewedTimes kolonkasi, ona ++ olsun, i takje checkout
        //olanda nado vsem etim produktam delat dla most purchased ++ shto b bili 
        //toje popularni tipa

    });

    //---------------------------------products stranica form dla zakaza produkta submit na button

    $(document).on('mousedown', '.addingtobasketinshoppage .down label', function (e) {
        e.preventDefault();
        console.log('skaks')
        $(this).append('<ion-icon name="checkmark-outline" class="markicon"></ion-icon>')

        $(this).siblings('label').text('')
    });

    //#endregion form products page

    //---------------------------------------------------------------------------------------------------------------

    //#region  shop page tabmenu categories

    //--------------------------------- Categorii naverxu pod headerom shop str

    $(document).on('click', '.headcategoryli', function (e) {

        e.preventDefault();

        $($(this).children()[0]).addClass("activespan");

        $(this).siblings('li').find('a').removeClass('activespan')

        //burda da fetch yazacam, ya da ki mvc de yazdigimiz header 
        //tabmenu kimi yazacam gedsimm

    });

    //#endregion shop page tabmenu categories

    //---------------------------------------------------------------------------------------------------------------

    //#region INPUT RANGE

    //#region input range internetden 

    const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider1 .progress");
    let priceGap = 1;
    priceInput.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });
    rangeInput.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
            if ((maxVal - minVal) < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });


    //#endregion 

    $(document).on('mouseup', '.range-min', function () {
        let a = $('.range-min').val();
        console.log(a)

        // vse bulari da fetch edeceyik vessalam
    });

    $(document).on('mouseup', '.range-max', function () {
        let aa = $('.range-max').val();
        console.log(aa)

        // vse bulari da fetch edeceyik vessalam
    });

    //#endregion INPUT RANGE

    //---------------------------------------------------------------------------------------------------------------

    //#region moya custom sortirovka, ostalnoe ya reshu v MVC
    $(document).on('click', '.filterdiv', function () {

        $($(this).find('ul')).toggle();

        $(this).find(".svgkeeper").toggleClass('roundarrow');

    });

    $(document).on('click', '.filterul li', function () {

        $(this).parent().parent().children()[0].innerHTML = $(this).text();

        $(this).addClass("yellowli");

        $(this).siblings("li").removeClass('yellowli');

        //https://github.com/al1yew?tab=repositories&q=&type=public&language=&sort=name,
        //znacit nado pridumat kakim budet fetch. Ya budu otpravlat dofiqa variables v 
        //index, i vse oni budut vot tak zapisivatsa v moy fetchovskiy url
        //te kotorie user ne vibral, ne otpravlayutsa, ostayutsa pustimi
    });
    //#endregion moya custom sortirovka, ostalnoe ya reshu v MVC

    //---------------------------------------------------------------------------------------------------------------

    //#region  sidebar tabmenu

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

    //#endregion sidebar tabmenu

    //---------------------------------------------------------------------------------------------------------------

    //#region sidebar open close

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

    //#endregion sidebar open close

    //---------------------------------------------------------------------------------------------------------------

    //#region get location of user on website

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

    //#endregion get location of user on website

    //---------------------------------------------------------------------------------------------------------------

    //#region 

    

    //#endregion










});


