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

    //---------------------------------------------------------------------------------------------------------------

    //#region shop page open close categories megamenu

    //open categories megamenu
    $(document).on("click", ".headcategoryli", function (e) {
        e.stopPropagation(); // icindeki a hrefe gore

        if ($(window).width() < 768) {
            e.preventDefault();

            $(this).siblings("li").find(".categorymenu").hide();

            $(this).siblings("li").removeClass("activeli");
            $(this).addClass("activeli");

            $(this).find(".categorymenu").fadeToggle(100);
        }
    });

    //shop page categories close on click outside
    $(document).on("click", function (e) {
        const isParentClass =
            $(e.target).parents(".headcategoryli").length > 0 ||
            $(e.target).is(".headcategoryli");

        if (isParentClass && $(window).width() < 768) {
            $(this).find(".categorymenu").fadeToggle(200);
        }

        if (!isParentClass && $(window).width() < 768) {
            $(".categorymenu").fadeOut(200);
        }
    });

    $(document).on("click", ".categorymenu", function (e) {
        e.stopPropagation();
    });

    //shop page categories close on click on X
    $(document).on("click", ".closeshopbtn", function () {
        $(this).parents(".headcategoryli").find(".categorymenu").hide();

        //koqda close delaesh odin iz LI ostaetsa s
        //jeltim backgroundom, nado ponat a kakoy sleduyet ostavlat vse taki.
    });

    //#endregion shop page open close categories megamenu

    //---------------------------------------------------------------------------------------------------------------

    //#region shop page INPUT RANGE

    const rangeInput = document.querySelectorAll(".range-input input");
    const priceInputMobile = document.querySelectorAll(
        ".price-input-mobile input"
    );
    const priceInput = document.querySelectorAll(".price-input input");
    let priceGap = 1;

    priceInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            if (
                maxPrice - minPrice >= priceGap &&
                maxPrice <= rangeInput[1].max
            ) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                } else {
                    rangeInput[1].value = maxPrice;
                }
            }
        });
    });
    priceInputMobile.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInputMobile[0].value),
                maxPrice = parseInt(priceInputMobile[1].value);

            if (
                maxPrice - minPrice >= priceGap &&
                maxPrice <= rangeInput[1].max
            ) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                } else {
                    rangeInput[1].value = maxPrice;
                }
            }
        });
    });
    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
            if (maxVal - minVal < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                priceInputMobile[0].value = minVal;
                priceInputMobile[1].value = maxVal;
            }
        });
    });

    $(document).on("pointerup", ".range-max, .range-min", function () {
        let maxvalue = $(".range-max").val();
        let minvalue = $(".range-min").val();

        // alert(`${minvalue} min value, ${maxvalue} max value -- information for fetch`);
    });

    $(document).on("keyup", ".input-min, .input-max", function (e) {
        if (
            (e.which >= 48 && e.which <= 57) ||
            (e.which >= 96 && e.which <= 105) ||
            e.which == 8
        ) {
            let minvalue = parseInt($(".input-min").val());
            let maxvalue = parseInt($(".input-max").val());

            // alert(`${minvalue} min value, ${maxvalue} max value -- information for fetch`);
        }
    });

    //#endregion shop page INPUT RANGE

    //---------------------------------------------------------------------------------------------------------------

    //#region shop page moya custom sortirovka, ves funkcional

    //open
    $(document).on("click", ".filterdiv", function (e) {
        e.stopPropagation();
        $(this).find(".filterul").toggle();
        $(this).siblings("div").find(".filterul").hide();
        $(this).find(".svgkeeper").toggleClass("roundarrow");
    });

    //set
    $(document).on("click", ".filterul li", function () {
        $(this).parents(".filterdiv").find(".sorttype").text($(this).text());
        $(this).addClass("yellowli");
        $(this).siblings("li").removeClass("yellowli");
    });

    //close
    $(document).on("click", function (e) {
        const isParentClass =
            $(e.target).parents(".filterdiv").length > 0 ||
            $(e.target).is(".filterdiv");

        if (isParentClass) {
            $(this).find(".filterul").fadeToggle(200);
            console.log("salam");
        }

        if (!isParentClass) {
            $(this).find(".filterul").fadeOut(200);
        }
    });

    //#endregion shop page moya custom sortirovka, ves funkcional

    //---------------------------------------------------------------------------------------------------------------

    //#region form shop page buy product

    //shop page make input selected
    $(document).on(
        "mousedown",
        ".addingtobasketinshoppage .colorlabel",
        function (e) {
            if ($(this).html() == "") {
                $(this).append(
                    '<ion-icon name="checkmark-outline" class="markicon"></ion-icon>'
                );
            } else {
                $(this).text("");
            }

            $(this).siblings("input").prop("checked", "false");
            $(this).siblings(".colorlabel").text("");

            $(this).prev().prop("checked", "true");
        }
    );

    //shop page submit basket button
    $(document).on("submit", ".addingtobasketinshoppage", function (e) {
        e.preventDefault();

        let input = $(this).find("input:checked");

        let select = $(this).find("option:selected");

        let colorname = "";

        console.log(select.val());
        console.log(input.val());

        if (input.val() != undefined && select.val() != 0) {
        }

        $(this).find("input:checked").prop("checked", false);
        $(this).find(".markicon").remove();
        $(this).find("select").val("0");
    });

    //#endregion form shop page buy product

    //account info page

    //#region account info page input checked label

    $(document).on("change", ".genderinput", function () {
        var label = $(this).parent();
        label.parent().find("label").removeClass("checkedlabel");

        if ($(this).is(":checked")) {
            label.addClass("checkedlabel");
        }
    });

    //#endregion account info page input checked label

    //addesses and cards page

    //#region add new card

    //--------------------------------- add new card

    $(document).on("click", ".clicktoaddnewcard", function (e) {
        $(".addcard").fadeIn(200);
        $(this).hide();
    });

    $(document).on("click", ".cancelnewcard", function (e) {
        $(".addcard").hide();
        $(".clicktoaddnewcard").fadeIn(200);
    });

    $(document).on("submit", "#addnewcardform", function (e) {
        e.preventDefault();

        const form = $(this);
        const formData = form.serializeArray();

        const formValues = {};
        formData.forEach((field) => {
            formValues[field.name] = field.value.trim();
        });

        form.find("input[type='text']").val("");

        //then i will axios

        console.log(formValues);
    });

    //#endregion add new card

    //---------------------------------------------------------------------------------------------------------------

    //#region add new address

    $(document).on("click", ".clicktoaddnewaddress", function (e) {
        $(".addaddress").fadeIn(200);
        $(this).hide();
    });

    $(document).on("click", ".cancelnewaddress", function (e) {
        $(".addaddress").hide();
        $(".clicktoaddnewaddress").fadeIn(200);
    });

    $(document).on("submit", "#addnewaddressform", function (e) {
        e.preventDefault();

        const form = $(this);
        const formData = form.serializeArray();

        const formValues = {};
        formData.forEach((field) => {
            formValues[field.name] = field.value.trim();
        });

        form.find("input[type='text']").val("");

        //then i will axios

        console.log(formValues);
    });

    //#endregion add new address

    //basket page

    //#region basket html product quantity

    $(document).on("click", ".plus", function (e) {
        e.preventDefault();

        let result = Number($(this).prev().val());
        result++;
        $(this).prev().val(result);
    });

    $(document).on("click", ".minus", function (e) {
        e.preventDefault();

        let result = Number($(this).next().val());

        if (result > 1) {
            result--;
            $(this).next().val(result);
        } else {
            $(this).next().val("1");
        }
    });

    $(document).on("keyup", ".result", function (e) {
        if (
            (e.which >= 48 && e.which <= 57) ||
            (e.which >= 96 && e.which <= 105) ||
            e.which == 8
        ) {
            // $($(this).parent().children()[0]).fadeIn(180);
            // alert(`${$(this).val()} count of product`);
        }
    });

    //#endregion basket html product quantity

    //---------------------------------------------------------------------------------------------------------------

    //#region basket sliders

    $(".youmaylikeitems").slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        prevArrow: $(".basketprevfirst"),
        nextArrow: $(".basketnextfirst"),
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

    $(".recentlyvieweditems").slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        prevArrow: $(".basketprevsecond"),
        nextArrow: $(".basketnextsecond"),
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

    //#endregion basket sliders





});
