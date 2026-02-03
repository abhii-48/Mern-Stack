const form =document.quesrySelector('#form');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const emailRegex= /.*?@?[^@]*\.+.*/


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!name.value.trim()){
        alert('Name is required');
        error.innerText='Name is required!'
    }

    else if(name.value.length<4){
        error.innerText='Name must be at least 4 characters';
    }
    else if(!email.value.trim()){
        alert('Email is required');
    }

   else if(!emailRegex.test(email.value.trim())){
    alert('Please enter valid email');
   }
    else if(!message.value.trim()){
        alert('You must add message to send it!');
    }

    else{
        alert('Form submitted successfully!');
    }



})

// console.log('Javasript is connected');
// let num1=5;
// let num2=10;
// if(num1<num2){
//     console.log(`${num1} is less than ${num2}`);
// }
// else{
//     console.log(`${num1} is greater than ${num2}`);
// }