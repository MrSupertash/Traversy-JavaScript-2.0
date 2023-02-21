// Stuff from lesson
/*
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);


// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);
*/



// Lesson challenge: Create and append an item that looks like the others.


const listItem = document.createElement('li');
const listItemText = document.createTextNode('Mangoes');

const button = document.createElement('button');
button.className = 'remove-item btn-link text-red';

const iTag = document.createElement('i');
iTag.className = 'fa-solid fa-xmark';

listItem.appendChild(listItemText);
listItem.appendChild(button);
button.appendChild(iTag);

document.querySelector('ul').appendChild(listItem);


console.log(listItem);