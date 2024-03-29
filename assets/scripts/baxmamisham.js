//#region close toggle windows by clicking outside

//------------ product detail page two custom select options close on click on document

$(document).on("click", function (e) {
    if (
        !(
            $(e.target).is(".forclosecolor") ||
            $(e.target).is(".forclosecolor li")
        )
    ) {
        $(".buyulcolor").hide();
    }
});

$(document).on("click", function (e) {
    if (
        !($(e.target).is(".forclosesize") || $(e.target).is(".forclosesize li"))
    ) {
        $(".buyulsize").hide();
    }
});

//#endregion close toggle windows by clicking outside

//---------------------------------------------------------------------------------------------------------------

//#region product detail page slider

//--------------------------------- product detail page slider

$(".completing_products").slick({
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
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                adaptiveHeight: true,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                //ili je 1 dene
                slidesToScroll: 1,
                adaptiveHeight: true,
                dots: false,
            },
        },
    ],
});

//#endregion product detail page slider

//---------------------------------------------------------------------------------------------------------------

//#region product detail page slider bottom

//--------------------------------- product detail page slider bottom

$(".related_items").slick({
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
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                adaptiveHeight: true,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                //ili je 1 dene
                slidesToScroll: 1,
                adaptiveHeight: true,
                dots: false,
            },
        },
    ],
});

//#endregion product detail page slider bottom

//---------------------------------------------------------------------------------------------------------------

//#region product detail page form
$(document).on("click", ".buydiv", function () {
    $($(this).find("ul")).toggle();

    $(this).find(".svgkeeper").toggleClass("roundarrow");
});

$(document).on("click", ".buyul li", function () {
    $(this).parent().parent().children()[0].innerHTML = $(this).text();

    $(this).addClass("yellowli selected");

    $(this).siblings("li").removeClass("yellowli");
});

$(document).on("click", ".buyulsize li", function () {
    $(this).parent().find("input").prop("checked", false);
    $(this).find("input").prop("checked", true);
});

$(document).on("click", ".buyulcolor li", function () {
    $(this).parent().find("input").prop("checked", false);
    $(this).find("input").prop("checked", true);
});

$(document).on("submit", ".detailform", function (e) {
    e.preventDefault();

    let size = $(this).find(".sizeinp:checked").val();

    let color = $(this).find(".colorinp:checked").val();

    if (size != undefined && color != undefined) {
        console.log(size);
        console.log(color);
        //misalcun prosto fetch

        fetch(`https://api.color.pizza/v1/${color.slice(1)}`)
            .then((res) => res.json())
            .then((data) => {
                colorname = data.paletteTitle;
                alert(
                    `${color} HEXcolor selected, --${colorname}-- returned from fetch, ${size} is size, thanks for order!`
                );
            });
        //fetch edirik basketviewmodel
    }

    $(this).find("input").prop("checked", false);

    $(".colorvalue").text("COLOR");
    $(".sizevalue").text("SIZE");
});

//#endregion product detail page form

//---------------------------------------------------------------------------------------------------------------

//#region product detail page more info click

$(document).on("click", ".togglemenutop", function () {
    $($(this).find(".infotop")).toggle(200);
});

$(document).on("click", ".togglemenubottom", function () {
    $($(this).find(".infobottom")).toggle(200);
});

//#endregion product detail page more info click

//---------------------------------------------------------------------------------------------------------------

//#region product detail page modal and image zoom

$(document).on("click", ".imgofprod", function () {
    $(".modal").addClass("modalotkroysa");

    let a = $($(this).children()[0]).attr("src");

    $(".modalphoto").attr("src", a);
});

$(document).on("click", ".closemodal", function () {
    $(".modal").removeClass("modalotkroysa");
});

// $(document).on('click', '.forzoom', function () {

//     if ($(window).width() > 576) {
//         $(this).find('img').imageZoom({
//             zoom: 200
//         });
//     }
// })

$(document).on("mousemove mouseover", ".forzoom", function (e) {
    if ($(window).width() > 576) {
        let img = $(this).children()[0];
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop / 55;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2.2)";
    }
});

$(document).on("mouseleave", ".forzoom", function (e) {
    if ($(window).width() > 576) {
        let img = $(this).children()[0];

        img.style.transformOrigin = `center center`;
        img.style.transform = "scale(1)";
    }
});

//#endregion product detail page modal

//---------------------------------------------------------------------------------------------------------------

//#region register eye icon

//--------------------------------- product register eye icon

$(document).on("click", ".seepass", function () {
    $(this).prev().prev().attr("type", "text");
    $(this).hide();
    $(this).next().show();
    $(this).prev().prev().focus();
});

$(document).on("click", ".closepass", function () {
    $(this).prev().prev().prev().attr("type", "password");
    $(this).hide();
    $(this).prev().show();
    $(this).prev().prev().prev().focus();
});

//#endregion register eye icon

//---------------------------------------------------------------------------------------------------------------

//#region checkout forms

