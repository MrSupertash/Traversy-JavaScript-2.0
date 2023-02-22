const logo = document.querySelector('img');

// e or event or evt, it's just a name for the parameter that receives the event object!
logo.addEventListener('click', function(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // with .target/.currentTarget, I can directly access the element that triggered the event! Pretty cool!
    // e.target.style.backgroundColor = 'black';

    // console.log(e.screenX);
    // console.log(e.screenY);
})

// document.body.addEventListener('click', function(e) {
//     console.log(e.target); // the specific element I clicked on
//     console.log(e.currentTarget); // the element the listener is attached to. here "body"
//     // this apparently has to do with event bubbling. If target is a child of currentTarget, the returns from both of these will be different!
// });


// preventDefault() prevents the default behavior of elements. eg taking you to the target URL of a link. Instead you can then do whatever you want in your JavaScript. Also if you don't want default submit button behavior but send the input somewhere else, etc. This is probably a very common method to be used in webdev.

document.querySelector('a').addEventListener('click', prevntDefault);

function prevntDefault(e) {
    e.preventDefault();
    console.log('Google was clicked.');
}


// using drag event to continuously show mouse position

const onDrag = document.querySelector('img').addEventListener('drag', dragXY);

function dragXY (e) {
    document.querySelector('h1').innerText = `X = ${e.pageX} \| Y = ${e.pageY}`;
}


/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/