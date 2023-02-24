// Step 1 - Lesson Add Items To List (DOM only)
// Bring in all of the things that we need for this functionality and put the elements into variables at the very top. We're putting them at the top in the global scope so we can access them from multiple functions

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

// Event functions
function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please enter an item');
        return;
    }

    // create item DOM element
    addItemToDom(newItem);

    // add item to local storage
    addItemToStorage(newItem);

    checkUI();

    // clear input field
    itemInput.value = '';    
}


function addItemToDom(item) {
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    // Create Button with icon    
    const button = createButton('remove-item btn-link text-red');    
    
    // Append button to the list item
    li.appendChild(button);

    // Append list item to the item list
    itemList.appendChild(li);
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


function addItemToStorage(item) {
    let itemsFromStorage;

    if(localStorage.getItem('items') === null) {
        // if there's no 'items' key in local storage, set our variable to an empty array
        itemsFromStorage = [];
    } else {
        // else set the variable to an array from the value string
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    // add new item to array
    itemsFromStorage.push(item);

    // convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDom(item));
    
    checkUI();
}

function getItemsFromStorage() {
    let itemsFromStorage;

    if(localStorage.getItem('items') === null) {
        // if there's no 'items' key in local storage, set our variable to an empty array
        itemsFromStorage = [];
    } else {
        // else set the variable to an array from the value string
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}


function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm(`Sure you wanna delete ${e.target.parentElement.parentElement.firstChild.textContent} from the list?`)) {
            e.target.parentElement.parentElement.remove();
        }        
    };
    checkUI();
}

// I wondered why the console.log would log more often than were li in the list. The children of ul of course also contain whitespace textNodes within the ul tags as well as at least one comment node if I commented out all items in the html. To get rid of this potential issue, it is necessary to have the opening and closing ul tag right next to each other. Otherwise we could potentially target a comment or textNode child that we did not intent to. Will remove this later from the HTML. Will keep it now for building/testing purposes
function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    
    items.forEach(item => {
        if (!item.textContent.toLowerCase().includes(text)) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    })
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearButton.style.display = 'flex';
        itemFilter.style.display = 'flex';
    }
}

// initialize app
function init() {
    // Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', removeItem);
    clearButton.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    // Check on page load if there are items, otherwise clear the Clear All button and Filter input
    checkUI();
}

init();