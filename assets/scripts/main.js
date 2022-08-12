
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
                    // $('.cart').css("padding", "13px 0")
                }
                else {
                    $(".header").css("background-color", "rgba(0, 0, 0, 0)");
                    $(".computer").css("padding", "30px 0");
                    // $(".cart").css("padding", "30px 0");
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

        console.log($(this).find('input:checked'))

        console.log(input.val());

        console.log(select.val());

        let colorname = ''

        fetch(`https://api.color.pizza/v1/${input.val().slice(1)}`)
            .then(res => res.json())
            .then(data => {
                colorname = data.paletteTitle
                console.log(colorname)
                alert(`${input.val()} color selected HEX, --${colorname}-- returned from fetch, ${select.val()} size`)
            })

        //nado vspomnit kak otpravlali ID produkta, kjc forma asp-route-id verecem,
        //bubirsi fetchin icinde fetch yazacam, linki custom edecem, hamsini gonderecem
        //eto ili fetch s custom url nado sdelat ili je otpravit kak obyekt zad ya xz
    });

    //---------------------------------products stranica form dla zakaza produkta submit na button

    $(document).on('mousedown', '.addingtobasketinshoppage .down label', function (e) {

        if ($(this).html() == '') {
            $(this).append('<ion-icon name="checkmark-outline" class="markicon"></ion-icon>')
        }
        else {
            $(this).text('')
        }

        $(this).siblings('label').text('')
    });

    //#endregion form products page

    //---------------------------------------------------------------------------------------------------------------

    //#region  shop page tabmenu categories

    //--------------------------------- Categorii naverxu pod headerom shop str

    $(document).on('click', '.headcategoryli', function (e) {

        if ($(window).width() < 576) {
            e.preventDefault();
        }

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
        priceInputMobile = document.querySelectorAll(".price-input-mobile input"),
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
    priceInputMobile.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(priceInputMobile[0].value),
                maxPrice = parseInt(priceInputMobile[1].value);

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
                priceInputMobile[0].value = minVal;
                priceInputMobile[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });


    //#endregion 

    $(document).on('pointerup', '.range-max, .range-min', function () {
        let aa = $('.range-max').val();
        let a = $('.range-min').val();
        console.log(a, aa)

        alert(`${a} min value, ${aa} max value -- information for fetch`)
    });

    $(document).on('keyup', '.input-min, .input-max', function (e) {
        if ((e.which >= 48 && e.which <= 57)
            || (e.which >= 96 && e.which <= 105)
            || e.which == 8) {

            let a = parseInt($('.input-min').val());
            let aa = parseInt($('.input-max').val());
            console.log(a)
            console.log(aa)

            alert(`${a} min value, ${aa} max value -- information for fetch`)
        }
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
            // alert(`${window.innerHeight} visota, ${window.innerWidth} shirina`)
        }

    });

    //#endregion get location of user on website

    //---------------------------------------------------------------------------------------------------------------

    //#region Open basket close basket on phone, Open Close accountinfo 

    //---------------------------------Open basket close basket on phone, Open Close accountinfo 

    $(document).on('click', '.openbasket', function (e) {
        if ($(window).width() < 576) {
            e.preventDefault();
            $('.minibasket').css('width', `${$(window).width() * 0.9}`)
            $('.minibasket').fadeToggle(200);
        }
    });

    $(document).on('click', '.accounthref', function (e) {
        if ($(window).width() < 576) {
            e.preventDefault();
            $('.accountinfo').css('width', `${$(window).width() * 0.9}`)
            $('.accountinfo').fadeToggle(200);
        }
    });

    //#endregion

    //---------------------------------------------------------------------------------------------------------------

    //#region open close shop page categories megamenu

    //--------------------------------- open close shop page categories menamenu

    $(document).on('click', '.categoryhref', function (e) {
        if ($(window).width() < 576) {
            e.preventDefault();
            console.log($($(this).parent()).siblings('li').find('.categorymenu'))

            $($(this).parent()).siblings('li').find('.categorymenu').attr('style', 'display: none;');

            $($(this).next()).fadeToggle(100);
        }
    });

    //#endregion open close shop page categories megamenu

    //---------------------------------------------------------------------------------------------------------------

    //#region product detail page slider

    //--------------------------------- product detail page slider

    $('.completing_products').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: $(".prevfirstdetail"),
        nextArrow: $(".nextfirstdetail"),
        autoplay: false,
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
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    //ili je 1 dene
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: false
                }
            }
        ]
    });

    //#endregion product detail page slider

    //---------------------------------------------------------------------------------------------------------------

    //#region product detail page slider bottom 

    //--------------------------------- product detail page slider bottom

    $('.related_items').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: $(".prevfirstdetailbottom"),
        nextArrow: $(".nextfirstdetailbottom"),
        autoplay: false,
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
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    //ili je 1 dene
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: false
                }
            }
        ]
    });

    //#endregion product detail page slider bottom

    //---------------------------------------------------------------------------------------------------------------

    //#region product detail page form
    $(document).on('click', '.buydiv', function () {

        $($(this).find('ul')).toggle();

        $(this).find(".svgkeeper").toggleClass('roundarrow');

    });

    $(document).on('click', '.buyul li', function () {

        $(this).parent().parent().children()[0].innerHTML = $(this).text();

        $(this).addClass("yellowli selected");
        //yellow li ile selected klassi da atim bura ki form on submit olanda 
        //goture bilim id-sini

        $(this).siblings("li").removeClass('yellowli');

        //https://github.com/al1yew?tab=repositories&q=&type=public&language=&sort=name,
        //znacit nado pridumat kakim budet fetch. Ya budu otpravlat dofiqa variables v 
        //index, i vse oni budut vot tak zapisivatsa v moy fetchovskiy url
        //te kotorie user ne vibral, ne otpravlayutsa, ostayutsa pustimi
    });
    //#endregion product detail page form

    //---------------------------------------------------------------------------------------------------------------

    //#region product detail page more info click

    $(document).on('click', '.togglemenutop', function () {

        $($(this).find('.infotop')).toggle(200);

    });

    $(document).on('click', '.togglemenubottom', function () {

        $($(this).find('.infobottom')).toggle(200);

    });

    //#endregion product detail page more info click

    //---------------------------------------------------------------------------------------------------------------

    //#region product detail page modal

    $(document).on('click', '.imgofprod', function () {

        $('.modal').addClass('modalotkroysa');

        let a = $(($(this).children()[0])).attr('src')

        $('.modalphoto').attr('src', a)
    });

    $(document).on('click', '.closemodal', function () {

        $('.modal').removeClass('modalotkroysa');
    });


    //#endregion product detail page modal

    //---------------------------------------------------------------------------------------------------------------

    //#region basket html product quantity

    $(document).on('click', '.plus', function (e) {
        e.preventDefault();

        let result = Number($(this).prev().val());
        console.log(result)
        result++;
        $(this).prev().val(result)
        //her defe basilanda fetch edeceyik cookie-de set edeceyik. 
        //bunun ucun action olacaq onsuzda, add to basket olan.
        //ya da elave nese birshey 
    });

    $(document).on('click', '.minus', function (e) {
        e.preventDefault();

        let result = Number($(this).next().val());
        console.log(result)

        if (result > 1) {
            result--;
            $(this).next().val(result)
        }
        else {
            $(this).next().val('1')
        }
        //her defe basilanda fetch edeceyik cookie-de set edeceyik. 
        //bunun ucun action olacaq onsuzda, add to basket olan.
        //ya da elave nese birshey 
    });


    //#endregion basket html product quantity











});


