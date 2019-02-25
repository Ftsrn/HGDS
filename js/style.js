$(function () {
    $('.hover').hover(function () {
        // over
        $('.banner_two').show(400);
    }, function () {
        // out
        $('.banner_two').hide(200);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            $('.nav').hide();
        } else {
            $('.nav').show();
        }
    });
    $('.nav_one').click(function () {
        $('html,body')
            .stop()
            .animate({
                scrollTop: 0
            }, 400);
    });

   // 鼠标经过，显示左右箭头
   $('#box').hover(function () {
    $('#arr').show();
    // 停止自动轮播
    $('.lunbo').jcarouselAutoscroll('stop');
  }, function () {
    $('#arr').hide();
    // 开始自动轮播
    $('.lunbo').jcarouselAutoscroll('start');
  });

  // 实现轮播图的功能
  $('.lunbo').jcarousel({
    wrap: 'circular'
  })
  .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });

  // 点击上一张
  $('#left')
      .jcarouselControl({
          target: '-=1'
      });

  // 下一张
  $('#right')
      .jcarouselControl({
          target: '+=1'
      });

    // hover
    $('.dangaohe>div>a').hover(function () {
        // over
        $(this).find('.imgb').show();
    }, function () {
        // out
        $(this).find('.imgb').hide();
    });

    // 手风琴
    var $list = $('.shutter>li');
    $list.mouseover(function () {

        $(this)
            .stop()
            .animate({
                width: 349
            }, 300)
            .siblings()
            .stop()
            .animate({
                width: 210,
            }, 300);
        var index = $(this).index();

        $('.shutte_two')
            .children()
            .eq(index)
            .stop()
            .animate({
                width: 349
            }, 300)
            .siblings()
            .stop()
            .animate({
                width: 210
            }, 300);



    });
    $('.shutter').mouseout(function () {
        $list
            .stop()
            .animate({
                width: 244
            }, 300);

        $('.shutte_two')
            .children()
            .stop()
            .animate({
                width: 244
            }, 300);

    });

});