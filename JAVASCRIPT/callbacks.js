// function hello(){
//     console.log(''Hello');
// }

const x =hello;
x();

function greet(name){
    console.log(`Hello ${name}`)
}
greet('Jerry');

function user(cb){
    const userName='Tom';
    cb(userName);
}
user(greet);

function getData(callback){
    setTimeout( ()=>{
        callback('Server data')
    },4000);
}

getData(function(data){
    console.log(data);
})