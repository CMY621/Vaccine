$(function () {
    $(".window").hide();
    $(".change").hide();

    //添加信息
    $(".btn-add").click(function(){
        $(".window").css('display',"block");
    });

    $(".cancle1").click(function(){
        $(".window").css('display',"none");
    });

    $(".confirm1").click(function(){
        $(".window").css('display',"none");
    });


    //点击修改
    $(".fa-pencil-square-o").each(function (){

        $(this).click(function(){
            $(".change").css('display',"block");
        });
    
        

    });


    $(".cancle2").click(function(){
        $(".change").css('display',"none");
    });

    $(".confirm2").click(function(){
        $(".change").css('display',"none");
    });

    $("tr").first().nextAll().mouseover(function(){
        $(this).addClass("tr_bg");

    }).mouseout(function(){
        $(this).removeClass("tr_bg");
    });

});