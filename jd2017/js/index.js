/**
 * 2017.3.26 吴泽波个人作品;
 */
console.log("吴泽波个人作品 联系电话:15625212558 QQ:578042718");
/*城市*/
$(".admin-top-l").append(remote_ip_info.province);
/**/
$(".body-tab-1 ul li").on("click",function(){
    $(this).addClass("on").siblings().removeClass("on");
    var index = $(this).index();
    $(".body-tab-2 ul li").eq(index).show().siblings().hide();
});
/*关闭*/
$(".adver-1-close").on("click",function(){
    $(".adver").fadeOut();
});
/*左边菜单栏*/
$(".body-1-left-lm ul li").mouseenter(function(){
    var index =$(this).index();
    $(".body-1-right3-xf").show();
    $(".body-1-right3-xf ul li").eq(index).show().siblings().hide();
});
$(".body-1-right3-xf").mouseenter(function(){
    $(this).show();
});
$(".body-1-left-lm ul li,.body-1-right3-xf").mouseleave(function(){
    $(".body-1-right3-xf").hide();
});
/*轮播1*/
var mySwiper1 = new Swiper('.sw-2 .swiper-container',{
    pagination: '.sw-2 .pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true
});
$('.sw-2 .arrow-left').on('click', function(e){
    e.preventDefault();
    mySwiper1.swipePrev()
});
$('.sw-2 .arrow-right').on('click', function(e){
    e.preventDefault();
    mySwiper1.swipeNext()
});
/*轮播2*/
var mySwiper2 = new Swiper('.sw-3 .swiper-container',{
    pagination: '.sw-3 .pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true
});
$('.sw-3 .arrow-left').on('click', function(e){
    e.preventDefault();
    mySwiper2.swipePrev()
});
$('.sw-3 .arrow-right').on('click', function(e){
    e.preventDefault();
    mySwiper2.swipeNext()
});
/*tab*/
$(".body-3-03-word div").mouseenter(function () {
    var index =$(this).index();
    $(".body-3-03-word2 ul li").eq(index).show().siblings().hide();
});
/*鼠标动画效果*/
var shuliang = $(".body-5-bottom-l ul li").length;
for(var i =0; i<shuliang; i++){
    $(".body-5-bottom-l ul li").eq(i).mouseenter(function () {
        $(this).find(".body-5-bottom-l-img").stop(true,false).animate({
            left:"-10px"
        },30);
    });
    $(".body-5-bottom-l ul li").eq(i).mouseleave(function () {
        $(this).find(".body-5-bottom-l-img").stop(true,false).animate({
            left:"0px"
        },30);
    });
}
/*左边导航*/
$(window).scroll(function(){
    if($(window).scrollTop()>=900){
        $(".dh-left").fadeIn();
    }else {
        $(".dh-left").fadeOut();
    }
});
$(".dh-left ul li").on("click",function () {
    var index =$(this).index();
    $(".dh-left ul li").eq(index).addClass("on").siblings().removeClass("on");
});
function huadong(dw) {
    $('html,body').animate({scrollTop: dw+"px"}, 600);
}
/*右边导航*/
$(".dh-right-an").on("click",function () {
    if(!$(".dh-right").hasClass("on")){
        $(".dh-right").addClass("on");
        $(".dh-right").animate({right:"0"});
    }
    else {
        $(".dh-right").removeClass("on");
        $(".dh-right").animate({right:"-250px"});
    }
});
/*懒加载*/
$(function() {
    /*$("img.lazy").lazyload(
        placeholder:"images/loading.gif",
        effect:"fadeIn",
        failurelimit:10
    );*/
    $("img.lazy").lazyload({
        placeholder : "images/loading.gif",
        effect: "fadeIn"
    });
});