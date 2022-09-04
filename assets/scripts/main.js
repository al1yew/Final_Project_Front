
//#region preloader

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

//#endregion preloader

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

    if ($('.where').text()) {
        $(".mobile").css("background-color", "rgba(0, 0, 0, 0.2)");
        $(".mobile").css("padding", "15px 10px");
        $(".header").css("background-color", "rgba(0, 0, 0, 0.2)");
        $(".computer").css("padding", "13px 0");
    }

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

    //#region  form shop page

    //---------------------------------products stranica make input selected

    $(document).on('mousedown', '.addingtobasketinshoppage .colorlabel', function (e) {

        if ($(this).html() == '') {
            $(this).append('<ion-icon name="checkmark-outline" class="markicon"></ion-icon>');
        }
        else {
            $(this).text('');
        }

        $(this).siblings('input').prop('checked', 'false');
        $(this).siblings('.colorlabel').text('');

        $(this).prev().prop('checked', 'true');
    });

    //---------------------------------products stranica form dla zakaza produkta submit na button

    $(document).on('submit', '.addingtobasketinshoppage', function (e) {

        e.preventDefault();

        let input = $(this).find('input:checked');

        let select = $(this).find('option:selected');

        let colorname = ''

        console.log(select.val())
        console.log(input.val())

        if (input.val() != undefined && select.val() != 0) {

            //misalcun prosto fetch

            fetch(`https://api.color.pizza/v1/${input.val().slice(1)}`)
                .then(res => res.json())
                .then(data => {
                    colorname = data.paletteTitle
                    alert(`${input.val()} HEXcolor selected, --${colorname}-- returned from fetch, ${select.val()} is size`)
                });

            //fetch edirik basketviewmodel
        }

        $(this).find('input:checked').prop('checked', false);
        $(this).find('.markicon').remove();
        $(this).find('select').val('0')

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

    //#region moya custom sortirovka
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
    //#endregion moya custom sortirovka

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

        $(this).siblings("li").removeClass('yellowli');
    });

    $(document).on('click', '.buyulsize li', function () {

        $(this).parent().find('input').prop('checked', false);
        $(this).find('input').prop('checked', true);
    });

    $(document).on('click', '.buyulcolor li', function () {

        $(this).parent().find('input').prop('checked', false);
        $(this).find('input').prop('checked', true);
    });

    $(document).on('submit', '.detailform', function (e) {
        e.preventDefault();

        let size = $(this).find('.sizeinp:checked').val();

        let color = $(this).find('.colorinp:checked').val();

        if (size != undefined && color != undefined) {
            console.log(size)
            console.log(color)
            //misalcun prosto fetch

            fetch(`https://api.color.pizza/v1/${color.slice(1)}`)
                .then(res => res.json())
                .then(data => {
                    colorname = data.paletteTitle
                    alert(`${color} HEXcolor selected, --${colorname}-- returned from fetch, ${size} is size, thanks for order!`)
                });
            //fetch edirik basketviewmodel
        }

        $(this).find('input').prop('checked', false);

        $('.colorvalue').text('COLOR');
        $('.sizevalue').text('SIZE');
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

    //#region product detail page modal and image zoom

    $(document).on('click', '.imgofprod', function () {

        $('.modal').addClass('modalotkroysa');

        let a = $(($(this).children()[0])).attr('src');

        $('.modalphoto').attr('src', a);

    });

    $(document).on('click', '.closemodal', function () {

        $('.modal').removeClass('modalotkroysa');
    });

    // $(document).on('click', '.forzoom', function () {

    //     if ($(window).width() > 576) {
    //         $(this).find('img').imageZoom({
    //             zoom: 200
    //         });
    //     }
    // })

    $(document).on('mousemove mouseover', '.forzoom', function (e) {
        if ($(window).width() > 576) {
            let img = $(this).children()[0];
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop / 55;
            img.style.transformOrigin = `${x}px ${y}px`;
            img.style.transform = "scale(2.2)";
        }
    });

    $(document).on('mouseleave', '.forzoom', function (e) {
        if ($(window).width() > 576) {
            let img = $(this).children()[0];

            img.style.transformOrigin = `center center`;
            img.style.transform = "scale(1)";
        }
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
        $(this).prev().prev().focus();
    });

    $(document).on('click', '.closepass', function () {
        $(this).prev().prev().prev().attr('type', 'password');
        $(this).hide();
        $(this).prev().show();
        $(this).prev().prev().prev().focus();
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

    //------------ shop page categories ul li close siblings

    $(document).on('click', function (e) {

        if ($(window).width() < 576) {
            if (!($(e.target).is('.headcategoryli')
                || $(e.target).is('.headcategoryli *'))) {

                $('.categorymenu').hide();

                $('.headcategoryli').each(function () {
                    $(this).find('a').removeClass('activespan');
                });

                $('.cloli').find('a').addClass('activespan');

            }
        }
    });

    //------------ shop page custom select options hiding on click on another select 

    $(document).on('click', '.filterdiv', function () {

        $($(this).siblings('.filterdiv').find('ul')).each(function () {
            $(this).hide();
            $(this).next().removeClass('roundarrow');
        })
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

    //#region open close product detail page modal

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

    //#endregion open close product detail page modal

    //---------------------------------------------------------------------------------------------------------------

    //#region clear modal textarea on click ---- star rating

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

    if ($(".where:contains('1')").length > 0) {

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
    }
    //gl-selectedin attr kotoriy data-value chetotam nado budet vzat i fetchanut kak value

    //#endregion clear modal textarea on click ---- star rating

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

    //---------------------------------------------------------------------------------------------------------------

    //#region open close checkout page modals

    $(document).on('click', '.openaddressmodal', function () {

        $('.addressmodal').fadeIn(150);

    });

    $(document).on('click', '.opencardmodal', function () {

        $('.cardmodal').fadeIn(150);

    });

    $(document).on('click', '.closeaddressmodal', function () {

        $('.addressmodal').fadeOut(150);

    });

    $(document).on('click', '.closecardmodal', function () {

        $('.cardmodal').fadeOut(150);

    });

    $(document).on('click', function (e) {

        if (!($(e.target).is('.addressmodal')
            || $(e.target).is('.dontclose')
            || $(e.target).is('.dontclose *'))) {

            $('.addressmodal').fadeOut(150);
        }

        if ($(e.target).is('.addressinozu *')) {
            $('.addressmodal').fadeOut(150);
        }
    });

    $(document).on('click', function (e) {

        if (!($(e.target).is('.cardmodal')
            || $(e.target).is('.dontclose')
            || $(e.target).is('.dontclose *'))) {

            $('.cardmodal').fadeOut(150);
        }

        if ($(e.target).is('.cardinozu *')) {
            $('.cardmodal').fadeOut(150);
        }
    });

    $(document).on('click', '.addressinozu', function () {

        $('#addressorder').attr('value', `${$(this).find('.address1value').text().trim()}, ${$(this).find('.address2value').text().trim().length > 0 ? $(this).find('.address2value').text().trim() + ', ' : ''}${$(this).find('.zipcodevalue').text().trim()}`)
        $('#citycountryorder').attr('value', `${$(this).find('.cityvalue').text().trim()}, ${$(this).find('.countryvalue').text().trim()}`)

    });

    $(document).on('click', '.cardinozu', function () {

        $('#cardnoorder').attr('value', `${$('.cardno').text().trim()}`)
        $('#cardexpireorder').attr('value', `${$('.cardexpire').text().trim()}`)
        $('#cardholderorder').attr('value', `${$('.cardholder').text().trim()}`)

    });

    //#endregion open close checkout page modals

});

