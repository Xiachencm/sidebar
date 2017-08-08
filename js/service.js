(function() {

    // 返回顶部按钮自动隐藏
    $(window).scroll(function(){
        if ($(window).scrollTop()>200){
            $('#goTop').fadeIn();
        }else if($(window).scrollTop()<200){
            $('#goTop').fadeOut();
        }
    });

    $('#goTop').click(function() {
        $("html, body").animate({scrollTop:0}, 200);
    });



    var music = document.getElementById("bgMusic");

    $("#audioBtn").click(function(){

        if(music.paused){
            music.play();
            $("#audioBtn").removeClass("pause").addClass("play");
        }else{
            music.pause();
            $("#audioBtn").removeClass("play").addClass("pause");
        }
    });

})();
