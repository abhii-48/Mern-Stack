console.log("Hello Javascript");
let str ='Hello my name is Abhi';
console.log(str.length);
console.log(str.slice(1,7));
console.log(str.includes('Abhi'));
console.log(str.includes('aman'));

console.log(str.split(' '));
console.log(str.split());
console.log(str.split('bhi'));


let str2 = '     Hello World     ';
let newStr = str2.trim();
console.log(str2);
console.log(newStr);

let str3 = 'Hello World';
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

console.log(str.startsWith('H'));
console.log(str.startsWith('Hello'));
console.log(str.startsWith('I'));
console.log(str.replace('Abhi', 'Aman'));
console.log(str2.replace('Hello', 'the'));

const hello='hello hi hello hi hello hi hello hi';
const hello1=hello.replaceAll('hi','RAM');
console.log(hello1);
console.log(hello);

const greet='Hi';
console.log(greet.repeat(3));
console.log(greet.concat('world'));
let name='ram', age=25;
console.log('My name is '+  name + ' and i am ' +   age + 'years old');
console.log(`My name is ${name} and I am ${age} years old`);


console.log(name[0]);
console.log(str);
console.log(str.charAt(4));

