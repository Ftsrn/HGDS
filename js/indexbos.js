/**
 * Created by Lenovo on 2018/10/9.
 */
//开头大图定时显示
setInterval(function () {
    $('.bigImg').fadeOut();
}, 8000);
//开头大图的 -- 自动显示字
setInterval(function () {
    $('.bigImg li').eq(0).hide();
}, 2000);
setInterval(function () {
    $('.bigImg li').eq(1).hide();
}, 4000);
setInterval(function () {
    $('.bigImg li').eq(2).hide();
}, 6000);
setInterval(function () {
    $('.bigImg li').eq(3).hide();
}, 8000);
//顶部介绍盒子 -- 高亮显示
$('.box li').hover(function () {
    //鼠标进入
    $(this).css('opacity', 1).siblings().css('opacity', 0.5);
    $('.box_ten_img li:eq(11)').css('opacity', 1);
}, function () {
    //鼠标离开
    $('.box li').css('opacity', 0.5);
    $('.box li:eq(10)').css('opacity', 1);
    $('.box_ten_img li:eq(11)').css('opacity', 1);

});
//给第盒子设置点击事件
$('.box .box_ten_img li').click(function () {
    var index = $(this).index();
    $('.box_img_content li:eq(' + index + ')').stop().fadeToggle(1000);
});
$('.box_img_content li').click(function () {
    $(this).stop().fadeToggle(1000);
});
//返回顶部
$('.goToTop').click(function () {
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
});
//弹字,九秒后开始弹字
var time = setInterval(function(){
    var $word = $('.word'),
        $typedCursoe = $('.typed-cursor'),
        $inValue = $('#inValue'),
        timer = null;
    inputEveryOne();
    $('#btnSay').on('click', function () {
        var val = $inValue.val()
        inputEveryOne(val);
    });
    function inputEveryOne(val) {
        // 2、定义一个数组，把要显示的字符串切割成一个个字符保存在数组中
        var strArr = [];
        // 3、定义一个计数器，用来记录，每次拼接哪一个字符
        var strNum = 0;
        strArr = (val || '这是一个可爱的小组').split('');
        // 让闪烁的竖线显示
        $typedCursoe.show();
        clearInterval(timer)
        $word.text('');
        timer = setInterval(function () {
            // 当所有字符都显示了，要清除定时器
            if (strNum > strArr.length - 1) {
                clearInterval(timer);
                $typedCursoe.hide();
                return;
            }
            $word.text($word.text() + strArr[strNum])     //   ''+红
            strNum++;
        }, 200)
    }
    clearInterval(time);
},9000);

//底部轮播图
//左侧轮播图


var list_l_index = 0 ;
//左侧点击事件
$('.bottom_content .btn_lef').click(function() {
        $('.bot_con_left li').eq(list_l_index).fadeIn().siblings().fadeOut();
        $('.bot_con_right li').eq(list_l_index).fadeIn().siblings().fadeOut();
        if (list_l_index < 5) {
            list_l_index++;
        }else {
           list_l_index = 0 ;
        }
});
 //右侧点击事件
$('.bottom_content .btn_rig').click(function() {
    $('.bot_con_left li').eq(list_l_index).fadeIn().siblings().fadeOut();
    $('.bot_con_right li').eq(list_l_index).fadeIn().siblings().fadeOut();
    if (list_l_index < 0) {
        list_l_index = 4 ;
        list_l_index--;
    }else {
        list_l_index --;
    }

});




