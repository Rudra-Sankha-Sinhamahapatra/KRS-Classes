// let text="";
// for (var i=0;i<5;i++) {
//  text="The number is "+i;
//  console.log(text);
// }

// const numbers=[45,4,9,16,25];

// for(let x in numbers){
//     console.log(numbers[x]);
// }


// function myFunction(a,b){
//     console.log(a*b);
// }
// myFunction(50,4);

// function toCelsius(f){
//     return (5/9)*(f-32);
// }
// let value=toCelsius(77);
// console.log(value);

// function clickMe(){
//     console.log("button Clicked");
// }

// const fun=()=> {
//   console.log("arrow function");
// }
// fun();


//hoisting

// x=1;
// console.log("x= "+x);
// var x;


// var x=7;
// getName();
// console.log(getName);
// function getName(){
//     console.log("Namaste JS");
// }


// console.log(x);

var d=document.getElementById("elm");
// var a=document.getElementsByClassName("elm2");
console.log(d);
d.innerHTML="Hello World";
// console.log(a);
var click=false;
function clickMe() { 
    if(!click){
    document.getElementById("elm").style.color="red";
    document.getElementById("elm").style.fontFamily="sans-serif";
    document.getElementById("elm").style.fontSize="10px";
    click=true;
    } else{
        document.getElementById("elm").style.color="black";
    document.getElementById("elm").style.fontFamily="sans-serif";
    document.getElementById("elm").style.fontSize="15px";
    click=false;
    }
 }

 var p=document.getElementsByTagName('p');


 for(var i=0;i<p.length;i++){
    p[i].style.color="blue";
 }

 console.log(p);

 function alerttt(){
    alert("onkeydown");
 }

 function onMouseOverPara(){
    var d=document.getElementById("para");
    d.style.color="green";
    d.style.fontSize="40px";

 }

 document.getElementById("tryit").addEventListener("click",displayDate);

 function displayDate(){
    document.getElementById("demo").innerHTML= Date();
    console.log("clicked");
    document.getElementById("tryit").removeEventListener("click",displayDate);
    document.getElementById("tryit").addEventListener("click",myFun);
 }

 function myFun(){
    alert("Hello World");
 }