//--------------------------------- checkout forms

$(document).on("click", ".changeinfo", function () {
    // $('.formaddresskeeper').hide();
    $(".formcardkeeper, .rightcheckout, .formaddresskeeper").hide();
    // $('.rightcheckout').hide();
    $(".forminfokeeper").fadeIn(200);
    $(".changeinfo").fadeOut(200);
    $(".changeaddress").fadeIn(200);
    $(".changecard").fadeIn(200);
    if ($(window).width() < 576) {
        $(window).scrollTop(800);
    }
});

$(document).on("submit", ".changeaccountinfoform", function (e) {
    e.preventDefault();

    const form = document.getElementById("changeaccountinfoform");
    const formData = new FormData(form);

    $("#fullnameorder").attr(
        "value",
        `${formData.get("name").trim()} ${formData.get("surname").trim()}`
    );
    $("#phoneorder").attr("value", formData.get("phone").trim());
    $("#emailorder").attr("value", formData.get("email").trim());

    $("#name").val("");
    $("#surname").val("");
    $("#email").val("");
    $("#phone").val("");

    //burdan sonra uje fetch edeceyik

    $(".forminfokeeper").hide();
    $(".rightcheckout").fadeIn(200);
    $(".changeinfo").fadeIn(200);
    if ($(window).width() < 576) {
        $(window).scrollTop(0);
    }
});

$(document).on("click", ".changeaddress", function () {
    $(".formcardkeeper, .rightcheckout, .forminfokeeper").hide();
    $(".formaddresskeeper").fadeIn(200);
    $(".changeinfo").fadeIn(200);
    $(".changecard").fadeIn(200);
    $(".changeaddress").fadeOut(200);
    if ($(window).width() < 576) {
        $(window).scrollTop(800);
    }
});

$(document).on("submit", ".changeaddressform", function (e) {
    e.preventDefault();

    const form = document.getElementById("changeaddressform");
    const formData = new FormData(form);

    $("#addressorder").attr(
        "value",
        `${formData.get("address1").trim()}, ${
            formData.get("address2") != ""
                ? formData.get("address2").trim() + ", "
                : ""
        }${formData.get("zipcode").trim()}`
    );
    $("#citycountryorder").attr(
        "value",
        `${formData.get("city").trim()}, ${formData.get("country").trim()}`
    );

    $("#address1").val("");
    $("#address2").val("");
    $("#country").val("");
    $("#city").val("");
    $("#zipcode").val("");

    //burdan sonra uje fetch edeceyik

    $(".formaddresskeeper").hide();
    $(".rightcheckout").fadeIn(200);
    $(".changeaddress").fadeIn(200);

    if ($(window).width() < 576) {
        $(window).scrollTop(0);
    }
});

$(document).on("click", ".changecard", function () {
    $(".formaddresskeeper, .rightcheckout, .forminfokeeper").hide();
    $(".formcardkeeper").fadeIn(200);
    $(".changecard").fadeOut(200);
    $(".changeinfo").fadeIn(200);
    $(".changeaddress").fadeIn(200);
    if ($(window).width() < 576) {
        $(window).scrollTop(800);
    }
});

$(document).on("submit", ".changecardform", function (e) {
    e.preventDefault();

    const form = document.getElementById("changecardform");
    const formData = new FormData(form);

    $("#cardnoorder").attr("value", `${formData.get("cardno").trim()}`);
    $("#cardexpireorder").attr("value", `${formData.get("expire").trim()}`);
    $("#cardholderorder").attr(
        "value",
        `${formData.get("cardname").trim()} ${formData
            .get("cardsurname")
            .trim()}`
    );

    $("#cvv").val("");
    $("#expire").val("");
    $("#cardno").val("");
    $("#cardname").val("");
    $("#cardsurname").val("");

    //sonra da hamsini fetch edirik
    $(".formcardkeeper").hide();
    $(".rightcheckout").fadeIn(200);
    $(".changecard").fadeIn(200);
    if ($(window).width() < 576) {
        $(window).scrollTop(0);
    }
});

$(document).on("click", ".closeform", function () {
    $(this).parent().hide();
    $(".rightcheckout").fadeIn(200);
    $(".changecard").fadeIn(200);
    $(".changeinfo").fadeIn(200);
    $(".changeaddress").fadeIn(200);
    if ($(window).width() < 576) {
        $(window).scrollTop(0);
    }
});

//#endregion checkout forms

//---------------------------------------------------------------------------------------------------------------

//#region  order page toggle menu

//--------------------------------- order page toggle menu

$(document).on("click", ".orders .order .top", function (e) {
    $($(this).next()).slideToggle(200);
});

//#endregion order page toggle menu

//---------------------------------------------------------------------------------------------------------------

//#region  order page toggle menu

//--------------------------------- order page toggle menu

$(document).on("click", ".faqtoggle", function (e) {
    $($(this).children()[0]).next().slideToggle(200);
});

//#endregion order page toggle menu

