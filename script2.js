/*-----------------ARRAY--------------------*/
const arr = ["apple", "orange", "grape"];
console.log(arr);
const fruit = new Array("plum", "mango", "cherry");
console.log(fruit);

//ARRAY LENGTH
console.log("array length", arr.length);
console.log("joined array: ", arr.join(","));
console.log(arr[1]);
console.log(fruit[2]);
console.log("index value of apple is :", arr.indexOf("apple"));
//to add new item to an array
arr.push("water melon");
console.log(arr);
arr.pop("water melon");
console.log(arr);
arr.pop();
console.log(arr);
//to delet first element
arr.shift();
console.log(arr);
//to delete or add elements into an array within index
fruit.splice(0, 1);
console.log(fruit);







/*-----------------------OBJECTS----------------------- */

const obj = {
  car: "sumo",
  owner: "ramu",
  age: 25,
};
console.log("new object : ", obj);

console.log(obj.age);
console.log(obj.car);
console.log(obj.owner);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));

const arr2 = [
  {
    car: "sumo",
    owner: "ramu",
    age: 25,
  },
  {
    car: "tata",
    owner: "manu",
    age: 24,
  },
  {
    car: "ford",
    owner: "Anu",
    age: 20,
  },
];
console.log(arr2);

obj.owner = "fathima";
console.log(obj);

arr2[1].owner = "mohan";
console.log(arr2);

console.log(JSON.stringify(arr2));
console.log(JSON.parse(JSON.stringify(arr2)));








/*-------------CONDITIONS------------- */

let i = 2;

if (i >= 3) {
  console.log("greater than 3");
} else {
  console.log("less than 3");
}

if (i <= 0) {
  console.log("less than 0");
} else {
  if (i == 0) {
    console.log("its a zero");
  } else {
    console.log("greater than zero");
  }
}

let j=5
if(j<0){
    console.log("lesser than 0");
}else if(j>0){
    console.log("greater than 0")
}else{
    console.log("zero")
}




/*----------------SWITCH---------------*/



console.log(i)

switch(i){
    case 1: console.log("one");
            break;
    case 2: console.log("two");
            break;
    case 3: console.log("three");
            break;
    default: console.log("something else")
}

console.error(i);
