;$(function(){
    'use strict'

    let slideBar = $(".slideBar"),
        mask = $(".mask"),
        showSlideBar = $(".showSlideBar"),
        backToTop = $(".back-to-top");
    
    function showBar() {
        mask.fadeIn(); //显示遮罩区
        slideBar.css('right', 0);
    }

    function hideBar() {
        mask.fadeOut();
        slideBar.css('right', - slideBar.width())
    }

    function backTop() {
        $('html,body').animate({
            scrollTop: 0
        },800);
    }

    $(window).on('scroll', function () {
       if ($(window).scrollTop() > $(window).height())
           backToTop.fadeIn();
       else
           backToTop.fadeOut();
    });
    //模拟页面滚动事件
    $(window).trigger('scroll');

    showSlideBar.on('click', showBar);//点击更多显示slide
    mask.on('click', hideBar);//点击遮罩层隐藏slide
    backToTop.on('click', backTop);//返回顶部事件

});