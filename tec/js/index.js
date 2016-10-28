/**
 * Created by bigding on 2016/10/26.
 */
$(function () {
    /*获取电脑屏幕的宽度和高度 */
    var window_width = $(window).width();
    var window_height = $(window).height();
    /*设置背景图片的高度和宽度*/
    /*此处还需再次处理*/
    var $top_image = $("#top_image1");  //顶部置于底层的图片
    $top_image.height(window_height).width(window_width);
    $(".top_image_div ").height(window_height);


    /*调用函数对技术员列表重新排版*/
    technicianListCenter();   //直接在dom加载完毕后调用函数使技术员页面居中
    $(window).resize(function () {    //再屏幕分辨率改变时调用函数使技术员页面居中
        technicianListCenter();
    });
    /*鼠标移动到技术员列表上的动画*/
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

/*调整技术员页面居中的函数*/
function technicianListCenter(){
    var $technician_list = $(".list_content_inner>div");
    var $technician_list_container = $(".list_content");
    var technician_width = $technician_list.width()+parseInt($technician_list.css("margin-left"))+parseInt($technician_list.css("margin-right"));//单个技术员部分所占据的宽度
    var technician_container_width = $technician_list_container.width();
    var row_list_number = Math.floor(technician_container_width/technician_width);
    $(".list_content_inner").width(row_list_number*technician_width);
};
/*点击列表左右部分上下滑动的函数.status表示往上滑动还是往下滑动*/
function technicianListScroll(status){
    /**/
}