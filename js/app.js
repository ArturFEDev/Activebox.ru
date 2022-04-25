$(function () {

    /* Fixed Header*/

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checksrroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checksrroll(scrollPos, introH);
    });

    function checksrroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll*/

    $("[data-scroll]").on("click", function (Event) {

        Event.preventDefault();

        let elementId = $(this).data("scroll");
        let elemensoffset = $(elementId).offset().top;
        nav.removeClass("show");

        console.log(elemensoffset);
        $("html, body").animate({
            scrollTop: elemensoffset - 57
        }, 600);
    });


    /* Nav Toogle*/

    let nav = $("#nav");
    let navToggle = $("#navToggle");


    navToggle.on("click", function (Event) {
        Event.preventDefault();
        nav.toggleClass("show");

    });


    /* Reviews https://kenwheeler.github.io/slick/ */

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });

});
