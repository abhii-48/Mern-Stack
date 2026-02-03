// this keyword :->this is a special keyword that refers to the object that is currently using the function.
function sayHi(){
    console.log(this.name);
    // console.log(`My Name is ${this.name}`);
}
const person1 ={
    name : 'Tom',
    // sayName: function(){
    //     // console.log("My name is Tom");
    //     console.log(this.name);
    // }
    sayName:sayHi
}
const person2 = {
    name : 'Jerry',
    // sayName: function(){
    //     // console.log("My name is Jerry");
    //     console.log(this.name);
    // }
    sayName:sayHi
}
person1.sayName();
person2.sayName();
/////////
const user = {
    name: 'john',
    sayName(){
        // console.log(this.name);
        // setTimeout(function(){
        //     console.log(this.name);
        // },1000);
        setTimeout(()=>{
            console.log(this.name); //Arrow functions do not create their own this.They borrow this from the surrounding scope.

        },1000); 
    }
}
user.sayName();
setInterval(()=>{
        console.log('hii'); 
},1000); 