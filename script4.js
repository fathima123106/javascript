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