/*------------------regular expressions--------------------*/

// const regex=/Cat/i
//const regex=/[cr]at/
//const regex=/[a-z 0-9]at/i

//i used for check avoid using case sensitive like  cat and Cat both are different in js by using i we can make them  same and [cr]at it will chech aither cat or rat and resturn the result  and also the same way a-z and 0-9  are ranges 

// const regex=/^hi/  //^ this symbol check whether the sthring starst with hi or not

// const regex=/hi$/  //$ it checks whether the string ends with hi or not 

// const regex=/hi$/m  // in this  m is check in multiple line otherwise it will consider as a single line 


// const regex=/hie?/ //? it will check whether hi or hie is present in the string it will look only the word infront of it  ie /hief?/ here this will check whether hie or hief is presnt or not

 // this will check whether hi or hies were present in  the string

 // const regex=/wat*/ //it will check either wa or wat or wat[a-z] is present in the string

// const regex=/wat+/ //it will check the word wat is present atleast one or not

// 
//const regex=/L{2}o$/i //it will check is o is ending after exactly 2 ls helllo it also true bcs before o there is 2 ls

//const regex=/L{2,4}o$/i // it checks is o comes only after exactly 2 to 4 ls 
/*------------------regular expressions--------------------*/

// const regex=/Cat/i
//const regex=/[cr]at/
//const regex=/[a-z 0-9]at/i

//i used for check avoid using case sensitive like  cat and Cat both are different in js by using i we can make them  same and [cr]at it will chech aither cat or rat and resturn the result  and also the same way a-z and 0-9  are ranges 

// const regex=/^hi/  //^ this symbol check whether the sthring starst with hi or not

// const regex=/hi$/  //$ it checks whether the string ends with hi or not 

// const regex=/hi$/m  // in this  m is check in multiple line otherwise it will consider as a single line 


// const regex=/hie?/ //? it will check whether hi or hie is present in the string it will look only the word infront of it  ie /hief?/ here this will check whether hie or hief is presnt or not

 // this will check whether hi or hies were present in  the string

 // const regex=/wat*/ //it will check either wa or wat or wat[a-z] is present in the string

// const regex=/wat+/ //it will check the word wat is present atleast one or not

// const regex=/hi.$/ //it chech whether 

// let str1="that cat eat a  wa meat  hi"
// let str2="hi emmy"
// let str3=`hi     
// my name is meera
// what is your name
// i am going
// `  //backtick`
// const res=regex.test(str1);
// console.log("result :",res)

//const regex=/heL{2}o$/i //it checks o comes after he and 2 ls other wise false  

//const regex=/heL{2,4}o$/i //it checks o comes after he and 2 to 4 ls other wise false 

//const regex=/heL{2,}o$/i //it checks o comes after he and minimum 2 ls and maximum infinite other wise false like hellllllllllllllllllllllllllllllllo it will be true and helo will be false

/*----------------------------- \-escape character--------------------------------*/


//const regex=/\d/i //if any digits are present or not

//const regex=/\D/i //if any single non-digits are present or not if present it return ture otherwise false

const regex=/\./ // /./ simply it returns true whatever comes in the string is we want to check whether . comes in a string we have to use/\./ it returns true only if . comes in a string same as \$ to check whwtwehr $ comes in a string or not

let str1="that cat eat a  wa meat  hi"
let str2="hi emmy hello"
let str3=`hi     
my name is meera
what is your name
i am going
`  //backtick`
const res=regex.test(str2);
console.log("result :",res)
