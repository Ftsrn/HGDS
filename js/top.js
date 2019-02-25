// 图片高亮显示
// 1.获取元素
$('.xline-heigth .light-box li').mouseenter(function() {
   $(this)
   .children('.cover')
   .css('opacity',0)
   .end()
   .siblings()
   .children('.cover')
   .css('opacity',0.5);
   
});
$('.xline-heigth .light-box').mouseleave(function() {
     $(this)
    .children('ul')
    .children('li')
    .children('.cover')
    .css('opacity',0);
 });

// 评价
var stone = '★';
var xu = '☆';
$('.x-assess li').hover(function() {
  // 1.当鼠标在li经过时鼠标之前的星星变为实星星，之后的星星不变
  $(this)
  .text(stone)//让当前的星星变成实心星星
   .prevAll() // 找到点击星星之前的星星
   .text(stone)//点击星星之前的星星变成空心星星
  .end()  //返回上一个改变对象之前
  .nextAll()
  .text(xu);
},function() {
   // 2.鼠标离开时，所有的星星全都变为空心星星
  //  $('li').text(xu);
  // 鼠标离开时是带有now之前的变为实心星星，点击星星之前的星星变成空心星星
  $('li.now')
  .text(stone)
  .prevAll()
  .text(stone);
});

// 3.点击li时，鼠标离开保持点击星星之前的星星为实心，之后为空心
$('.x-assess li').on('click',function() {
//   这里设置一个随便的一个类，用来标记点击的li
$(this)
.addClass('now')
.siblings()
.removeClass('now');
});