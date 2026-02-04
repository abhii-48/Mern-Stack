const p =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('hello');
        resolve('promise resolved');
    },2000)
})
// p.then(data=>console.log(data));
// p.catch(err=>console.log(err));

async function getData(){
    const data=await p;
    console.log('Before Data');
    console.log(data);
    console.log('After Data')
}
getData();