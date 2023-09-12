let strr="  daddy mom ,mom";
let str_new = strr;
console.log("string length : ", str_new);
let sliced_strng=strr.slice(1,3)
console.log("string length : ",sliced_strng);
let sliced_strng1=strr.slice(1)
console.log("string length : ",sliced_strng1);
let sliced_strng2=strr.slice(-1)
console.log("string length : ",sliced_strng2);
let sliced_strng3=strr.slice(-3)
console.log("string length : ",sliced_strng3);

 let substring1=strr.substring(2)
 console.log("sub string : ",substring1);
 let substring2=strr.substring(1,4);
 console.log("sub string : ",substring2);
 let substring3=strr.substring(-2)
 console.log("sub string : ",substring3);

 let string_replace=strr.replace("mom","mommy");
 console.log("replaced atring :" ,string_replace);
 
 let string_concat=strr.concat(",baby");
 console.log("concatinate string : ",string_concat);

 let string_replaceAlll=strr.replaceAll("mom","mommy");
 console.log("replaced atring :" ,string_replaceAlll);

 let trim = strr.trim();
 console.log("trimed variable :",trim)
  let trim1= strr.trimEnd()
  console.log("temed:",trim1);
   let charat= strr.charAt(3);
   console.log(charat)

   let charcode= strr.charCodeAt(4);
   console.log("char at :",charcode);

   let indexof=strr.indexOf("m")
   console.log("indexof",indexof);


   let indexOf=strr.indexOf("m",9)
   console.log("indexof m after 9 th position is :",indexOf);

let sts= strr.startsWith("hello");
console.log("starts with :",sts);
 
let end_with=strr.endsWith("m");
console.log("end with",end_with);

let splits=strr.split();
console.log(splits)

let splits1=strr.split(",").join(",");
console.log(splits1)

//changed


