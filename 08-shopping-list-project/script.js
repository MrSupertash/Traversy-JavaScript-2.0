// Step 1 - Lesson Add Items To List (DOM only)
// Bring in all of the things that we need for this functionality and put the elements into variables at the very top. We're putting them at the top in the global scope so we can access them from multiple functions

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formButton = itemForm.querySelector('button');
let isEditMode = false;

// Event functions
function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please enter an item');
        return;
    }

    // Check for edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        // remove the item to be edited from local storage
        removeItemFromLocalStorage(itemToEdit.textContent);

        // remove the edit-mode class
        itemToEdit.classList.remove('edit-mode');

        // remove it from the DOM
        itemToEdit.remove();

        isEditMode = 'false';
    } else {
        if (checkIfItemExists(newItem)) {
            alert('That item is already on the list!');
            return;
        }
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


function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDom(item));
    
    checkUI();
}


function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();

    // add new item to array
    itemsFromStorage.push(item);

    // convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
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

function onClickItem(e) {
    // if button was clicked
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);

    // if li was clicked
    } else if (e.target.tagName === 'LI') {
        setItemToEdit(e.target);
    }
}

function checkIfItemExists(item) {
    let itemsFromStorage = getItemsFromStorage();
    const smallItemsFromStorage = itemsFromStorage.map(storageItem => storageItem.toLowerCase());

    // if storage includes item, it will return true otherwise false
    return smallItemsFromStorage.includes(item.toLowerCase());
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList
        .querySelectorAll('li')
        .forEach(item => item.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formButton.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formButton.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
    itemInput.focus();
}

function removeItem(item) {

    if (confirm(`Sure you wanna delete ${item.textContent}?`)) {
        // remove item from DOM
        item.remove();
        // remove item from local storage
        removeItemFromLocalStorage(item.textContent);
    }        

    checkUI();
};

function removeItemFromLocalStorage(item) {
    const storageItems = getItemsFromStorage();
    const newStorageItems = storageItems.filter(storageItem => (storageItem !== item));

    // if no items left, clear local storage key, otherwise set updated item list
    if (newStorageItems.length === 0) {
        localStorage.removeItem('items');
    } else {
        localStorage.setItem('items', JSON.stringify(newStorageItems));
    }
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    localStorage.removeItem('items');
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
    itemInput.value = '';
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearButton.style.display = 'flex';
        itemFilter.style.display = 'flex';
    }

    formButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formButton.style.backgroundColor = '#333';

    isEditMode = false;
}

// initialize app
function init() {

    // Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearButton.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    // Check on page load if there are items, otherwise clear the Clear All button and Filter input
    checkUI();
}

init();