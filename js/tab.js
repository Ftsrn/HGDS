//【准备工作】
var banner = document.querySelector('#banner'); // 轮播区
var list = document.querySelector('#list'); // 整体轮播项ul
var btnLeft = document.querySelector('#btnLeft'); // 左侧按钮
var btnRight = document.querySelector('#btnRight'); // 右侧按钮
var links = document.querySelectorAll('.control a'); // 一组小点按钮
var control = document.querySelector('.control');  // 一组小点按钮父元素
var index = 0; // 标识当前显示的那个轮播项

// 【功能1：点击右侧按钮实现轮播】
// 1 给右侧按钮注册点击事件
btnRight.onclick = function () {
  // 1.0 判断是否是从第0项开始轮播，若是从第0项开始轮播，则先把ul的left值设置为0，再从0运动的-790
  if (index == 0) {
    list.style.left = 0 + 'px';
  }
  // console.log(links[index])
  // 1.1 先把更改之前的a恢复默认样式去掉active类名
  links[index].className = '';
  // 2 更改index ++
  index++;
  // 3 计算目标值
  if (index == 0) {
    var v = index ;
  }else {
    var v = index*-1640;
  }
  // 4 动画运动ul
  move(list, v);
  // 5.让++之后的下一项突出显示，增加类名active
  // 如果是倒数第一项，则设置index为0 （因为倒数第一项和第0项是一样的）
  if (index == 3) {
    index = 0;
  }
  links[index].className = 'active';
};


// 【功能3：点击小点按钮实现轮播】
// 1. 给每一个小点按钮添加一个属性num表示它在这一组中索引
for (var i = 0; i < links.length; i++) {
  links[i].num = i;
}
// 2. 给类名为control的div注册事件
control.onclick = function (e) {
  // 3. 通过事件对象的target获取最先触发的元素
  var t = e.target;
  // 4. 通过nodeName检测是否是A
  if (t.nodeName == 'A') {
    // 5. 若是A则开始操作轮播
    // 5.1 把index代表的之前的显示项对应的a去掉类名active
    links[index].className = '';
    // 5.2 改变index为当前点击的a元素的num属性
    index = t.num;
    console.log(index);
    // 5.3 计算目标值
     
    // 5.4 运动ul到达目标值
    if (index == 0) {
      var v = index ;
    }else {
      var v = index*-1640;
    }
    move(list, v);
    // 5.5 改变后的显示项对应的a要加上active类名
    links[index].className = 'active';
  }

};

// 【功能4：自动轮播】
var flag = setInterval(function () { 
  // 每间隔3秒调用一次右侧按钮的点击事件程序
  btnRight.onclick();
}, 3000);


// 【功能5：鼠标进入banner，停止轮播】
banner.onmouseenter = function () { 
  clearInterval(flag);
};

// 【功能6：鼠标离开banner，启动轮播】
banner.onmouseleave = function () {
  flag = setInterval(function () { 
    // 每间隔3秒调用一次右侧按钮的点击事件程序
    btnRight.onclick();
  }, 3000);
  
};
