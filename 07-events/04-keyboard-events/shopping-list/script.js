const itemInput = document.getElementById('item-input');

const onKeyPress = e => {
    console.log('keypress');
}

const onKeyUp = e => {
    console.log('key up');
}

const onKeyDown = e => {
    // key
    console.log(e.key);

    // ATTENTION: MDN says this has been deprecated. Expect compatibility issues
    // keyCode
    // console.log(e.keyCode);


    // ATTENTION: code ignores non-QWERTY layouts. A QWERTZ Z will output KeyY for example.
    // code
    console.log(e.code);

    // if (e.repeat) {
    //     console.log('You are holding down ' + e.key);
    // }

    // console.log('Shift: ' + e.shiftKey);
    // console.log('Alt: ' + e.altKey);
    // console.log('Control: ' + e.ctrlKey);

    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K');
    }

}

// ATTENTION: MDN says keypress has been deprecated! Also does ONLY register character keys. Use beforeInput or keydown.
// itemInput.addEventListener('keypress', onKeyPress);


// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);






// keypress and keyCode deprecated