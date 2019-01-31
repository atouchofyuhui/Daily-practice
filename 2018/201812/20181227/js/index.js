window.onload = function () {
    //swiper  轮播图
    var mySwiper = new Swiper('.swiper-container', {
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // loop: true, //循环播放
        grabCursor: true, //鼠标放上去变小手
        speed: 500, //一张图片切换结束的时间 
        autoplay: {
            delay: 4000
        }, //自动播放速度       自动循环播放
    });
    //鼠标移出隐藏按钮，移入显示按钮
    mySwiper.el.onmouseover = function () {
        mySwiper.navigation.$nextEl.removeClass('hide');
        mySwiper.navigation.$prevEl.removeClass('hide');
    }
    mySwiper.el.onmouseout = function () {
        mySwiper.navigation.$nextEl.addClass('hide');
        mySwiper.navigation.$prevEl.addClass('hide');
    };

    // tab 栏
    $('#tabs a').mouseenter(function (e) {
        e.preventDefault();
        $('#tabs li').removeClass("current");
        $(this).parent().addClass("current");
        $("#content div").removeClass("show");
        $('#' + $(this).attr('title')).addClass('show');
    });
}