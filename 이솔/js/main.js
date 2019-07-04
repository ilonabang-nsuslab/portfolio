$(document).ready(function () {
    var obj = $(".product1>li").clone();
    var w = $(window).width();
    console.log(w)
    $(".product1").append(obj);

    //window가 resize될 때마다 width값을 저장
    $(window).resize(function () {
        w = $(window).width();
    })
    var sNum = 0;

    $(".rightArrow>a").click(function (e) {
        e.preventDefault();
 if (w >= 640) {
        if (sNum == 6) {
            sNum = 0;
            $(".product1").css({
                "margin-left": 0
            })
        }
        sNum++;
        console.log(sNum);
        $(".product1").stop().animate({
            "margin-left": -220 * sNum + "px"
        }, 500);
     
 }
        else{
             if (sNum == 6) {
            sNum = 0;
            $(".product1").css({
                "margin-left": 0
            })
        }
        sNum++;
        console.log(sNum);
        $(".product1").stop().animate({
            "margin-left": -50 * sNum + "%"
        }, 500);
     
        }
    })
    $(".leftArrow>a").click(function (e) {
        e.preventDefault();

        if (w >= 640) {
            if (sNum == 0) {
                sNum = 6;
                $(".product1").css("margin-left", "-1320px");
            }

            sNum--;

            $(".product1").stop().animate({
                "margin-left": -220 * (sNum) + "px"
            }, 500);

        } else {

            if (sNum == 0) {
                sNum = 6;
                $(".product1").css("margin-left", "-300%");
            }

            sNum--;

            $(".product1").stop().animate({
                "margin-left": -50 * (sNum) + "%"
            })
        }

    })
})
