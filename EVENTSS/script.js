let count=0;
const body=document.querySelector('body');
const p=document.querySelector('#counter');
const addButton=document.querySelector('#addBtn');
const subtractButton=document.querySelector('#subtractBtn');
addButton.addEventListener('click',()=>{
    count++;
    p.innerText=`Count: ${count}`
})
subtractButton.addEventListener('click',()=>{
    count--;
    p.innerText=`Count: ${count}`
})


addButton.addEventListener('mouseover',()=>{
    addButton.style.backgroundColor='lightgreen';
})

addButton.addEventListener('mouseout',()=>{
    addButton.style.backgroundColor='red';
})

subtractButton.addEventListener('mouseover',()=>{
    subtractButton.style.backgroundColor='lightcoral';  
})


subtractButton.addEventListener('mouseout',()=>{
    subtractButton.style.backgroundColor='blue';
})

const p2=document.createElement('p');
p2.innerText='This is a new paragraph added using JavaScript';
body.append(p2);

const resetButton=document.createElement('button');
resetButton.innerText='Reset Counter';
body.append(resetButton);

resetButton.addEventListener('click',()=>{
    count=0;
    p.innerText=`Count: ${count}`
})