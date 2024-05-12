
/*for(let count=1; count<=1000;count++){
    console.log("apna college");// 5 execute
}*/
/*let size = 0;
for(let i of str){
    console.log("i=",i);
    size++;

}

console.log("string size = ",size);*/

/*et student = {
    name: "Saima",
    age:20,
    sgpa:7.5,
    isPass:true,
};

for(let key in student){
    console.log("key = ",key,"value=",student[key]);
}*/


/*for(let count=0; count<=100;count++){
    if(count%2!==0){
        console.log("count =",count);
    }
}*/

/*let gameNumber = 25;

let userNum = prompt("Guess the gameNumber: ");

while(userNum != gameNumber){
    userNum = prompt("you entered wrong number , guess again");

}
console.log("congratulations number is right");

let str = "Apna College";
let str2 = "Saima";

console.log(str[7]);
console.log(str2[3]);

let obj = {
    item:"pen",
    price:10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("The cost of",obj.item,"is",obj.price,"rupees");
let specialString = `This is a template literal`;
console.log(typeof specialString);


console.log("Apna\ncollege");
console.log("Musmira\tSaima");*/

//let str1 = "hello";

//console.log(str.slice(0,4));

//let studentMarks = [12,45,89,43];

//console.log(studentMarks);

//let employeeNames = ["Harsh","Mohit","Rajiv"];

//console.log(employeeNames);

//let info = ["iron",76,"Homesh"];

//console.log(typeof info);

/*let heroes = ["ironman","thor","hulk","shaktiman"];
//for loop
//for(let i = 0; i < heroes.length; i++){
  //  console.log(heroes[i]);

//for of
for(let el of heroes){
    console.log(el);
}*/

/*let cities = ["delhi","bengaluru","pune"];

for(let city of cities){
    console.log(city.toUpperCase);
}*/

/*let marks = [85,97,44,37,76,60];

let sum = 0;

for(let value of marks){
    sum += value;
}

let avg = sum/marks.length;
console.log(`avg marks is ${avg}`);*/

//let items = [250,645,300,900,50];

//let i = 0;
//let i = 0;
/*for(let val of items){
    
    let offer = val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}*/

/*for(let i = 0;i<items.length;i++){
    let offer = items[i]/10;
    items[i]-=offer;

}

console.log(items);*/

/*let veggies = ["potato","tomato","cucumber"];
veggies.push("chips");
console.log(veggies);
let deletedItems = veggies.pop();
console.log(veggies);
console.log("deleted",deletedItems);
console.log(veggies.toString);
console.log(veggies);*/
//let names = ["Saima","Sehreen"];
//let add = ["Nida"];
//let queen = names.concat(add);
//console.log(queen);
//let arr = [1,2,3,4,5,6,7];
//arr.splice(2,2,101,108);

//arr.splice(2,5,101);
/*let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];



companies.splice(2,1,"Ola");
companies.push("Amazon");*/

//FUNCTIONS

/*function myFunction(){
    console.log("RGIT");
    console.log("Java");
}

myFunction("I love jS");*/

/*function sum(x, y){
    s = x+y;
    return s;
   
}
let value = sum(3,4);

console.log(value);*/
/*function sum(a,b){
    return a*b;
}

const arrowSum = (a,b) => {
    console.log(a+b);
}

const arrowMul = (a,b) =>{
    console.log(a*b);
}*/

/*function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }
    }

    console.log(count);

    return count;
}

const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }
    }

    console.log(count);

    return count;
}



function myFunc(num){
    return num;
}*/

/*let nums = [76,98,27,92,78,886,999];

nums.forEach((num) => {
    console.log(num*num);
});*/

/*let arr = [2,8,9,3,6];

let evenArr = arr.filter((val) => {
    return val > 3;
})

console.log(evenArr);*/

/*let arr = [5,7,9,4,8];

const output = arr.reduce((prev,curr) => {
    return prev >  curr ? prev : curr;
});

console.log(output);*/

/*let marks = [97,67,89,99,68];

let toppers = marks.filter((val) => {
    return val>90;

});
console.log(toppers);*/

/*let n = prompt("enter a number: ");

let arr = [];

for(let i = 1; i<=n; i++){
    arr[i-1]=i;
}

console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
});

console.log(sum);

let product = arr.reduce((res,curr) => {
    return res * curr;
});
console.log(product);*/
//let heading = document.getElementById("heading");
//console.dir(heading);

//let firstEl = document.querySelector(".myClass");
//console.dir(firstEl);
//const tr = document.getElementById("row1");
//const corner_td = tr.lastChild;
//console.log(corner_td);
/*const myElement = document.getElementById("foo");
for (const child of myElement.children) {
  console.log(child.tagName);
}*/
/*let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Apna college";*/

/*let divs = document.querySelectorAll(".box");
let idx=1;
for(div of divs ){
    div.innerText= `good girl ${idx}`;
    idx++;
}*/
/*let div = document.querySelector("div");

console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);*/

//let para = document.querySelector("p");
//console.log(para.setAttribute("class","new class"));
/*let div = document.querySelector("div");

div.style.backgroundColor = "green";

div.style.fontSize =  "26px";

div.innerText = "ilovejs";*/

/*let newBtn = document.createElement("button");
newBtn.innerText= "CLICK ME";

console.log(newBtn);

let p = document.querySelector("p");
div.after(newBtn);*/

//let newHeading = document.createElement("h1");
//newHeading.innerHTML = "<i>Hi, IM new!</i>";

//document.querySelector("body").pretend(newHeading);
/*let newButton = document.createElement("button");
newButton.innerText = "click me!";

newButton.style.color = "white";
newButton.style.backgroundColor="red";

document.querySelector("body").prepend(newButton);*/

//let para = document.querySelector("p");

//let btn1 = document.querySelector("#btn1");

//btn1.onclick = (evt) => {

   // console.log(evt);
  //  console.log(evt.type);
   // console.log(evt.target);
    //console.log(evt.clientX,evt.clientY);
    
//};

/*btn1.addEventListener("click",(evt) => {
    console.log("button was clicked - handler1");
    
})

btn1.addEventListener("click",() => {
    console.log("button was clicked - handler2");
})

btn1.addEventListener("click",() => {
    console.log("button was clicked - handler3");
})

btn1.addEventListener("click",() => {
    console.log("button was clicked - handler4");
})*/
/*let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";


modebtn.addEventListener("click",() => {
    if(currMode === "light"){
        currMode= "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

});*/




