/**
 * Created by Administrator on 2016/9/13.
 */

var currClientWidth, fontValue,originWidth;
//originWidth用来设置设计稿原型的屏幕宽度（这里是以 Iphone 5为原型的设计稿）
originWidth=320;
__resize();

//注册 resize事件
window.addEventListener('resize', __resize, false);

function __resize() {

    currClientWidth = document.documentElement.clientWidth;
    //这里是设置屏幕的最大和最小值时候给一个默认值
    if (currClientWidth > 640) currClientWidth = 640;
    if (currClientWidth < 320) currClientWidth = 320;

    fontValue = ( currClientWidth *100/originWidth).toFixed(2);
    document.documentElement.style.fontSize = fontValue +'px';

}
