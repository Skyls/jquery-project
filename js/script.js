
$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY)


    if(positionY < 325){
        $("#scrolltop").css("opacity", 0);
    }
    if(positionY > 325){
        $("#scrolltop").css("opacity", 1);
    }
})