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

const regex=/hi.$/ //it chech whether 

let str1="that cat eat a  wa meat  hi"
let str2="hi emmy"
let str3=`hi     
my name is meera
what is your name
i am going
`  //backtick`
const res=regex.test(str1);
console.log("result :",res)