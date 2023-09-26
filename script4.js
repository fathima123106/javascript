// function putZero(sec){
//     return sec<10?"0"+sec:sec; 
//  }
 
//  function show(){
//      var time=document.getElementById("time")
//      var dt=new Date();
//      var hours=dt.getHours();
//      var ampm=hours>12?"pm":"am";
//      time.innerHTML=putZero(hours%12)+":"+putZero(dt.getMinutes())+":"+putZero(dt.getSeconds())+ampm;
//      setTimeout(()=>{
//          show();
 
//      },1000);
//  }
//  show();




//  var obbje={a:1,b:2,c:function(){console.log("hi")}};
// obbje.c()


// var obbje1={a:1,b:2,d:function(){console.log(this)}};
// obbje1.d()


// var obbje2={a:1,b:2,c:function(){console.log(this)}};
// var aa=obbje2.c;
// aa()

// var obbje3={a:1,b:2,c:()=>{console.log(this)}};
// obbje3.c()

let row=5;
let col=5;

for(let i=1;i<row;i++){
    let star="";
    col--
    for(let j=0;j<=col;j++){
        star +=" ";
    } 
    for(let m=1;m<i*2;m++){
        star +=m;
    }
    console.log(star);
}


/*----------------------------CALL,APPLY,BIND-------------------------- */

// obj={Name:"fathi",age:34,place:"mAL"}
// function myfun(mark1,mark2){
//     console.log("Name:",this.Name,"age",this.age,"mark1 :",mark1,"mark2 :",mark2)
// }
// myfun.call(obj)
// myfun.call(obj,23,100)
// myfun.apply(obj)
// myfun.apply(obj,[23,100])
//let result= myfun.bind(obj);
//console.log("result",result) //it returs entire function
//result()  //Name: fathi age 34 mark1 : undefined mark2 : undefined
//result(23,50) //Name: fathi age 34 mark1 : 23 mark2 : 50

/*-----------------pattern printing--------------- */
// let row=5
// let col=5
// for (let i=0;i<row;i++){
//     let star=''
//     for(let j=0;j<col;j++){
//         star+="*"
//     }
//     console.log(star)
// } 
/*
    *****
    *****
    *****
    *****
    *****
*/

// let row1=5
// let col1=0
// for (let i=0;i<row1;i++){
//     let star=''
//     col1++
//     for(let j=0;j<col1;j++){
//         star+="*"
//     }
//     console.log(star)
// }
/*
 *
 **
 ***
 ****
 *****
*/

var Name ="manu";
var age =90;
  obj1={Name:"nila",
    age:40
}
 obj2={Name:"Ann",
    age:80
}
 obj={Name:"riya",
    age:20
}
getName={
    myFun:function(){
        console.log(this.Name)
    }
}
 x=getName.myFun;
 x.call(obj2)//setting the contest while calling

 y=getName.myFun.bind(obj);//setting the contest while creating