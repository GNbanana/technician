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

        /*ˢ��픲���Ч��*/
        flashTopCover();                //����Ļ�ֱ��ʵ���ˢ�¶�����Ч��

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
    /*��굥������Ա�б�Ķ���*/
    $(".list_content_info").click(function () {
        $(".full_screen_techinfo").css("display", "block").animate({opacity: "1"}, 500)/*����ȫ���ĳ���*/
            .delay(500)
            .find("img").animate({left: "0"}, 500).end();
        /*ȫ����ߵ�ͼƬ��������*/
        /*�Ҳ�����ֻ������»�Ч��*/
        $(".full_screen_tech_info p,.full_screen_teacher span").animate({top: "0px"}, 500);
        $(".full_screen_mote span").animate({bottom: "0px"}, 500);
        /*ȫ�����Ϸ��˳���ť�ĳ���Ч��*/
        $('.close_full_screen div:nth-child(1)').animate({width: "70px"}, 500);
        $('.close_full_screen div:nth-child(2)').delay(200).animate({height: "70px"}, 500);
    });
    /*ȫ���������ϽǾ��˳�ȫ��*/
    $(".close_full_screen").click(function () {
        $(".full_screen_techinfo").animate({opacity: "0"}, 500, function () {
            $(this).css("display", "none");
        })
        /**/
        $('.close_full_screen div:nth-child(1)').animate({width: "0px"}, 500);
        $('.close_full_screen div:nth-child(2)').animate({height: "0px"}, 500);
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
    $(".list_content_inner").width(row_list_number * technician_width);

};
/*����б����Ҳ������»����ĺ���.status��ʾ���ϻ����������»���*/
function technicianListScroll(status) {
    /**/
}