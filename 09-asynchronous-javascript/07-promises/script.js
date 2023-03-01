// Create a promise
const promise = new Promise((resolve, reject) => {
    // Do some some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('Promise consumed..')
});

// Sometimes we see the .then directly on the promise instead of putting the promise into a variable like above.
new Promise((resolve, reject) => {
    // Do some some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise 2 consumed..')
});

// Here the promise/resolve returns some data
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ name: 'John', age: 30 });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

getUser
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('The promise has been resolved or rejected'));


console.log('Hello from global scope');