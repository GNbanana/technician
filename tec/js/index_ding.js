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
        // console.log(window_width + "\t" + window_height);
        technicianListCenter();         //在屏幕分辨率改变时调用函数使技术员页面居中

        /*刷新顶部的效果*/
        flashTopCover();                //在屏幕分辨率调试刷新顶部的效果

        if (window_width > 700) {
            $("#top_image1").attr("src", "images/Header_image_1_for_pc.jpg");
            $top_image.height(window_width * (1025 / 2080));
        }
        if (window_width <= 700 && window_width > 450) {
            $("#top_image1").attr("src", "images/Header_image_1_for_pad.jpg");
            $top_image.height(window_width * (1175 / 2048));
        }
        if (window_width <= 450) {
            $("#top_image1").attr("src", "images/Header_image_1_for_phone.jpg");
            $top_image.height(window_width * (2208 / 1242));
        }

        var top_image_height = $top_image.height();
        $(".top_image_div ").height(top_image_height);

        /*调整技术员列表直接顶部对齐上端*/
        $(".list_content_inner").animate({"top": "0px"}, 1500, "swing");
    });
    /*鼠标单击技术员列表的动画*/
    $(".list_content_info").click(function () {
        var window_width = $(window).width();
        dataid = $(this).attr("dataid");
        $.getJSON("techInfo.json", function (data) {
            $full_screen_tec = $(".full_screen_content")
            $.each(data, function (index, info) {
                if (info["id"] == dataid) {
                    if (window_width > 450)
                        image_path = "images/" + info["image2"];
                    else
                        image_path = "images/" + info["image3"];
                    $full_screen_tec.find("img").attr("src", image_path).end()
                        .find(".full_screen_tech_info p:nth-child(1)").html(info["name"]).end()
                        .find(".full_screen_tech_info p:nth-child(2)").html(info["grade"]).end()
                        .find(".full_screen_mote span").html(info["mote"]).end()
                        .find(".full_screen_teacher span:nth-child(2)").html(info["teacher"]);
                    return false;
                }
            })

        })
        $(".full_screen_techinfo").css("display", "block").animate({opacity: "1"}, 500)/*控制全屏的出现*/
            .delay(500)

        /*全屏左边的图片缓慢划出*/
        /*右侧的文字缓慢的下滑效果*/
        if (window_width > 450) {
            $(".full_screen_techinfo").find("img").animate({left: "0"}, 500).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "0px"}, 500);
            $(".full_screen_mote span").animate({bottom: "0px"}, 500);
            /*全屏右上方退出按钮的出现效果*/
            var close_button_width = $(".close_full_screen").width();
            var close_animate_length = close_button_width * 1.414;//计算对角线的长度，并在下面的动画中控制
            $('.close_full_screen div:nth-child(1)').animate({width: close_animate_length}, 500);
            $('.close_full_screen div:nth-child(2)').delay(200).animate({height: close_animate_length}, 500);

        }
        else if (window_width <= 450) {
            $(".full_screen_techinfo").find("img").animate({top: "0"}, 500).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").delay(400).animate({top: "0px", opacity: "1"}, 500);
            $(".full_screen_mote span").delay(400).animate({bottom: "5px", opacity: "1"}, 500);
            /*全屏右上方退出按钮的出现效果*/
            var close_button_width = $(".close_full_screen").width();
            var close_animate_length = close_button_width * 1.414;//计算对角线的长度，并在下面的动画中控制
            $('.close_full_screen div:nth-child(1)').animate({width: close_animate_length}, 500);
            $('.close_full_screen div:nth-child(2)').delay(200).animate({height: close_animate_length}, 500);
        }
    });

    /*当输入框获取焦点时输入框变长*/
    $(".search_box input").bind("focus",function () {
        $(this).animate({top:"3px",height:"41px",width:"300px","border-radius":"40px"},300);
    })
    /*当输入框失去焦点时输入框复原*/
    $(".search_box input").bind("blur",function () {
        $(this).animate({top:"0px",height:"45px",width:"265px","border-radius":"15px"},300);
    })
    /*在搜索框中查找技术员*/
    $(".search_box input").keydown(function (event) {
        if (event.keyCode == 13) {
            console.log("hellsdfbsdo");
            input_value = $(this).val();
            if (input_value != "") {
                $("div:contains(" + input_value + ")").closest(".list_content_info").triggerHandler("click");
            }
        }
    })
    /*全屏后点击右上角就退出全屏*/
    $(".close_full_screen").click(function () {
        var window_width = $(window).width();
        $(".full_screen_techinfo").animate({opacity: "0"}, 500, function () {
            $(this).css("display", "none");
        })
        /**/
        $('.close_full_screen div:nth-child(1)').animate({width: "0px"}, 300);
        $('.close_full_screen div:nth-child(2)').animate({height: "0px"}, 300);

        if (window_width > 450) {
            $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "3px"}, 300);
            $(".full_screen_mote span").animate({bottom: "3px"}, 300);
            $(".full_screen_techinfo").find("img").animate({left: "-100%"}, 300);
        }
        else if (window_width <= 450) {
            $(".full_screen_techinfo").find("img").animate({top: "-100px"}, 300).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "6px", opacity: "0"}, 300);
            $(".full_screen_mote span").animate({bottom: "-2px", opacity: "0"}, 300);
        }

    })
    /*当按键盘esc时退出全屏*/
    $(window).keydown(function (e) {
        if (e.keyCode === 27)
            $(".close_full_screen").trigger("click");
    })
    /*点击列表左右的按钮来上下滚动列表*/
    /*向上滑*/
    $(".left_roll").click(function () {
        content_list_scroll(0);
    })
    /*向下滑*/
    $(".right_roll").click(function () {
        content_list_scroll(1);
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
    if ($(window).width() >= 433) {
        $(".list_content_inner").width(row_list_number * technician_width);
    }
    else {
        $(".list_content_inner").width("100%");
    }


};
/*点击列表左右部分上下滑动的函数.status表示往上滑动还是往下滑动*/
function content_list_scroll(status) {
    $list_content_info = $(".list_content_info");
    $list_content_inner = $(".list_content_inner");
    content_height = $list_content_info.height();  //单个技术员栏目所占的高度
    content_width = $list_content_info.width();     //单个技术员栏目所占的宽度
    content_margin = parseInt($list_content_info.css("margin"));    //技术员栏目的边框值
    content_total_height = content_height + content_margin * 2;  //一个技术员栏目所占的实际高度
    content_total_width = content_width + content_margin * 2;  //一个技术员栏目所占的实际高度
    content_list_num = $list_content_info.length;            //技术员栏目的总个数
    content_inner_top = parseInt($list_content_inner.css("top"));      //技术员栏目外部容器的顶部偏移量
    content_inner_width = $list_content_inner.width();  //技术员栏目外部容器的当前宽度
    content_row_num = Math.ceil(content_list_num * content_total_width / content_inner_width);
    content_row_current = Math.round(-content_inner_top / content_total_height);  //当前显示的是第几行
    if (status == 0) {
        if (!$list_content_inner.is(":animated")) {
            if (content_row_current == 0) {
            }
            else if (content_row_current == 1) {
                $list_content_inner.animate({top: "+=" + content_total_height}, 1000, "swing");
            }
            else {
                $list_content_inner.animate({top: "+=" + content_total_height * 2}, 1000, "swing");
            }
        }
    }
    if (status == 1) {
        if (!$list_content_inner.is(":animated")) {
            if (content_row_num - content_row_current <= 2) {

            }
            else if (content_row_num - content_row_current == 3) {
                $list_content_inner.animate({top: "-=" + content_total_height}, 1000, "swing");
            }
            else {
                $list_content_inner.animate({top: "-=" + content_total_height * 2}, 1000, "swing");
            }
        }
    }
}