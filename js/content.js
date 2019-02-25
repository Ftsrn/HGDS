// 产品
(function () {
  $('.products a').mouseover(function () {
    $(this)

      .children('div')
      .stop()
      .slideDown(500);
  });
  $('.products li').mouseout(function () {
    $(this)
      .children()
      .children('div')
      .stop()
      .slideUp(500);
  });

  $('.products.second a').mouseover(function () {
    $(this)
      .children('div')
      .stop()
      .slideDown(500);
    $(this)
      .children('img')
      .attr({
        style: 'width:120%; height:130%;' +
          'margin-top:-20px; margin-left:-20px;'
      });
    $(this)
      .parent()
      .attr({
        style: 'overflow: hidden;'
      });
  });


  $('.second li').mouseout(function () {
    $(this)
      .children()
      .children('div')
      .stop()
      .slideUp(500);
    $('.products.second li')
      .children()
      .children('img')
      .attr({
        style: 'width:100%; height:100%;'
        // 'margin-top:0px; margin-left:0px;'
      });
    $('.products.second li')
      .removeAttr('style', 'overflow: hidden;')
  });

})();