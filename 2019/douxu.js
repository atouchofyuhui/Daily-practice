/**
 * 获取元素id 
 */
function my$(id) {
    return document.getElementById(id);
};

// /**匀速动画
//  * 设置任意元素，移动到指定位置 
//  */
// function animate(element, target) {
//     //不管按多少次按钮，先清理定时器(保证只产生一个定时器）
//     clearInterval(element.timeId);
//     //定时器的id存储到对象的一个属性中
//     element.timeId = setInterval(function () {
//         //获取元素的当前位置,数字类型
//         var current = element.offsetLeft;
//         //每次移动的距离
//         var step = 10;
//         //判断向前走还是向后走
//         step = current < target ? step : -step;
//         //移动到了的位置
//         current += step;
//         //如果当前移动到了的位置的绝对值大于每次移动的距离
//         if (Math.abs(current - target) > Math.abs(step)) {
//             element.style.left = current + "px";
//         } else {
//             //清理定时器
//             clearInterval(element.timeId);
//             //移动到的目标位置
//             element.style.left = target + "px";
//         }
//     }, 20)
// }

// /**
//  * //变速动画
//  * @param {*} element 
//  * @param {*} target 
//  */
// function animate(element, target) {
//     clearInterval(element.timeId);
//     element.timeId = setInterval(function () {
//         var current = element.offsetLeft;
//         var step = parseInt((target - current) / 10);
//         step = step > 0 ? Math.ceil(step) : Math.floor(step);
//         current += step;
//         // if (Math.abs(current - target) > Math.abs(step)) {
//         //     element.style.left = current + "px";
//         // } else {
//         //     element.style.left = target + "px";
//         // }
//         //当前位置
//         element.style.left = current + "px";
//         //当前位置到达目标位置时清除定时器
//         if (current == target) {
//             clearInterval(element.timeId);
//         }
//     }, 20)
// }

/**
 * 浏览器滚动事件
 * 获取元素向上向左滚动的距离的兼容代码
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

//返回任意一个元素的任意一个属性的值    attr为属性的名字
function getStyle(element, attr) {
    //先判断浏览器是否支持getComputedStyle这个属性,如果有这个属性则使用window.getCompytedStyle(element, null)[attr] //谷歌火狐支持，IE8不支持
    //否则使用element.currentStyle[attr]属性    //IE8支持，火狐谷歌不支持
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}


//变速动画函数 增加任意多个属性
function animate(element, json, fn) {
    //清楚定时器是为了保证只有一个定时器
    clearInterval(element.timeId);
    //设置定时器
    element.timeId = setInterval(function () {
        //先假设设定的各属性和值都到达了指定位置
        var flag = true;
        //遍历对象json中的属性和值
        for (var attr in json) {
            if (attr == "opacity") { //判断用户是否传入了opacity属性
                //获取当前透明度并放大一百倍方便计算
                var current = getStyle(element, attr) * 100;
                //目标透明度
                var target = json[attr] * 100;
                //每次变化的透明度
                var step = (target - current) / 10;
                //判断向前走还是向后走  如果是正的，则向上取整，如果是负数，则向下取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //判断是否到达了目标透明度,开始时增大100倍，现在缩小回100倍
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") { //判断用户是否传入了zIndex值
                //用户传入的zIndex值赋值当前
                element.style[attr] = json[attr];
            } else { //普通属性
                //获取当前位置  因为函数getStyle的返回值是字符串类型，所以转换整型
                var current = parseInt(getStyle(element, attr));
                //每次移动的距离
                var target = json[attr]
                var step = (target - current) / 10;
                //判断向前走还是向后走  如果是正的，则向上取整，如果是负数，则向下取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //判断是否到达了目标位置
                element.style[attr] = current + "px";
            }

            //如果没到目标值,清除定时器也不起作用，那么会再来一次定时器，再进入遍历对象
            if (current != target) {
                flag = false;
            }
        }
        //到达目标位置清除定时器
        if (flag) {
            clearInterval(element.timeId);
            //判断是否有这个回调函数,
            if (fn) {
                //有则执行这个回调函数
                fn();
            }
        };
        //测试代码
        console.log("当前位置" + current + "，目标位置" + target + "，每次移动的距离" + step);
    }, 20)
}