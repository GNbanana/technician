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
        console.log(window_width + "\t" + window_height);
        technicianListCenter();         //����Ļ�ֱ��ʸı�ʱ���ú���ʹ����Աҳ�����

        /*ˢ��?����Ч��*/
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
    });
    /*��굥������Ա�б�Ķ���*/
    $(".list_content_info").click(function () {
        var window_width = $(window).width();
        $(".full_screen_techinfo").css("display", "block").animate({opacity: "1"}, 500)/*����ȫ���ĳ���*/
            .delay(500)

        /*ȫ����ߵ�ͼƬ��������*/
        /*�Ҳ�����ֻ������»�Ч��*/
        if(window_width > 450){
            $(".full_screen_techinfo").find("img").animate({left: "0"}, 500).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "0px"}, 500);
            $(".full_screen_mote span").animate({bottom: "0px"}, 500);
            /*ȫ�����Ϸ��˳���ť�ĳ���Ч��*/
            var close_button_width = $(".close_full_screen").width();
            var close_animate_length = close_button_width * 1.414;//����Խ��ߵĳ��ȣ���������Ķ����п���
            $('.close_full_screen div:nth-child(1)').animate({width: close_animate_length}, 500);
            $('.close_full_screen div:nth-child(2)').delay(200).animate({height: close_animate_length}, 500);

        }
        else if(window_width <= 450){
            $(".full_screen_techinfo").find("img").animate({top: "0"}, 500).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").delay(400).animate({top:"0px",opacity:"1"},500);
            $(".full_screen_mote span").delay(400).animate({bottom:"5px",opacity:"1"},500);
            /*ȫ�����Ϸ��˳���ť�ĳ���Ч��*/
            var close_button_width = $(".close_full_screen").width();
            var close_animate_length = close_button_width * 1.414;//����Խ��ߵĳ��ȣ���������Ķ����п���
            $('.close_full_screen div:nth-child(1)').animate({width: close_animate_length}, 500);
            $('.close_full_screen div:nth-child(2)').delay(200).animate({height: close_animate_length}, 500);
        }
    });
    /*ȫ���������ϽǾ��˳�ȫ��*/
    $(".close_full_screen").click(function () {
        var window_width = $(window).width();
        $(".full_screen_techinfo").animate({opacity: "0"}, 500, function () {
            $(this).css("display", "none");
        })
        /**/
        $('.close_full_screen div:nth-child(1)').animate({width: "0px"}, 300);
        $('.close_full_screen div:nth-child(2)').animate({height: "0px"}, 300);

        if(window_width > 450){
            $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "3px"}, 300);
            $(".full_screen_mote span").animate({bottom: "3px"}, 300);
            $(".full_screen_techinfo").find("img").animate({left: "-100%"}, 300);
        }
        else if(window_width <= 450){
            $(".full_screen_techinfo").find("img").animate({top: "-100px"}, 300).end();
            $(".full_screen_tech_info p,.full_screen_teacher span").animate({top:"6px",opacity:"0"},300);
            $(".full_screen_mote span").animate({bottom:"-2px",opacity:"0"},300);
        }

    })
    /*��������escʱ�˳�ȫ��*/
    $(window).keydown(function (e) {
        if (e.keyCode === 27)
            $(".close_full_screen").trigger("click");
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
    if($(window).width() >= 433){
        $(".list_content_inner").width(row_list_number * technician_width);
    }
    else{
        $(".list_content_inner").width("100%");
    }


};
/*����б����Ҳ������»����ĺ���.status��ʾ���ϻ����������»���*/
function technicianListScroll(status) {
    /**/
}
