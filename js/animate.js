$(document).ready(function(){
    $(window).scroll(function(){
    var techScroll = $(window).scrollTop();
    console.log(techScroll);
    if(techScroll > 4800){
        $('#techAnimateImg').stop().animate({
            left:0
        },1000);
    } else {
        $('#techAnimateImg').stop().animate({
            left: -1000
        });
    }
 
    if(techScroll >= 5800){
        $('#perforAnimateImg').stop().animate({
            right : 0
        },1000);
    } else{
        $('#perforAnimateImg').stop().animate({
            right : -1000
        });
    };

    if(techScroll == 0){
        $('#topBtn').css({
            display : 'none'
        });
    } else{
        $('#topBtn').css({
            display : 'block'
        });
    }
    });

    $('#topBtn').click(function(){
        $('body, html').animate({
            scrollTop : 0,
        },1000);
    });
});