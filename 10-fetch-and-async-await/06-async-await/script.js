const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'John', age: 20 });
    }, 1000)    
});

// promise.then(data => console.log(data));

// Async/Await has to be in a function that is asynchronous
async function getPromise() {
    const response = await promise;
    console.log(response);
}

// getPromise();

// To many developers the following looks way cleaner than the .then() chaining
async function getUsers() {
    // here are no .then()s, because were AWAITing the request. The response will get put into the res and the next one into the data, just like with .then() but here separately
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

getUsers();

// this here is the same but with .then(). Right now I don't think the above looks so much better. Also I can see getting lost in arrow functions might get more complicated than the following simple example. Although what Brad notes on is that in the async/await we have the data available in the function scope rather than in the scope of the callback function! Which makes absolute sense to me.
// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data));
// }

// getUsers();


// async/await with arrow functions
// here the async has to be written after the assignment operator but before the parameters
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data);
}

getPosts();