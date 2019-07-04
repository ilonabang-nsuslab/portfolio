$(function () {
    $(".hamBtn").click(function () {
        $("nav").stop().animate({
            "right": 0
        }, 500);
        $(".mo_login").stop().animate({
            "right": 0
        }, 500);
        $(".navClose").fadeIn(500);
    })

    $(".navClose").click(function () {
        $("nav").stop().animate({
            "right": "-70%"
        }, 500);
        $(".mo_login").stop().animate({
            "right": "-70%"
        }, 500);
        $(".navClose").fadeOut(500);
    })

})
