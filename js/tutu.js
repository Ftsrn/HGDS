$('.s1').animate({
    'left': 500
}, 5000).animate({
    'left': 50
}, 1000);
$('.s2').animate({
    'right': 500
}, 5000).animate({
    'right': 50
}, 1000);


setTimeout(function () {
   
// 中间大按钮控制
var ary = ['slide1', 'slide2', 'slide3'];
$('.arrow-right').click(function () {
    // 把最后一个li的类样式设置给第一个，后面的依次类推
    var last = ary.pop();
    ary.unshift(last);
    // 找到所有的li
    var $lis = $('#slideone > ul > li');
    var $ss = $('#slidetwo > ul > li');
    for (var i = 0; i < $lis.length; i++) {
        var li = $lis[i];
        var ss = $ss[i];
        li.className = ary[i];
        ss.className = ary[i];
    }
});
$('.arrow-left').click(function () {
    var first = ary.shift();
    ary.push(first);
    var $lis = $('#slideone > ul > li');
    var $ss = $('#slidetwo > ul > li');
    for (var i = 0; i < $lis.length; i++) {
        var li = $lis[i];
        var ss = $ss[i];
        li.className = ary[i];
        ss.className = ary[i];
    }
});

// 当进去盒子时，显示按钮
$('#slideone').mouseover(function () {
    $('.f-left').css('opacity', 1);
    $('.f-right').css('opacity', 1);
})
$('#slidetwo').mouseover(function () {
    $('.s-left').css('opacity', 1);
    $('.s-right').css('opacity', 1);
})
// 离开盒子时，隐藏按钮
$('#slideone').mouseout(function () {
    $('.f-left').css('opacity', 0);
    $('.f-right').css('opacity', 0);
})
$('#slidetwo').mouseout(function () {
    $('.s-left').css('opacity', 0);
    $('.s-right').css('opacity', 0);
})
// 给箭头注册点击事件（向右点）
var arr = ['slide1', 'slide2', 'slide3'];
$('.f-right').click(function () {
    // 把最后一个li的类样式设置给第一个，后面的依次类推
    var last = arr.pop();
    arr.unshift(last);
    // 找到所有的li
    var $lis = $('#slideone > ul > li');
    for (var i = 0; i < $lis.length; i++) {
        var li = $lis[i];
        li.className = arr[i];
    }
});
// 向左点
$('.f-left').click(function () {
    var first = arr.shift();
    arr.push(first);
    var $lis = $('#slideone > ul > li');
    for (var i = 0; i < $lis.length; i++) {
        var li = $lis[i];
        li.className = arr[i];
    }
});

// 另一个盒子
var arrs = ['slide1', 'slide2', 'slide3'];
$('.s-right').click(function () {
    // 把最后一个li的类样式设置给第一个，后面的依次类推
    var last = arrs.pop();
    arrs.unshift(last);
    // 找到所有的li
    var $ss = $('#slidetwo > ul > li');
    for (var i = 0; i < $ss.length; i++) {
        var ss = $ss[i];
        ss.className = arrs[i];
    }
});
// 向左点
$('.s-left').click(function () {
    var first = arrs.shift();
    arrs.push(first);
    var $ss = $('#slidetwo > ul > li');
    for (var i = 0; i < $ss.length; i++) {
        var ss = $ss[i];
        ss.className = arrs[i];
    }
});
// 定时器部分
var timer1 = setInterval(function () {
    $('.f-right').click();
}, 1000)
var timer2 = setInterval(function () {
    $('.s-left').click();
}, 1000)

// 实现移进和移出效果
$('#slideone').mouseover(function () {
    clearInterval(timer1);
})
$('#slidetwo').mouseover(function () {
    clearInterval(timer2);
})
$('#slideone').mouseleave(function () {
    timer1 = setInterval(function () {
        $('.f-right').click();
    }, 1000)
})
$('#slidetwo').mouseleave(function () {
    timer2 = setInterval(function () {
        $('.s-left').click();
    }, 1000)
})
$('.arrow-right').mouseover(function () {
    clearInterval(timer1);
    clearInterval(timer2);
});
$('.arrow-right').mouseleave(function () {
    timer1 = setInterval(function () {
        $('.f-right').click();
    }, 1000)
    timer2 = setInterval(function () {
        $('.s-left').click();
    }, 1000)
});
$('.arrow-left').mouseover(function () {
    clearInterval(timer1);
    clearInterval(timer2);
});
$('.arrow-left').mouseleave(function () {
    timer1 = setInterval(function () {
        $('.f-right').click();
    }, 1000)
    timer2 = setInterval(function () {
        $('.s-left').click();
    }, 1000)
});




}, 6000)
