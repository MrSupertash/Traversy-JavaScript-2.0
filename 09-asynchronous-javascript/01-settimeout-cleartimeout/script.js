// even with a timeout of 0 this gets put in the task queue and waits for the call stack to be cleared to execute. Thus although it is 1st in the file, it still executes after the normally stacked console.log

// setTimeout(changeText, 2000)

// console.log('Hello from global scope');

function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}


// For the below timerID variable. Here from the MDN about the return value:
// The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.
// It is guaranteed that a timeoutID value will never be reused by a subsequent call to setTimeout() or setInterval() on the same object (a window or a worker). However, different objects use separate pools of IDs.
const timerId = setTimeout(changeText, 3000); // this executes

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
})