//---------------------------------------------------------------------------------------------------------------

//#region open close product detail page modal

$(document).on("click", ".openmodalreview", function () {
    $(".modalmoy").fadeIn(150);

    // $('#body').attr('style', 'overflow: hidden;');
});

$(document).on("click", ".closemodal", function () {
    $(".modalmoy").fadeOut(150);
});

$(document).on("click", function (e) {
    if (
        !(
            $(e.target).is(".modalmoy") ||
            $(e.target).is(".overlaymodall") ||
            $(e.target).is(".dontclose") ||
            $(e.target).is(".dontclose *") ||
            $(e.target).is(".modalall")
        )
    ) {
        $(".modalmoy").fadeOut(150);
    }
});

//#endregion open close product detail page modal

//---------------------------------------------------------------------------------------------------------------

//#region clear modal textarea on click ---- star rating

$(document).on("keyup", ".reviewarea", function () {
    $(".clearreview").show();

    if (!$(this).val()) {
        $(".clearreview").hide();
    }
});

$(document).on("click", ".clearreview", function () {
    $(".reviewarea").val("");

    $(this).hide();
});

if ($(".where:contains('1')").length > 0) {
    var stars = new StarRating(".star_rating", {
        classNames: {
            active: "gl-active",
            base: "gl-star-rating",
            selected: "gl-selected",
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

$(".photoslider1").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".detailmodalprev"),
    nextArrow: $(".detailmodalnext"),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: $(".detailmodalprev"),
                nextArrow: $(".detailmodalnext"),
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                prevArrow: $(".detailmodalprev"),
                nextArrow: $(".detailmodalnext"),
                arrows: true,
                infinite: true,
                dots: false,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                arrows: true,
                prevArrow: $(".detailmodalprev"),
                nextArrow: $(".detailmodalnext"),
                infinite: true,
                slidesToShow: 1,
                dots: false,
                slidesToScroll: 1,
            },
        },
    ],
});

//#endregion product detail page modal photo slider

//---------------------------------------------------------------------------------------------------------------

//#region open close review photo modal in review modal in product detail page

$(document).on("click", ".photomodal", function () {
    $(".photoslider").fadeIn(150);

    $(".photoslider").addClass("slideropen");

    // $('#body').attr('style', 'overflow: hidden;');
});

$(document).on("click", ".closemodalphoto", function () {
    $(".photoslider").fadeOut(150);

    $(".photoslider").removeClass("slideropen");
});

$(document).on("click", function (e) {
    if (!($(e.target).is(".dontclose") || $(e.target).is(".dontclose *"))) {
        $(".photoslider").removeClass("slideropen");
        $(".photoslider").fadeOut(150);
    }
});

//#endregion open close review photo modal in review modal in product detail page

//---------------------------------------------------------------------------------------------------------------

//#region open close checkout page modals

$(document).on("click", ".openaddressmodal", function () {
    $(".addressmodal").fadeIn(150);
});

$(document).on("click", ".opencardmodal", function () {
    $(".cardmodal").fadeIn(150);
});

$(document).on("click", ".closeaddressmodal", function () {
    $(".addressmodal").fadeOut(150);
});

$(document).on("click", ".closecardmodal", function () {
    $(".cardmodal").fadeOut(150);
});

$(document).on("click", function (e) {
    if (
        !(
            $(e.target).is(".addressmodal") ||
            $(e.target).is(".dontclose") ||
            $(e.target).is(".dontclose *")
        )
    ) {
        $(".addressmodal").fadeOut(150);
    }

    if ($(e.target).is(".addressinozu *")) {
        $(".addressmodal").fadeOut(150);
    }
});

$(document).on("click", function (e) {
    if (
        !(
            $(e.target).is(".cardmodal") ||
            $(e.target).is(".dontclose") ||
            $(e.target).is(".dontclose *")
        )
    ) {
        $(".cardmodal").fadeOut(150);
    }

    if ($(e.target).is(".cardinozu *")) {
        $(".cardmodal").fadeOut(150);
    }
});

$(document).on("click", ".addressinozu", function () {
    $("#addressorder").attr(
        "value",
        `${$(this).find(".address1value").text().trim()}, ${
            $(this).find(".address2value").text().trim().length > 0
                ? $(this).find(".address2value").text().trim() + ", "
                : ""
        }${$(this).find(".zipcodevalue").text().trim()}`
    );
    $("#citycountryorder").attr(
        "value",
        `${$(this).find(".cityvalue").text().trim()}, ${$(this)
            .find(".countryvalue")
            .text()
            .trim()}`
    );
});

$(document).on("click", ".cardinozu", function () {
    $("#cardnoorder").attr("value", `${$(".cardno").text().trim()}`);
    $("#cardexpireorder").attr("value", `${$(".cardexpire").text().trim()}`);
    $("#cardholderorder").attr("value", `${$(".cardholder").text().trim()}`);
});

//#endregion open close checkout page modals
