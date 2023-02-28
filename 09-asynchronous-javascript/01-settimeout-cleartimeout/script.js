// even with a timeout of 0 this gets put in the task queue and waits for the call stack to be cleared to execute. Thus although it is 1st in the file, it still executes after the normally stacked console.log

// setTimeout(changeText, 2000)

// console.log('Hello from global scope');

function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}


// for some reason the return of setTimeout() varies. it seems to be an integer, though. Can still work with it if stored in a variable!
const timerId = setTimeout(changeText, 3000); // this executes

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
})

