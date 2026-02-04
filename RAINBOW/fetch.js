//FETCH

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>response.json())
// .then(data => {
//     console.log(data);
// })



//USING ASYNC/AWAIT
async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json();
    console.log(data);
}
fetchData();