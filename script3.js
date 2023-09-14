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