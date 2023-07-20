$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 400 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').slideUp();
        }
    });

    $('.btn_ham').on('click', function () {
        $('.header .gnb').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoPlay: true,
    });

    $('.main_vi .arrows .up').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .down').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.banner_slide').slick({
        arrows: false,
        dots: true,
    });

    $('.banner_slide').on('init afterChange',function (){
        $(this).addClass('on');
    });

});