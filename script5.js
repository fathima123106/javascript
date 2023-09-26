// for(let i=1;i<=5;i++){
    
//     for(let j=1;j<=i;j++){
//         document.write("*");
//     }
    
//     document.write("\n");
// }
class Stdents{
    name;
    div;
    Yob;
    constructor(name,div,Yob){
        this.name=name;
        this.div=div;
        this.Yob=Yob;
    }
     PrintName(){
        console.log("Name :",this.name,"Yob :");
        return this.Yob
    }
     PrintDiv(){
        console.log("Division :",this.div);
     }
     PrintAge(){
        return new Date().getFullYear() -this.Yob;
     }
     static PrintMinAge(...args){
        let arr= args.map((e)=>{
            return e.Yob;
        })
        console.log("Minimum Yob :",Math.min(...arr));
    }
  
}
let obj=new Stdents("manu",5,2001)
let obj1= new Stdents("meera",5,2002)
let obj2= new Stdents("Anu",5,2000)
console.log(obj)
console.log(obj.PrintName())
console.log("age",obj.PrintAge())
Stdents.PrintMinAge(obj,obj1,obj2)
//static funtion in which we an use multiple objects

// Stdents.PrintMinAge=function(...args){
//     let arr= args.map((e)=>{
//         return e.Yob;
//     })
//     console.log("Minimum Yob :",Math.min(...arr));
// }
// Stdents.PrintMinAge(obj,obj1,obj2)