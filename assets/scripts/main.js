
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

    //#region  form shop page

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

    //#endregion form shop page

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

        // $($(this).parent().children()[0]).fadeIn(180);

    });

    $(document).on('click', '.minus', function (e) {
        e.preventDefault();

        let result = Number($(this).next().val());
        console.log(result)

        // $($(this).parent().children()[0]).fadeIn(180);

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

    $(document).on('keyup', '.result', function (e) {

        if ((e.which >= 48 && e.which <= 57)
            || (e.which >= 96 && e.which <= 105)
            || e.which == 8) {

            // $($(this).parent().children()[0]).fadeIn(180);

            // alert(`${$(this).val()} count of product`);

        }

    });

    // $(document).on('click', '.confirmcount', function (e) {
    //     alert('salam')
    // });

    //#endregion basket html product quantity

    //---------------------------------------------------------------------------------------------------------------

    //#region basket first slider

    //--------------------------------- product detail page slider

    $('.youmaylikeitems').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
        prevArrow: $(".prevbasket"),
        nextArrow: $(".nextbasket"),
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

    //#endregion basket first slider

    //---------------------------------------------------------------------------------------------------------------

    //#region basket slider second

    //--------------------------------- product detail page slider

    $('.recentlyvieweditems').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
        prevArrow: $(".prevbasketsecond"),
        nextArrow: $(".nextbasketsecond"),
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

    //#endregion basket slider second

    //---------------------------------------------------------------------------------------------------------------

    //#region register eye icon

    //--------------------------------- product register eye icon

    $(document).on('click', '.seepass', function () {
        $(this).prev().prev().attr('type', 'text');
        $(this).hide();
        $(this).next().show();
    });

    $(document).on('click', '.closepass', function () {
        $(this).prev().prev().prev().attr('type', 'password');
        $(this).hide();
        $(this).prev().show();
    });

    //#endregion register eye icon

    //---------------------------------------------------------------------------------------------------------------

    //#region checkout forms

    //--------------------------------- checkout forms

    $(document).on('click', '.changeinfo', function () {
        // $('.formaddresskeeper').hide();
        $('.formcardkeeper, .rightcheckout, .formaddresskeeper').hide();
        // $('.rightcheckout').hide();
        $('.forminfokeeper').fadeIn(200);
        $('.changeinfo').fadeOut(200);
        $('.changeaddress').fadeIn(200);
        $('.changecard').fadeIn(200);
        if ($(window).width() < 576) {
            $(window).scrollTop(800)
        }
    });

    $(document).on('submit', '.changeaccountinfoform', function (e) {
        e.preventDefault();

        const form = document.getElementById('changeaccountinfoform');
        const formData = new FormData(form);

        $('#fullnameorder').attr('value', `${formData.get('name').trim()} ${formData.get('surname').trim()}`)
        $('#phoneorder').attr('value', formData.get('phone').trim())
        $('#emailorder').attr('value', formData.get('email').trim())

        $('#name').val('')
        $('#surname').val('')
        $('#email').val('')
        $('#phone').val('')

        //burdan sonra uje fetch edeceyik

        $('.forminfokeeper').hide();
        $('.rightcheckout').fadeIn(200);
        $('.changeinfo').fadeIn(200);
        if ($(window).width() < 576) {
            $(window).scrollTop(0)
        }
    });

    $(document).on('click', '.changeaddress', function () {
        $('.formcardkeeper, .rightcheckout, .forminfokeeper').hide();
        $('.formaddresskeeper').fadeIn(200);
        $('.changeinfo').fadeIn(200);
        $('.changecard').fadeIn(200);
        $('.changeaddress').fadeOut(200);
        if ($(window).width() < 576) {
            $(window).scrollTop(800)
        }
    });

    $(document).on('submit', '.changeaddressform', function (e) {
        e.preventDefault();

        const form = document.getElementById('changeaddressform');
        const formData = new FormData(form);

        $('#addressorder').attr('value', `${formData.get('address1').trim()}, ${formData.get('address2') != '' ? formData.get('address2').trim() + ', ' : ''}${formData.get('zipcode').trim()}`)
        $('#citycountryorder').attr('value', `${formData.get('city').trim()}, ${formData.get('country').trim()}`)

        $('#address1').val('')
        $('#address2').val('')
        $('#country').val('')
        $('#city').val('')
        $('#zipcode').val('')

        //burdan sonra uje fetch edeceyik

        $('.formaddresskeeper').hide();
        $('.rightcheckout').fadeIn(200);
        $('.changeaddress').fadeIn(200);

        if ($(window).width() < 576) {
            $(window).scrollTop(0)
        }
    });

    $(document).on('click', '.changecard', function () {
        $('.formaddresskeeper, .rightcheckout, .forminfokeeper').hide();
        $('.formcardkeeper').fadeIn(200);
        $('.changecard').fadeOut(200);
        $('.changeinfo').fadeIn(200);
        $('.changeaddress').fadeIn(200);
        if ($(window).width() < 576) {
            $(window).scrollTop(800)
        }
    });

    $(document).on('submit', '.changecardform', function (e) {
        e.preventDefault();

        const form = document.getElementById('changecardform');
        const formData = new FormData(form);

        $('#cardnoorder').attr('value', `${formData.get('cardno').trim()}`)
        $('#cardexpireorder').attr('value', `${formData.get('expire').trim()}`)
        $('#cardholderorder').attr('value', `${formData.get('cardname').trim()} ${formData.get('cardsurname').trim()}`)

        $('#cvv').val('')
        $('#expire').val('')
        $('#cardno').val('')
        $('#cardname').val('')
        $('#cardsurname').val('')

        //sonra da hamsini fetch edirik
        $('.formcardkeeper').hide();
        $('.rightcheckout').fadeIn(200);
        $('.changecard').fadeIn(200);
        if ($(window).width() < 576) {
            $(window).scrollTop(0)
        }
    });

    $(document).on('click', '.closeform', function () {
        $(this).parent().hide()
        $('.rightcheckout').fadeIn(200);
        $('.changecard').fadeIn(200);
        $('.changeinfo').fadeIn(200);
        $('.changeaddress').fadeIn(200);
        if ($(window).width() < 576) {
            $(window).scrollTop(0)
        }
    });

    //#endregion checkout forms

    //---------------------------------------------------------------------------------------------------------------

    //#region  order page toggle menu

    //--------------------------------- order page toggle menu

    $(document).on('click', '.orders .order .top', function (e) {

        $($(this).next()).slideToggle(200);

    });

    //#endregion order page toggle menu

    //---------------------------------------------------------------------------------------------------------------

    //#region  add new card

    //--------------------------------- add new card

    $(document).on('click', '.clicktoaddnewcard', function (e) {

        $($(this).next().children()[0]).fadeIn(200);

        $(this).hide();

    });

    $(document).on('click', '.cancelnewcard', function (e) {

        $(this).parent().parent().hide();

        $(this).parent().parent().parent().prev().fadeIn(200);

    });

    $(document).on('submit', '#addnewcardform', function (e) {
        e.preventDefault();

        const form = document.getElementById('addnewcardform');
        const formData = new FormData(form);

        let cardno = formData.get('cardno').trim()
        let cardname = formData.get('cardname').trim()
        let cardsurname = formData.get('cardsurname').trim()
        let expire = formData.get('expire').trim()
        let cvv = formData.get('cvv').trim()

        alert($(document.activeElement).val());

        //vessalam valuesini burda if ile yoxlayib controllere true false gondereceyik, 
        //tipa esli save, to pust budet false, esli make main to true, parametr da
        //olsun bool main tipa esli main true to saveni kak main esli net to naoborot

        $(this).parent().hide();
        $(this).parent().parent().prev().fadeIn(200);

        $('.cvv').val('')
        $('.expire').val('')
        $('.cardno').val('')
        $('.cardname').val('')
        $('.cardsurname').val('')

        // alert(`${cardno},${cardname},${cardsurname},${expire},${cvv}`)

    });

    //#endregion add new card

    //---------------------------------------------------------------------------------------------------------------

    //#region  add new address

    //--------------------------------- add new address

    $(document).on('click', '.clicktoaddnewaddress', function (e) {

        $($(this).next().children()[0]).fadeIn(200);

        $(this).hide();

    });

    $(document).on('click', '.cancelnewaddress', function (e) {

        $(this).parent().parent().hide();

        $(this).parent().parent().parent().prev().fadeIn(200);
    });

    $(document).on('submit', '#addnewaddressform', function (e) {
        e.preventDefault();

        const form = document.getElementById('addnewaddressform');
        const formData = new FormData(form);

        let address1 = formData.get('address1').trim()
        let address2 = formData.get('address2').trim()
        let city = formData.get('city').trim()
        let country = formData.get('country').trim()
        let zipcode = formData.get('zipcode').trim()

        alert($(document.activeElement).val());

        //vessalam valuesini burda if ile yoxlayib controllere true false gondereceyik, 
        //tipa esli save, to pust budet false, esli make main to true, parametr da
        //olsun bool main tipa esli main true to saveni kak main esli net to naoborot

        $(this).parent().hide();
        $(this).parent().parent().prev().fadeIn(200);

        $('.addressaddress1').val('')
        $('.addressaddress2').val('')
        $('.addresscountry').val('')
        $('.addresscity').val('')
        $('.addresszipcode').val('')

        // alert(`${address1},${address2},${city},${country},${zipcode}`)

    });

    //#endregion add new address

    //---------------------------------------------------------------------------------------------------------------

    //#region  order page toggle menu

    //--------------------------------- order page toggle menu

    $(document).on('click', '.faqtoggle', function (e) {

        $($(this).children()[0]).next().slideToggle(200);

    });

    //#endregion order page toggle menu

    //---------------------------------------------------------------------------------------------------------------

    //#region headersearch

    $(document).on('keyup click', '.search_input', function (e) {

        $(this).next().next().show();
        $($(this).next().children()[0]).attr('name', 'close-outline')
        $($(this).next().children()[0]).addClass('closesearchheader')

        if ($(this).val() == '') {

            $(this).next().next().hide();
            $($(this).next().children()[0]).attr('name', 'search-outline')
            $($(this).next().children()[0]).removeClass('closesearchheader')

        }
    });

    $(document).on('click', '.closesearchheader', function (e) {

        $(this).attr('name', 'search-outline')

        $(this).parent().prev().attr('value', '')

        $(this).parent().next().hide();

    });

    $(document).on('click', '.headersearchhref', function (e) {

        e.preventDefault();

    });

    //#endregion headersearch

    //---------------------------------------------------------------------------------------------------------------

    //#region close toggle windows by clicking outside

    //------------ shop page sortirovka menu close on click on document 

    $(document).on('click', function (e) {

        if (!($(e.target).is('.filterdiv')
            || $(e.target).is('.filterul')
            || $(e.target).is('.sorttype')
            || $(e.target).is('.filterul li')
            || $(e.target).is('.filterdiv .svgkeeper')
            || $(e.target).is('.filterdiv .svgkeeper svg'))) {

            $('.filterul').hide();

            $(this).find(".svgkeeper").removeClass('roundarrow');

        }
    });

    //------------ header search menu close on click on document 

    $(document).on('click', function (e) {

        if (!($(e.target).is('.search')
            || $(e.target).is('.search_input')
            || $(e.target).is('.headersearchhref')
            || $(e.target).is('.search_icon')
            || $(e.target).is('.searchmenu')
            || $(e.target).is('.searchelements')
            || $(e.target).is('.searchul')
            || $(e.target).is('.searchul li'))) {

            $('.searchmenu').hide();

            $('.closesearchheader').attr('name', 'search-outline');
        }
    });

    //------------ header search menu close on click on document 

    $(document).on('click', function (e) {

        if (!($(e.target).is('.search')
            || $(e.target).is('.search_input')
            || $(e.target).is('.headersearchhref')
            || $(e.target).is('.search_icon')
            || $(e.target).is('.searchmenu')
            || $(e.target).is('.searchelements')
            || $(e.target).is('.searchul')
            || $(e.target).is('.searchul li'))) {

            $('.searchmenu').hide();

            $('.closesearchheader').attr('name', 'search-outline');
        }
    });

    //------------ header my account menu and basket menu

    $(document).on('click', function (e) {

        if ($(window).width() < 576) {
            if (!($(e.target).is('.forclosebasket')
                || $(e.target).is('.forclosebasket li')
                || $(e.target).is('.forclosebasket li span')
                || $(e.target).is('.forclosebasket a')
                || $(e.target).is('.forclosebasket div'))) {

                $('.minibasket').fadeOut(200);
            }
        }
    });

    $(document).on('click', function (e) {

        if ($(window).width() < 576) {
            if (!($(e.target).is('.forcloseaccount')
                || $(e.target).is('.forcloseaccount li')
                || $(e.target).is('.forcloseaccount li span')
                || $(e.target).is('.forcloseaccount li a')
                || $(e.target).is('.forcloseaccount li div')
                || $(e.target).is('.forcloseaccount li div span')
                || $(e.target).is('.forcloseaccount li a span')
                || $(e.target).is('.forcloseaccount li a span svg'))) {

                $('.accountinfo').fadeOut(200);
            }
        }
    });

    //------------ product deatil page two custom select options close on click on document

    $(document).on('click', function (e) {

        if (!($(e.target).is('.forclosecolor')
            || $(e.target).is('.forclosecolor li'))) {

            $('.buyulcolor').hide();
        }
    });

    $(document).on('click', function (e) {

        if (!($(e.target).is('.forclosesize')
            || $(e.target).is('.forclosesize li'))) {

            $('.buyulsize').hide();
        }
    });

    //#endregion close toggle windows by clicking outside

    //---------------------------------------------------------------------------------------------------------------

    //#region ope close product detail page modal

    $(document).on('click', '.openmodalreview', function () {

        $('.modalmoy').fadeIn(150);

        // $('#body').attr('style', 'overflow: hidden;');

    })

    $(document).on('click', '.closemodal', function () {

        $('.modalmoy').fadeOut(150);

    })

    $(document).on('click', function (e) {

        if (!($(e.target).is('.modalmoy')
            || $(e.target).is('.overlaymodall')
            || $(e.target).is('.dontclose')
            || $(e.target).is('.dontclose *')
            || $(e.target).is('.modalall'))) {

            $('.modalmoy').fadeOut(150);
        }

    })

    //#endregion ope close product detail page modal

    //---------------------------------------------------------------------------------------------------------------

    //#region clear modal textarea on click

    $(document).on('keyup', '.reviewarea', function () {

        $('.clearreview').show();

        if (!$(this).val()) {
            $('.clearreview').hide();
        }
    });

    $(document).on('click', '.clearreview', function () {

        $('.reviewarea').val('');

        $(this).hide();

    });

    var stars = new StarRating('.star_rating', {
        classNames: {
            active: 'gl-active',
            base: 'gl-star-rating',
            selected: 'gl-selected',
        },
        clearable: true,
        maxStars: 10,
        prebuilt: false,
        stars: null,
        tooltip: false,
    });

    stars.rebuild();
    //gl-selectedin attr kotoriy data-value chetotam nado budet vzat i fetchanut kak value

    //#endregion clear modal textarea on click

    //---------------------------------------------------------------------------------------------------------------

    //#region product detail page modal photo slider

    $('.photoslider1').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.detailmodalprev'),
        nextArrow: $('.detailmodalnext'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $('.detailmodalprev'),
                    nextArrow: $('.detailmodalnext'),
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    prevArrow: $('.detailmodalprev'),
                    nextArrow: $('.detailmodalnext'),
                    arrows: true,
                    infinite: true,
                    dots: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    prevArrow: $('.detailmodalprev'),
                    nextArrow: $('.detailmodalnext'),
                    infinite: true,
                    slidesToShow: 1,
                    dots: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //#endregion product detail page modal photo slider

    //---------------------------------------------------------------------------------------------------------------

    //#region open close review photo modal in review modal in product detail page 

    $(document).on('click', '.photomodal', function () {

        $('.photoslider').fadeIn(150);

        $('.photoslider').addClass('slideropen');

        // $('#body').attr('style', 'overflow: hidden;');

    });

    $(document).on('click', '.closemodalphoto', function () {

        $('.photoslider').fadeOut(150);

        $('.photoslider').removeClass('slideropen');

    });

    $(document).on('click', function (e) {

        if (!($(e.target).is('.dontclose')
            || $(e.target).is('.dontclose *'))) {

            $('.photoslider').removeClass('slideropen');
            $('.photoslider').fadeOut(150);
        }

    });

    //#endregion open close review photo modal in review modal in product detail page 














});

// $('.forzoom').zoom();


/*
            let url = $('.updateForm').attr('action');

            let key = $(this).prev().attr('name');
            let value = $(this).prev().val();
            console.log(key)
            console.log(value)

            let bodyObj = {
                key: key,
                value: value
            }

            fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(bodyObj)
            })
            .then(res => res.text())
            .then(data => {
                $('.settingContainer').html(data)
            })

            [HttpPost]
            public async Task<IActionResult> Update([FromBody] SettingVM settingVM)
            {
                List<Setting> settings = await _context.Settings.ToListAsync();

                if (!settings.Any(x=>x.Key == settingVM.key))
                {
                    return BadRequest();
                }

                settings.FirstOrDefault(x => x.Key == settingVM.key).Value = settingVM.value;

                await _context.SaveChangesAsync();

                return PartialView("_SettingIndexPartial",settings.ToDictionary(x=>x.Key, x=>x.Value));
            }

            public class SettingVM
            {
                public string key { get; set; }
                public string value { get; set; }
            }
*/



/*

            

// Ajax mail js
$(function () {

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-messege');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

});


*/