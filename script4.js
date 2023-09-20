function putZero(sec){
    return sec<10?"0"+sec:sec; 
 }
 
 function show(){
     var time=document.getElementById("time")
     var dt=new Date();
     var hours=dt.getHours();
     var ampm=hours>12?"pm":"am";
     time.innerHTML=putZero(hours%12)+":"+putZero(dt.getMinutes())+":"+putZero(dt.getSeconds())+ampm;
     setTimeout(()=>{
         show();
 
     },1000);
 }
 show();




 var obbje={a:1,b:2,c:function(){console.log("hi")}};
obbje.c()


var obbje1={a:1,b:2,d:function(){console.log(this)}};
obbje1.d()


var obbje2={a:1,b:2,c:function(){console.log(this)}};
var aa=obbje2.c;
aa()

var obbje3={a:1,b:2,c:()=>{console.log(this)}};
obbje3.c()