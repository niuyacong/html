/**
 * Created by lenovo on 2018/10/27.
 */
function draw_rect(id){
    /*绘制长方形*/
    /*绘制步骤：
     1、获得canvas元素
     2、取得上下文
     3、填充并绘制边框
     a、填充（fill）填充是将图形内部填满
     b、绘制边框（stroke）绘制边框不是填充图形内部，只是绘制图像边框
     4、设置绘制的样式
     a、fillstyle属性 填充的样式，在这个属性里面设置填入的填充颜色值
     b、strokestyle属性 图形边框的样式，在这个属性里面填入边框的填充颜色
     5、指定画笔宽度
     通过上下文context的linewidth属性来设置图形边框的宽度，或直线宽度
     6、设置颜色值
     a、颜色名black
     b、16进制颜色值#000000
     c、rgb(0,0,0)
     d、rgba(0,0,0,0)
     7、绘制矩形
     context.fillRect(x,y,width,height)
     context.strokeRect(x,y,width,height)*/
    var canvas =document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="green";
    context.strokeStyle="#fff";
    context.lineWidth=5;
    context.fillRect(0,0,400,300);
    context.strokeRect(50,50,180,120);
    context.strokeRect(150,150,180,120)
}

/*绘制圆形*/
/*
    绘制步骤：
    1、使用图形上下文对象的beginpath方法
    2、context.arc(x,y,radius,starAngle,endAngle,anticlockwise)
        x,y起始xy坐标,redius圆的半径，starAngle开始角度，endAngle结束的角度，anticlockwise是否按顺时针角度绘制
    3、context.closepath()
    4、context.fillstyle='rgba(255,0,0,0.25)'
        context.fill()
*/
function draw_circle(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="#f1f2f3";
    context.fillRect(0,0,400,400);

    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(10+i*15,10+i*15,10+i*5,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle="rgba(255,0,0,0.25)";
        context.fill();
//      描边效果
        context.strokeStyle="#000";
        context.stroke();
    }
}

/*绘制文字*/
/*
    绘制步骤：
    maxwidth 宽度，指文字所占宽度，目的：防溢出
    1、filltext用填充的方式来绘制字符串context.fillText(test,xy,[maxwidth])
    2、stroketext用轮廓的方式来绘制字符串
        context.strokeText(text,x,y,[maxwidth])
    3、设置文字字体 context.font="font-weight font-size font-family"
        font-weight :normal正常400 bold粗体700 bolder更粗 lighter 更细
        100 200 300 400 500 600 700 800 900
    4、设置文字的垂直对齐方式
        context.textBaseline='alphabetic'
        top 顶部对齐  hanging 悬挂 middle 中间对齐 bottom 底部对齐
    5、设置文字的水平对齐方式
        context.textAlign="start"
        start end left right center
*/
function draw_font(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = 'green';
    context.fillRect(0,0,500,350);
    context.font="normal 40px '宋体','微软雅黑'";
    context.textBaseline="top";
//    context.textAlign="center";
    context.fillStyle='#fff';
    context.fillText('哈哈哈',0,0);
    context.strokeStyle="#fff";
    context.strokeText('哈哈哈',0,40);
//    保存图片
    window.location=canvas.toDataURL('image/png');
}


/*制作动画效果*/
var i=50;
function draw(id){
    var canvas=document.getElementById(id);
    context=canvas.getContext('2d');
    context.fillStyle="green";
    context.fillRect(0,0,500,500);
    setInterval(line,1);

}
function line(){
    if(i<450){
    context.fillStyle="red";
    context.fillRect(i,i,10,10);
    context.fillRect(450-i,i,10,10);
    i++;}
}