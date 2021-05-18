$(function () {

    //隐藏所有的子标题区
    $(".nav-menu").each(function () {
        $(this).children(".nav-content").hide();
    });


    //给所有主标题添加单击事件
    $(".nav-title").each(function (){
        $(this).click(function(){
            //查找子标题
            var navEle = $(this).parents(".nav-menu").children(".nav-content");
            console.log(navEle)
            //收起展开
            if(navEle.css("display")!= "none"){
                //收起
                navEle.slideUp(600);
            }else{
                //向下展开
                navEle.slideDown(600);
            }

            //查找箭头
            var navI = $(this).children("a").children(".fa-chevron-up");
            
            //旋转
            if(navI.hasClass("rotate")){
                navI.removeClass("rotate").addClass("rotate1");
            
            }else{
                navI.removeClass("rotate1").addClass("rotate");
        
            }

        });

    });

    //文字点击效果
    $(".nav-content").children('a').click(function(){
        $(this).addClass("white");
        $(this).siblings().removeClass("white");
        $(this).parent().parent().siblings().children(".nav-content").children().removeClass("white");
    });


    

});