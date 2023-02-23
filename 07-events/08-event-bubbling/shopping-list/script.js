// Event Bubbling

/*
With bubbling, the event is first captured
and handled by the innermost element and
then propagated to outer elements.
*/

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');
const body = document.querySelector('body');


form.addEventListener('click', (e) => {
    alert('form was clicked');
    // stopPropagation() will prevent upwards bubbling from this element
    e.stopPropagation();
})

div.addEventListener('click', (e) => {
    alert('div was clicked');
    e.stopPropagation();
})

body.addEventListener('click', () => {
    alert('body was clicked');
})

// this will fire TWICE now, because the parents also have a 'click' event listener.
// first it will fire for the innermost element, here the button,
// and then move up all parents and if they also have the same eventlistener
// they will also be triggered.
button.addEventListener('click', () => {
    alert('Button was clicked');
})

