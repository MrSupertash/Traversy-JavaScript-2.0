// Quick and Dirty
// function createListItem(item) {
//     // const li = `<li>${item}</li>`; // does not work since li is a String here and not a Node

//     const li = document.createElement('li');
//     li.innerHTML = `
//     ${item}
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;

//     document.querySelector('.items').appendChild(li);
// }



// Clean & Performant
function createNewItem (item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button')
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    console.log(li.innerHTML);

    document.querySelector('.items').appendChild(li);
    
}

// createListItem('Eggs');
createNewItem('Cheese');