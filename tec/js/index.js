/**
 * Created by bigding on 2016/10/26.
 */
$(function(){
    var window_width=$(window).width();
    var window_height=$(window).height();
    console.log(window_width+"\n"+window_height)
    /*���ñ���ͼƬ�ĸ߶ȺͿ��*/
    var $top_image = $("#top_image1");
    $top_image.height(window_height).width(window_width);
    $(".top_image_div ").height(window_height);
})