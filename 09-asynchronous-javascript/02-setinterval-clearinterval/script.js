// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//     console.log(Date.now(), a);
// }

let intervalID;

function startChange() {
    if (!intervalID) {
        intervalID = setInterval(changeRandomColor, 1000);
    }
}

// function changeColor() {
//     if (document.body.style .backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }

function changeRandomColor() {
    const randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomTextColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomBackgroundColor}`;
    document.body.style.color = `#${randomTextColor}`;
}


function stopChange() {
    clearInterval(intervalID);
    // set intervalID to null, so the start button works again
    intervalID = null;
}


document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
