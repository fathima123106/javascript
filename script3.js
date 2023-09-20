var second_content="this is fathima"
 var newone=document.getElementById("new_content");
 newone.innerHTML=second_content


/*--------------------LOOPS------------------ */

let i=1
console.log("example for 'for'")
for(i;i<=10;i++){
    console.log(i)
}

let arr=["apple",1,null,undefined]
for(k in arr){
    console.log(arr[k])
}
let a=2;
let b=5

do{
    console.log('from do while');
    a++
}while(a<b)

/*
a++
++a
a--
--a
*/
b=a++//post increment
console.log(a)
console.log(b)

let x=100;
let y=200;
y=++x;//pre increment
console.log(y)

arr.forEach(function(value,index){
    console.log("value",value);
    console.log("index",index)
})

let arr1=[{name:"ram",age:1},{name:"mohan",age:20}]
arr1.forEach(function(value,index){
    console.log("value",value);
    console.log("index",index)
})


/*----------------------BREAK & CONTINUE-------------------- */


for(let n=1;n<6;n++){
    if(i==3){
        console.log("this is a code of block");
        continue
    }if(i==5){
        break;
    }
    console.log("iii :",i)
}


/*---------------------------FUNCTION------------------------ */
// hoisting (we can use functions and variables before declaration line egs isgiven below)
myfun(10,20)//argument(hoisting) 


function myfun(a,b)//parameter
{
    console.log(a,'+',b,'=',a+b);
}
myfun(10,20)//argument


/*-----------------call by value------------------ */


let s;
s=20;
let p;
p=s;
s=25;
console.log("s ;",s,"p:",p);
/* -------------------------call by reference----------------------------- */

let objt={
    car: "sumo",
    owner: "ramu",
    age: 25,
  }
let objt1=objt;
objt.car="bmw"

console.log("objt;",objt,"objt1",objt1);


console.log("in function")

let n 
let m


function myfunction( n, m){
    console.log("s ;",n,"p:",m);
   
}
myfunction(s,p);
function myfunctions(n1,m1){
    console.log("objt;",n1,"objt1",m1);
    
 }

myfunctions(objt,objt1)


/*-----------------------closure--------------------- */

function myFunctionOuter(){
    let a=10;
    function myFuctionInner(){
        function myFunctionInner1(){
            return a;
        }
        return myFunctionInner1
    }
    return myFuctionInner
}
 var myfuctioncall=myFunctionOuter();
 console.log("myFunction :",myfuctioncall)
 console.log("myFunctionOuter call :",myfuctioncall());
 console.log("final call :",myfuctioncall()())



 /*-------------------SET INTERVEL------------------------ */

//  setInterval(function my(){
//     console.log("*")
//  },1000)

// setTimeout(function my(){
//     alert("5 seconds later")
// },5000)
//  let I=1
// setInterval(function hi(){
//     document.write(I++,"*")
// },1000)

/*---------------------------------12hr format time--------------------------- */

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


/* callback function= a function is its self a parameter of another  function
anonymus fuction= function without name eg:- function(){
    code-block
}  
arrow function eg:- =>
*/

/*---------------spread opeator----------------- */

var objs1={a:1, b:2,c:3};
var obj21={...objs1}
console.log(objs1)
console.log(obj21)
 
var obj={k:"manu", age:30}
var objj={...obj}
console.log(obj)
console.log(objj)

var objs={a:1, b:2,c:3};
var obj2 ={d:5,...objs}
console.log(objs)
console.log(obj2)

var arra=[1,2,3,4]
var arr2=["hi",...arra]
console.log(arra)
console.log(arr2)
 
var A=[100,600,900,500]
console.log("the highest value",Math.max(...A))

//this property do creating a copy of another (...)


/*-----------------------Destructuring--------------- */

var obje={Name:"appu",age:12,clas:10};
var{Name,age,clas}=obje;
console.log(Name,age,clas);

var ob={nam:"gulmohar",place :"kollam"}
var{nam,place}=ob
console.log(nam,place)

var ar=[2,4,6,7,9];
var [l,r,z]=ar;
console.log(l,r,z)

