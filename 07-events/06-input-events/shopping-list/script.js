const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    // this here gives the continuously updated input string! When eventListener is 'input'. Very good!
    // console.log(e.target.value);

    // for selectList the "value" is the explicitly set attribute on the option element!
    console.log(e.target.value);
}


// keydown is not a good solution here
// itemInput.addEventListener('keydown', onInput);

// using the input eventListener is preferred for input events! Input event listener does not return the key or keycode itself, though.
itemInput.addEventListener('input', onInput);

// For a select list both input and change eventlistener works.
// priorityInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);

// checkbox has a Boolean checked property reflecting every change
function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

checkbox.addEventListener('input', onChecked);


function onFocus(e) {
    console.log('Input is focused')
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '2px';
    itemInput.style.outlineColor = 'red';
}

function onBlur(e) {
    console.log('Input is not focused')
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);