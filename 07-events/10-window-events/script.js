// In the olden days, when the HTML script tag was in the head and not at the bottom of the body tag.

// window.onload = function() {
//     document.querySelector('h1').textContent = 'Hello World';
// }

// window.addEventListener(
    // 'load' waits for the whole page to load, including images, links, etc.
//     'load',
//     () => {document.querySelector('h1').textContent = 'Hello World'}
// );

// window.addEventListener(
//     // DOMContentLoaded only waits for the DOM to be parsed and loaded, exclusive resources like images, etc.
//     'DOMContentLoaded',
//     () => {document.querySelector('h1').textContent = 'Hello World'}
// );


// In the below, Run me is logged first, then DOM Loaded, and Page load last since it waits for everything else
window.addEventListener('load', () => console.log('Page loaded'));

window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

// This runs first, since it does not need anything from the DOM. Thus, when console.logging something that includes an element from the DOM, it will lead into an error
console.log('Run me');


// This here will run if the defer attribute is in the script tag in the head.
document.querySelector('h1').innerText = 'Hello World';

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'blue';
    })
})

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    })
})