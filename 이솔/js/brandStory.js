$(function(){
    var pos = new Array();
    for(i=0;i<5;i++){
        pos[i]=$("#container>div").eq(i).offset().top;
        console.log(pos[4]);
    }
    $(".button>li").eq(0).click(function(e){
        $("html").stop().animate({
            scrollTop: pos[3]
        }, 1000);
    })
    $(".button>li").eq(1).click(function(e){
        $("html").stop().animate({
            scrollTop: pos[4]
        }, 1000);
    })
})

