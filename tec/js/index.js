/**
 * Created by bigding on 2016/10/26.
 */
$(function () {
    /*获取电脑屏幕的宽度和高度 */
    var window_width = $(window).width();
    var window_height = $(window).height();
    var $top_image = $("#top_image1");  //顶部置于底层的图片对象
    /*开启页面是就初始化顶部的图片*/
    if (window_width > 700) {
        $("#top_image1").attr("src", "images/Header_image_1_for_pc.jpg");
        $top_image.height(window_width * (1025 / 2080));
    }
    if (window_width <= 700 && window_width > 433) {
        $("#top_image1").attr("src", "images/Header_image_1_for_pad.jpg");
        $top_image.height(window_width * (1175 / 2048));
    }
    if (window_width <= 433) {
        $("#top_image1").attr("src", "images/Header_image_1_for_phone.jpg");
        $top_image.height(window_width * (2208 / 1242));
    }

    var top_image_height = $top_image.height();
    $(".top_image_div ").height(top_image_height);


    /*调用函数对技术员列表重新排版*/
    technicianListCenter();   //直接在dom加载完毕后调用函数使技术员页面居中
    $(window).resize(function () {
        var window_width = $(window).width();
        var window_height = $(window).height();
        console.log(window_width + "\t" + window_height);
        technicianListCenter();         //在屏幕分辨率改变时调用函数使技术员页面居中

        /*刷新頂部的效果*/
        flashTopCover();                //在屏幕分辨率调试刷新顶部的效果

        if (window_width > 700) {
            $("#top_image1").attr("src", "images/Header_image_1_for_pc.jpg");
            $top_image.height(window_width * (1025 / 2080));
        }
        if (window_width <= 700 && window_width > 433) {
            $("#top_image1").attr("src", "images/Header_image_1_for_pad.jpg");
            $top_image.height(window_width * (1175 / 2048));
        }
        if (window_width <= 433) {
            $("#top_image1").attr("src", "images/Header_image_1_for_phone.jpg");
            $top_image.height(window_width * (2208 / 1242));
        }

        var top_image_height = $top_image.height();
        $(".top_image_div ").height(top_image_height);
    });
    /*鼠标单击技术员列表的动画*/
    $(".list_content_info").click(function () {
        $(".full_screen_techinfo").css("display", "block").animate({opacity: "1"}, 500)/*控制全屏的出现*/
            .delay(500)
            .find("img").animate({left: "0"}, 500).end();
        /*全屏左边的图片缓慢划出*/
        /*右侧的文字缓慢的下滑效果*/
        $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "0px"}, 500);
        $(".full_screen_mote span").animate({bottom: "0px"}, 500);
        /*全屏右上方退出按钮的出现效果*/
        $('.close_full_screen div:nth-child(1)').animate({width: "70px"}, 500);
        $('.close_full_screen div:nth-child(2)').delay(200).animate({height: "70px"}, 500);
    });
    /*全屏后点击右上角就退出全屏*/
    $(".close_full_screen").click(function () {
        $(".full_screen_techinfo").animate({opacity: "0"}, 500, function () {
            $(this).css("display", "none");
        })
        /**/
        $('.close_full_screen div:nth-child(1)').animate({width: "0px"}, 500);
        $('.close_full_screen div:nth-child(2)').animate({height: "0px"}, 500);
    })
    /*当按键盘esc时退出全屏*/
    $(window).keydown(function (e) {
        if (e.keyCode === 27)
            $(".close_full_screen").trigger("click");
    })
})
/*改变屏幕大小时，重新刷新顶部的效果*/
function flashTopCover() {
    var $top_image = $("#top_image1");  //顶部置于底层的图片对象
    var top_image_height = $top_image.height();
    $(".top_image_div ").height(top_image_height);
}

/*调整技术员页面居中的函数*/
function technicianListCenter() {
    var $technician_list = $(".list_content_inner>div");
    var $technician_list_container = $(".list_content");
    var technician_width = $technician_list.width() + parseInt($technician_list.css("margin-left")) + parseInt($technician_list.css("margin-right"));//单个技术员部分所占据的宽度
    var technician_container_width = $technician_list_container.width();
    var row_list_number = Math.floor(technician_container_width / technician_width);
    $(".list_content_inner").width(row_list_number * technician_width);

};
/*点击列表左右部分上下滑动的函数.status表示往上滑动还是往下滑动*/
function technicianListScroll(status) {
    /**/
}