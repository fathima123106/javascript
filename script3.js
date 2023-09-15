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
 console.log("myFunctionOuter call :",myfuctioncall());
 console.log("final call :",myfuctioncall()())