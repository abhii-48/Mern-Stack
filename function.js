// function greet(){
//     console.log("Good Morning");

// }
// greet();


// function add(a,b){
//     console.log(a+b);
// }

// console.log(add(5,7));
// add(5,7);
// add(9,10);

// //Task - create a BMI calculator

// function BMICalc(weight,height){
//     let BMI = weight/(height*height);
//     return BMI;

// }

// let bmi1 = BMICalc(50,2.75);
// let bmi2 = BMICalc(70,1.75);
// console.log("BMI 1 is: " + bmi1);
// console.log("BMI 2 is: " + bmi2);
// if(bmi1 <18.5){
//     console.log("Underweight");
// }
// else if(bmi1>=18.5 && bmi1<24.9){
//     console.log("Healthy");
// }

// else if (bmi1>=25 && bmi1<29.9){
//     console.log("Overweight");
// }
// else{
//     console.log("Obese");
// }


// if(bmi2 <18.5){
//     console.log("Underweight");
// }
// else if(bmi2>=18.5 && bmi2<24.9){
//     console.log("Healthy");
// }

// else if (bmi2>=25 && bmi2<29.9){
//     console.log("Overweight");
// }
// else{
//     console.log("Obese");
// }


// // Task-2 Calculator
// function calculate(num1,num2,operation){
//     if(operation === 'add'){
//         console.log(num1+num2);
//     }
//     else if(operation === 'subtract'){
//         console.log(num1-num2);
//     }
//     else if(operation === 'multiply'){
//         console.log(num1*num2);
//     }
//     else if(operation === 'divide'){
//         console.log(num1/num2);
//     }
// }
// calculate(26,55,'add');
// calculate(100,50,'subtract');
// calculate(10,5,'multiply');
// calculate(40,8,'divide');

// function printNum(){
//     if(true){
//         let num=5
//     }
//     console.log(num);
// }



// const greet=function(){
//     console.log('hello');
// }
// greet();

const greet=function(name){
    console.log('hello ji',name);
}
greet('Ram');

function calculator(a,b,operation){
    return operation(a,b)
}
const add=function(num1, num2){
    return num1+num2;
}

const subtract=function(num1, num2){
    return num1-num2;
}

const multiply=function(num1, num2){
    return num1+num2;
}

const divide=function(num1, num2){
    return num1/num2;
}

console.log(calculator(3,5,add));
console.log(calculator(8,4,subtract));
console.log(calculator(8,4,multiply));
console.log(calculator(8,4,divide));



function sayHello(){
    console.log('Hello...');
}       


function greet1(){
    console.log('Hello')
}
const greet2=function(){
    console.log('Hello world')
}

function callMe(fn){
    fn()
}
callMe(greet1);
callMe(greet2);




function reverseArray(arr){
    let reversed=[];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([4,3,7,8,2,5]));

function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([4,3,7,8,2,5]));



function reverseString(str){
    let reversed='';
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}
console.log(reverseString('a b c d e f g h i j k l m n o p q r s t u v w x y z'));


//methods on array
let arr=[2,5,4,8,1];
//FOREACH
arr.forEach((el)=> console.log(el));


//MAP
console.log(arr.map((el)=> el*2)); //DOUBLE VALUES
console.log(arr.map((el)=>el*el)); //SQUARE VALUES

//FILTER
console.log(arr.filter((el)=> el%2===0)); //EVEN NUMBERS
console.log(arr.filter((el)=> el%2!==0)); //ODD NUMBERS


//REDUCE 
console.log(arr.reduce((sum,n)=> sum+n,0)); //SUM OF ALL ELEMENTS
console.log(arr.reduce((prod,n)=> prod*n,1)); //PRODUCT OF ALL ELEMENTS

console.log(arr.find((el)=>el>4)); //FIRST ELEMENT GREATER THAN 4
console.log(arr.findIndex((el)=>el>4)); //INDEX OF FIRST ELEMENT GREATER THAN 4

console.log(arr.includes(8));
console.log(arr.includes(7));

console.log(arr.indexOf(8));
console.log(arr.indexOf(7));

console.log(arr.reverse());

let arr1=[1,5,7]
console.log(arr.concat([2,4,6]));

let stringArray=['a','b','c','d']
let newStr=stringArray.join('-');
console.log(newStr);















