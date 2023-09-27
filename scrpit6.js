class Button{
    constructor(name){
        this.button=document.createElement('button');
        this.button.innerHTML=name;
        document.body.appendChild(this.button)
    }
    set width(width){
        this.button.style.width=width+"px"
    }
    set height(height){
        this.button.style.height=height+"px"
    }
    get width(){
       return this.button.style.width;
    }
    get height(){
        return parseInt(this.button.style.height); //it will return the integer value only
     }
     onClick(fn){
        return this.button.onclick=fn;
     }
}
let myButton=new Button("click")
// myButton.setWidth(100)
// myButton.setheight(100)
myButton.width = 200;
myButton.height=100;
console.log("getwidth :",myButton.width)
console.log("getheight :",myButton.height)
myButton.onClick(function (){
    console.log("button clicked ....")
})
class orangeButton{
    constructor(name){
        this.button=document.createElement('button');
        this.button.innerHTML=name;
        document.body.appendChild(this.button)
    }
    set width(width){
        this.button.style.width=width+"px"
    }
    set height(height){
        this.button.style.height=height+"px"
    }
    get width(){
       return this.button.style.width;
    }
    get height(){
        return parseInt(this.button.style.height); //it will return the integer value only
     }
     onClick(fn){
        this.button.onclick=function () {
         this.button.onclick=fn;
        this.button.style.background= "orange";
     }.bind(this);
    }
}
 let btns=new orangeButton("Click here")
 btns.width=200;
 btns.height=100;
 btns.onClick(function (){
    console.log("orange button clicked...")
 })


 class ChildButton extends Button{
    constructor(name){
        super(name)
    }

    onClick(fn){
        this.button.onclick=function () {
         this.button.onclick=fn;
        this.button.style.background= "orange";
     }.bind(this);
    }
 }
 let cild_class_button = new ChildButton("child");
 cild_class_button.width=200;
 cild_class_button.height=100;
 cild_class_button.onClick(function (){
    console.log("chiled button clicked...")
 })