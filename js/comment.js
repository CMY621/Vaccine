$(function () {

    $('.sc').each(function (){
        var onOff = true;

        $(this).click(function(){
            if(onOff){
                $(this).css('color','#0054AA')
            }else{
                $(this).css('color','#6b6b6b')
            }
            onOff = !onOff;
        });
    });

    $('.zan').each(function (){
        var onOff = true;

        $(this).click(function(){
            if(onOff){
                $(this).css('color','#0054AA')
            }else{
                $(this).css('color','#6b6b6b')
            }
            onOff = !onOff;
        });
    });



    //隐藏所有的子标题区
    $(".operate").each(function () {
        $(this).children(".comment").hide();
    });

    $(".btn_com").each(function (){
        

        $(this).click(function(){
            //查找子标题
            var navEle = $(this).parents(".operate").children(".comment");
            //收起展开
            if(navEle.css("display")!= "none"){
                //收起
                navEle.slideUp(600);
                $(this).css('color','#6b6b6b')
            }else{
                //向下展开
                navEle.slideDown(600);
                $(this).css('color','#0054AA')
            }

        });

    });




});








