/**
 * Created by lenovo on 2018/10/29.
 */
function saveStorge(id){
    var target=document.getElementById(id);
    var str=target.value;
//    临时保存
    sessionStorage.setItem('message',str);
//    永久保存
    localStorage.setItem('mes',str);
}

function loadStorge(id){
    var target=document.getElementById(id);
//    临时读取
    var msg=sessionStorage.getItem('message');
//    永久读取
    msg=localStorage.getItem('mes')
    target.innerHTML=msg;
}

//example
function save(){
    var target=document.getElementById('demo').value;
    var date=new Date();
    var time=date.getTime();
    localStorage.setItem(time.toString(),target);
    load();
}
function clearstorge(){
    localStorage.clear();
    load();
}
function load() {
    var str="<table border='1px'>";
    for(var i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        var date=timestampToTime(key);
        str+="<tr>";
        str+="<td>"+(i+1)+"</td>";
        str+="<td>"+date+"</td>";
        str+="<td>"+localStorage.getItem(key)+"</td>";
        str+="</tr>";
    }
    str+="</table>";
    document.getElementById("shuju").innerHTML=str;
}
function timestampToTime(nS) {
    return new Date(parseInt(nS.substring(0,10)) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}