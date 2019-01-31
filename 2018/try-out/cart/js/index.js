$(function () {
    // 初始化
    $('#container').fullpage({
        // 设置背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#85d9ed", "blue", "yellow"],
        // 设置内容不垂直居中
        verticalCentered: false,
        // 设置指示器——屏幕右边的滚动小点
        navigation: true,
        afterLoad: function (link, index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index - 1).addClass('now');
        },
        // 离开某一个屏幕的时候触发
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 & nextIndex == 3) {
                // 从第二页到第三页
                $('.section').eq(index - 1).addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                /*当前是从第三页到第四页*/
                $('.section').eq(index - 1).addClass('leaved');
            }
        },
        // 点击更多切换下一页
        afterRender: function () {

            // 绑定more事件
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            // 当第四屏的购物车动画结束之后执行收货地址的动画
            $('.screen04 .cart').on('transitionend', function () {
                /*:last :frist :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
        }
    });
});