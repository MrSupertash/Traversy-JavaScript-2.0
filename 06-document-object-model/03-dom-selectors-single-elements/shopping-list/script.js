// document.getElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').class); // does not work. MDN says deliberately chose against class bc conflicts. Note: class is an HTML Attribute, while className is a DOM Property
console.log(document.getElementById('app-title').className); // this does work. see above
console.log(document.getElementById('app-title').getAttribute('class')); // This also works.

// Set attributes
// document.getElementById('app-title').id = 'app-title new-id';
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World'
title.innerText = "Hello Again"
title.innerHTML = '<strong>Shopping List</strong>'

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black'; // Note that in CSS you would write "background-color" but js can't have the hyphen, it just uses camelCase

title.style.padding = '10px';
title.style.borderRadius = '20px';

// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText); // NOT zero-based. will get "Orange Juice"

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'limeGreen';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li'); // it is possible to use querySelector on any HTML element, not just document!
firstItem.style.color = 'purple';