function myfu([l,r,z]){
    console.log(l,r,z)
}
myfu(ar)

function fun({Name,age}){
    console.log(Name,age)
}
fun(obje)


// let N, S, rest;
// [a, b] = [10, 20];

// console.log(a);var obbje={a:1,b:2,c:function(){console.log("hi")}};
// obje.c()


// var obbje1={a:1,b:2,d:function(){console.log(this)}};
// obbje1.d()


// var obbje2={a:1,b:2,c:function(){console.log(this)}};
// var aa=obbje2.c;
// aa()

// var obbje3={a:1,b:2,c:()=>{console.log(this)}};
// obbje3.c()
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// Expected output: Array [30, 40, 50]

//it means break down a complex structure into simple parts
//Efficient way to extract multiple vlaues  from the data that is stored in arrays or objects

/*-------------NESTED DESTRUCTURING--------------------*/


//object inside object
var obb={Name:"appu",age:15,Class:10,subject:{teacher:"ram",subj:"maths"}};
var{Name,age,Class,subject:{teacher,subj}}=obb
console.log(Name,age,Class,teacher,subj)


//object inside array
var ar1=[1,4,8,{Name:"mohan",age:20}];
var[P,O,Q,{Name,age}]=ar1
console.log(P,O,Q,Name,age)


//array inside array
var ar2=[1,2,3,[4,5,6]];
var[A,B,C,[P,Q,R]]=ar2;
console.log(A,B,C,P,Q,R)


//array inside object
var obbj={Name:"hari",age:30,ary:[40,50]};
var{Name,age,ary:[L,M]}=obbj
console.log(Name,age,L,M)


var obbj=[1,3,4,{names:"dilu",age:20,marks:[20,40,80]}]
var[W,d,g,{names,age,marks:[U,w,z]}]=obbj
console.log(W,d,g,names,age,U,w,z)

var obb1={stu:"mohan",div:5,marks:[23,33,45,{sub1:"maths",sub2:"phy",sub3:"eng"}]}
var{stu,div,marks:[Q,W,E,{sub1,sub2,sub3}]}=obb1
console.log("name :",stu,",","class :",div,",","marks :",Q,W,E,",","subject :",sub1,sub2,sub3)




/*------------------------ARRAY FUNCTIONS-------------------------- */




var arry=[{
    Name:"mohan",
    mark:45,
    place:"malappuram"
},
{
    Name:"Anil",
    mark:50,
    place:"Eranamkulam"
},{
    Name:"Evin",
    mark:48,
    place:"Alapuzha"
},{
    Name:"Akhil",
    mark:40,
    place:"Kollam"
}]

//FOREACH

arry.forEach((i,index)=>{
    console.log(i.Name);

})

//find

const X= arry.find((i)=>{
    return i.Name==="Anil";
})
console.log(X)

//FILTER

const Y=arry.filter((it,index)=>{
    return it.mark<48;
})
console.log(Y);

//MAP

const va=arry.map((i)=>{obje.c()


    // var obbje1={a:1,b:2,d:function(){console.log(this)}};
    // obbje1.d()
    
    
    // var obbje2={a:1,b:2,c:function(){console.log(this)}};
    // var aa=obbje2.c;
    // aa()
    
    // var obbje3={a:1,b:2,c:()=>{console.log(this)}};
    // obbje3.c()
    return i.place;
})
console.log(va);

//reduce 

const summation=arry.reduce((total,i)=>{
    return total+i.mark;
},0);
console.log("Total sum of all marks",summation)

//here value of total is initialized with zero
//if we skip zero here the first value of an array will be stored as the initial value of total hence the summation will be deficult to continue with a boject summed with an integer 


/*--------------------------------THIS KEYWORD---------------------*/


var obbje={a:1,b:2,c:function(){console.log("hi")}};
obbje.c()


var obbje1={a:1,b:2,d:function(){console.log(this)}};
obbje1.d()


var obbje2={a:1,b:2,c:function(){console.log(this)}};
let aa=obbje2.c;
aa()

var obbje3={a:1,b:2,c:()=>{console.log(this)}};
obbje3.c()