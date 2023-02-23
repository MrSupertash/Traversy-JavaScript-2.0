// Step 1 - Lesson Add Items To List (DOM only)
// Bring in all of the things that we need for this functionality and put the elements into variables at the very top. We're putting them at the top in the global scope so we can access them from multiple functions

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Event functions
function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please enter an item');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    // Create Button with icon
    
    const button = createButton('remove-item btn-link text-red');    
    
    // Append button to the list item
    li.appendChild(button);

    // Append list item to the item list
    itemList.appendChild(li);

    // clear input field
    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    // append icon to the button
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}



// Event Listeners
itemForm.addEventListener('submit', addItem);