/**
 * Created by bigding on 2016/10/26.
 */
$(function () {
    /*��ȡ������Ļ�Ŀ�Ⱥ͸߶� */
    var window_width = $(window).width();
    var window_height = $(window).height();
    /*���ñ���ͼƬ�ĸ߶ȺͿ��*/
    /*�˴������ٴδ���*/
    var $top_image = $("#top_image1");  //�������ڵײ��ͼƬ
    $top_image.height(window_height).width(window_width);
    $(".top_image_div ").height(window_height);


    /*���ú����Լ���Ա�б������Ű�*/
    technicianListCenter();   //ֱ����dom������Ϻ���ú���ʹ����Աҳ�����
    $(window).resize(function () {    //����Ļ�ֱ��ʸı�ʱ���ú���ʹ����Աҳ�����
        technicianListCenter();
    });
    /*��굥������Ա�б�Ķ���*/
    $(".list_content_info").click(function () {
        //// ��ȫ����ͽ�ֹ��Ļ����
        //var scroll_top = $(window).scrollTop();
        //$(window).scroll(function () {
        //    $(window).scrollTop(scroll_top);
        //})

        /*����ƶ�������Ա�б��ϵĶ���*/
        //$(".list_content_info").hover(function () {
        //    $(this).stop(true)
        //        .children(".person_name").animate({top: "75px"}, "swing").end()
        //        .find("img").animate({top: "0px"}, "swing");
        //}, function () {
        //    $(this).stop(true)
        //        .children(".person_name").animate({top: "15px"}, "swing").end()
        //        .find("img").animate({top: "-105px"}, "swing");
        //});
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
    })
    /*��������escʱ�˳�ȫ��*/
    $(window).keydown(function (e) {
        if (e.keyCode === 27)
            $(".close_full_screen").trigger("click");
    })
})

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