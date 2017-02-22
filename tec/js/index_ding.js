/**
 * Created by bigding on 2016/10/26.
 */
$(function () {
    /*��ȡ������Ļ�Ŀ�Ⱥ͸߶� */
    var window_width = $(window).width();
    var window_height = $(window).height();
    var $top_image = $("#top_image1");  //�������ڵײ��ͼƬ����
    /*����ҳ���Ǿͳ�ʼ��������ͼƬ*/
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


    /*���ú����Լ���Ա�б������Ű�*/
    technicianListCenter();   //ֱ����dom������Ϻ���ú���ʹ����Աҳ�����
    $(window).resize(function () {
        var window_width = $(window).width();
        var window_height = $(window).height();
        // console.log(window_width + "\t" + window_height);
        technicianListCenter();         //����Ļ�ֱ��ʸı�ʱ���ú���ʹ����Աҳ�����

        /*ˢ�¶�����Ч��*/
        flashTopCover();                //����Ļ�ֱ��ʵ���ˢ�¶�����Ч��

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

        /*��������Ա�б�ֱ�Ӷ��������϶�*/
        $(".list_content_inner").animate({"top": "0px"}, 1500, "swing");
    });
    /*��굥������Ա�б�Ķ���*/
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
        $(".full_screen_techinfo").css("display", "block").animate({opacity: "1"}, 500)/*����ȫ���ĳ���*/
            .delay(500)

        /*ȫ����ߵ�ͼƬ��������*/
        /*�Ҳ�����ֻ������»�Ч��*/
        if (window_width > 450) {
            $(".full_screen_techinfo").find("img").animate({left: "0"}, 500).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "0px"}, 500);
            $(".full_screen_mote span").animate({bottom: "0px"}, 500);
            /*ȫ�����Ϸ��˳���ť�ĳ���Ч��*/
            var close_button_width = $(".close_full_screen").width();
            var close_animate_length = close_button_width * 1.414;//����Խ��ߵĳ��ȣ���������Ķ����п���
            $('.close_full_screen div:nth-child(1)').animate({width: close_animate_length}, 500);
            $('.close_full_screen div:nth-child(2)').delay(200).animate({height: close_animate_length}, 500);

        }
        else if (window_width <= 450) {
            $(".full_screen_techinfo").find("img").animate({top: "0"}, 500).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").delay(400).animate({top: "0px", opacity: "1"}, 500);
            $(".full_screen_mote span").delay(400).animate({bottom: "5px", opacity: "1"}, 500);
            /*ȫ�����Ϸ��˳���ť�ĳ���Ч��*/
            var close_button_width = $(".close_full_screen").width();
            var close_animate_length = close_button_width * 1.414;//����Խ��ߵĳ��ȣ���������Ķ����п���
            $('.close_full_screen div:nth-child(1)').animate({width: close_animate_length}, 500);
            $('.close_full_screen div:nth-child(2)').delay(200).animate({height: close_animate_length}, 500);
        }
    });

    /*��������ȡ����ʱ�����䳤*/
    $(".search_box input").bind("focus",function () {
        $(this).animate({top:"3px",height:"41px",width:"300px","border-radius":"40px"},300);
    })
    /*�������ʧȥ����ʱ�����ԭ*/
    $(".search_box input").bind("blur",function () {
        $(this).animate({top:"0px",height:"45px",width:"265px","border-radius":"15px"},300);
    })
    /*���������в��Ҽ���Ա*/
    $(".search_box input").keydown(function (event) {
        if (event.keyCode == 13) {
            console.log("hellsdfbsdo");
            input_value = $(this).val();
            if (input_value != "") {
                $("div:contains(" + input_value + ")").closest(".list_content_info").triggerHandler("click");
            }
        }
    })
    /*ȫ���������ϽǾ��˳�ȫ��*/
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
    /*��������escʱ�˳�ȫ��*/
    $(window).keydown(function (e) {
        if (e.keyCode === 27)
            $(".close_full_screen").trigger("click");
    })
    /*����б����ҵİ�ť�����¹����б�*/
    /*���ϻ�*/
    $(".left_roll").click(function () {
        content_list_scroll(0);
    })
    /*���»�*/
    $(".right_roll").click(function () {
        content_list_scroll(1);
    })


})
/*�ı���Ļ��Сʱ������ˢ�¶�����Ч��*/
function flashTopCover() {
    var $top_image = $("#top_image1");  //�������ڵײ��ͼƬ����
    var top_image_height = $top_image.height();
    $(".top_image_div ").height(top_image_height);
}

/*��������Աҳ����еĺ���*/
function technicianListCenter() {
    var $technician_list = $(".list_content_inner>div");
    var $technician_list_container = $(".list_content");
    var technician_width = $technician_list.width() + parseInt($technician_list.css("margin-left")) + parseInt($technician_list.css("margin-right"));//��������Ա������ռ�ݵĿ��
    var technician_container_width = $technician_list_container.width();
    var row_list_number = Math.floor(technician_container_width / technician_width);
    if ($(window).width() >= 433) {
        $(".list_content_inner").width(row_list_number * technician_width);
    }
    else {
        $(".list_content_inner").width("100%");
    }


};
/*����б����Ҳ������»����ĺ���.status��ʾ���ϻ����������»���*/
function content_list_scroll(status) {
    $list_content_info = $(".list_content_info");
    $list_content_inner = $(".list_content_inner");
    content_height = $list_content_info.height();  //��������Ա��Ŀ��ռ�ĸ߶�
    content_width = $list_content_info.width();     //��������Ա��Ŀ��ռ�Ŀ��
    content_margin = parseInt($list_content_info.css("margin"));    //����Ա��Ŀ�ı߿�ֵ
    content_total_height = content_height + content_margin * 2;  //һ������Ա��Ŀ��ռ��ʵ�ʸ߶�
    content_total_width = content_width + content_margin * 2;  //һ������Ա��Ŀ��ռ��ʵ�ʸ߶�
    content_list_num = $list_content_info.length;            //����Ա��Ŀ���ܸ���
    content_inner_top = parseInt($list_content_inner.css("top"));      //����Ա��Ŀ�ⲿ�����Ķ���ƫ����
    content_inner_width = $list_content_inner.width();  //����Ա��Ŀ�ⲿ�����ĵ�ǰ���
    content_row_num = Math.ceil(content_list_num * content_total_width / content_inner_width);
    content_row_current = Math.round(-content_inner_top / content_total_height);  //��ǰ��ʾ���ǵڼ���
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