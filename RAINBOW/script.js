// const body = document.querySelector(('body'))
// // body.style.background = 'orange';
// // setTimeout(()=>{
// //     body.style.background = 'red';
// //     setTimeout(()=>{
// //         body.style.background = 'orange';
// //         setTimeout(()=>{
// //             body.style.background = 'blue';
// //             setTimeout(()=>{
// //                 body.style.background = 'yellow';
// //                 setTimeout(()=>{
// //                     body.style.background = 'olive';
// //                 },2000)
// //             },2000)
// //         },2000)
// //     },2000)
// // },2000)
// // function changecolor(newcolor,delay,next){
// //     setTimeout(()=>{
// //         body.style.backgroundColor =newcolor;
// //         next && next();
// //     },delay)
// // }
// // the below example is callback hell and it is hard to read difficult to maintain and debug . 
// // the solution of this callback hell is promises
// // changecolor('red',1000,()=>{
// //     changecolor('orange',1000,()=>{
// //         changecolor('yellow',1000,()=>{
// //             changecolor('green',1000,()=>{
// //                 changecolor('blue',1000,()=>{
// //                     changecolor('indigo',1000,()=>{
// //                         changecolor('violet',1000,()=>{
// //                         })
// //                     })
// //                 })
// //             })
// //         })
// //     })
// // })
// //using promise
// function changecolorpromise(newcolor,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             body.style.backgroundColor = newcolor;
//             resolve();
//         },delay)
//     })
// }
// changecolorpromise('red',1000)
// .then(()=>changecolorpromise('orange',1000))
// .then(()=>changecolorpromise('yellow',1000))
// .then(()=>changecolorpromise('blue',1000))



async function test(){
    return 'Hello'
}
console.log(test());
