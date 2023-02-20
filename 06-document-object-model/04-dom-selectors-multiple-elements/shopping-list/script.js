// querySelectorAll()
const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems.style.color = 'red'; // this won't work because we are accessing a NodeList here, not the properties of the elements. NOTE: In jQuery it DOES work like this.

// listItems[1].style.color = 'red'; // this works but only for the individually accessed item

// looping over each item to access it works for the whole nodeList, then!
// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if (item.innerText === 'Apples') {
//         item.style.color = 'green';
//     }

//     if (index === 1) {
//         item.remove();
//     }

//     // if (index === 0) {
//     //     item.innerText = 'Oranges'; // since the button element is WITHIN the li element, it also gets overwritten. We don't want that and need to know exactly what we're targeting!
//     // }

//     if (index === 0) { // So instead we want to take the whole innerHTML element and just change what we want. But see, not really optimal solution.
//         item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// });


// This here gives an HTML collection, not a Node List!
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

// listItems2.forEach(item => console.log(item.innerText)); // Does not work, since high-order array methods do not work on HTML collections!

const listItemsArray = Array.from(listItems2); // convert HTML collection into an array
listItemsArray.forEach(item => console.log(item.innerText)); // now it works, bc it's an array.
listItemsArray[2].innerText = 'Peter';
console.log(listItemsArray);
console.log(listItems2);

// About the above: This works since the Array.from() constructor creates a shallow-copied array. Meaning it points to the same reference as the HTML collection. You change the values of one, the other will also change!