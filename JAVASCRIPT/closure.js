// function outer(){
//     let count =0;
//     return function inner(){
//         count++;
//         console.log(`Count is: ${count}`);
//     }
// }
// const fn=outer();
// fn();
// fn();



function createCounter(){
    let count=0

    return {
        increment(){
            count++;
            return count;
        },
        decrement(){
            count--;
            return count;
        }
    }
}
const counter=createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
// counter.increment();
// counter.increment();
// counter.decrement();
