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
    /*����ƶ�������Ա�б��ϵĶ���*/
    $(".list_content_info").hover(function () {
        if(!$(this).children(".person_name").is(":animated")){
            $(this).children(".person_name").animate({top:"75px"},"swing");
            $(this).find("img").animate({top:"0px"},"swing");
        }
    }, function () {
        if(!$(this).children(".person_name").is(":animated")){
            $(this).children(".person_name").animate({top: "15px"}, "swing");
            $(this).find("img").animate({top:"-105px"},"swing");
        }
    });
})

/*��������Աҳ����еĺ���*/
function technicianListCenter(){
    var $technician_list = $(".list_content_inner>div");
    var $technician_list_container = $(".list_content");
    var technician_width = $technician_list.width()+parseInt($technician_list.css("margin-left"))+parseInt($technician_list.css("margin-right"));//��������Ա������ռ�ݵĿ��
    var technician_container_width = $technician_list_container.width();
    var row_list_number = Math.floor(technician_container_width/technician_width);
    $(".list_content_inner").width(row_list_number*technician_width);
};
/*����б����Ҳ������»����ĺ���.status��ʾ���ϻ����������»���*/
function technicianListScroll(status){
    /**/
}