$(function () {
    $(".preloader").addClass("d-none");

    //obshak and main page

    //#region slayderi

    //---------------------------------main page first slider

    $(".sliderfirst").slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        prevArrow: $(".prevfirst"),
        nextArrow: $(".nextfirst"),
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    adaptiveHeight: true,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: false,
                },
            },
        ],
    });

    //---------------------------------main page second slider

    $(".slidersecond").slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        prevArrow: $(".prevsecond"),
        nextArrow: $(".nextsecond"),
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    adaptiveHeight: true,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: false,
                },
            },
        ],
    });

    //#endregion slayderi

    //---------------------------------------------------------------------------------------------------------------

    //#region header scroll

    if ($(".where").text()) {
        $(".header").css("background-color", "rgba(0, 0, 0, 0.2)");
        $(".header .all").css("padding", "6px 0px");
    }

    $(document).on("scroll", function () {
        if (!$(".where").text()) {
            if ($(window).scrollTop() > $(window).height() / 2 - 100) {
                $(".header .all").css("padding", "6px 0px");
                $(".header").css("background-color", "rgba(0, 0, 0, 0.2)");
            } else {
                $(".header .all").css("padding", "20px 0px");
                $(".header").css("background-color", "rgba(0, 0, 0, 0)");
            }
        }
    });

    //#endregion header scroll

    //---------------------------------------------------------------------------------------------------------------

    //#region  sidebar tabmenu

    //---------------------------------tabmenu in sidebar

    $("#" + $(".active-tab").data("tab")).show();

    $(document).on("click", ".tab_menu li", function () {
        $(this).addClass("active-tab").siblings("li").removeClass("active-tab");
        $("#" + $(this).data("tab"))
            .show()
            .siblings("ul")
            .hide();
    });

    //#endregion sidebar tabmenu

    //---------------------------------------------------------------------------------------------------------------

    //#region sidebar open close

    $(document).on("click", ".hamburgermenu", function (e) {
        $(".sidebarmenu").addClass("open");
    });

    $(document).on("click", ".close_btn", function (e) {
        $(".sidebarmenu").removeClass("open");
    });

    //#endregion sidebar open close

    //---------------------------------------------------------------------------------------------------------------

    //#region Open basket close basket on phone, Open Close accountinfo

    $(document).on("click", function (e) {
        const isParentClass = $(e.target).parents(".cart").length > 0;

        if (isParentClass && $(window).width() < 768) {
            $(".minibasket").fadeToggle(200);
        }

        if (!isParentClass && $(window).width() < 768) {
            $(".minibasket").fadeOut(200);
        }
    });

    $(document).on("click", function (e) {
        const isParentClass = $(e.target).parents(".account").length > 0;

        if (isParentClass && $(window).width() < 768) {
            $(".accountinfo").fadeToggle(200);
        }

        if (!isParentClass && $(window).width() < 768) {
            $(".accountinfo").fadeOut(200);
        }
    });

    $(document).on("click", ".minibasket, .accountinfo", function (e) {
        e.stopPropagation();
    });

    //#endregion

    //---------------------------------------------------------------------------------------------------------------

    //#region headersearch

    $(document).on("keyup click", function (e) {
        const isParentClass = $(e.target).parents(".search").length > 0;

        if (isParentClass) {
            $(".searchmenu").fadeIn();
            $(".search_icon").attr("name", "close-outline");
            $(".search_icon").addClass("closesearchheader");
        } else if (!isParentClass || $(".search_input").val() == "") {
            $(".searchmenu").fadeOut();
            $(".search_input").val("");

            $(".search_icon").attr("name", "search-outline");
            $(".search_icon").removeClass("closesearchheader");
        }
    });

    $(document).on("click", ".closesearchheader", function (e) {
        $(this).attr("name", "search-outline");
        $(".search_input").attr("value", "");
        $(".searchmenu").hide();
    });

    $(document).on("click", ".headersearchhref", function (e) {
        e.preventDefault();
    });

    //#endregion headersearch




    //shop page

    //#region shop page tabmenu functionality categories

    $(document).on("click", ".headcategoryli", function (e) {
        if ($(window).width() < 576) {
            e.preventDefault();
        }

        $($(this).children()[0]).addClass("activespan");

        $(this).siblings("li").find("a").removeClass("activespan");
    });

    //#endregion shop page tabmenu functionality categories

    //---------------------------------------------------------------------------------------------------------------

    //#region open close shop page categories megamenu

    $(document).on("click", ".categoryhref", function (e) {
        if ($(window).width() < 768) {
            e.preventDefault();

            $($(this).parent())
                .siblings("li")
                .find(".categorymenu")
                .attr("style", "display: none;");

            $($(this).next()).fadeToggle(100);
        }
    });

    //------------ shop page categories ul li close siblings

    $(document).on("click", function (e) {
        const isParentClass = $(e.target).parents(".headcategoryli").length > 0;

        if (isParentClass && $(window).width() < 768) {
            $(".categorymenu").fadeToggle(200);
        }

        if (!isParentClass && $(window).width() < 768) {
            $(".categorymenu").fadeOut(200);
        }
    });

    $(document).on("click", ".categorymenu", function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.closeshopbtn', function() {
        $(this).parent().parent().hide();
    })

    //#endregion open close shop page categories megamenu
});
