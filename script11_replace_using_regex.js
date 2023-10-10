let  str="a-b-c"
let str1=str.replace(/-/g,':'); //g represents globaly 
console.log("str1 :",str1)

let datestr="11-12-23";
console.log("datestr :",datestr);
let datestr1=datestr.replace(/(\d{2})$/,"20$1");
console.log("datestr1 :",datestr1);
console.log("$1 :",$1);
let datestr2=datestr.replace(/\d{2}$/,"20");
console.log("datestr2 :",datestr2);

//lookahead
//possitive lookahead(?=)
//possitive lookbehind(?<=)
//negative lookahead(?!)
//negative lookbehind(?<!)
let datestr3=datestr.replace(/(?<=-)\d{2}(?=-)/,"20");
console.log("datestr3 :",datestr3);



