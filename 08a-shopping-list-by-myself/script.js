// My own try at this projects without looking at Brad's lessons, only the lesson names

// First bring in all the elements that we need

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formButton = itemForm.querySelector('button');
let isEditMode = false;

// Functions


// Add an item

function onSubmitItem(e) {
    e.preventDefault();
    const newItem = itemInput.value;

    if (!itemExists(newItem)) {
        if (isEditMode) {
            isEditMode = false;
    
            formButton.style.backgroundColor = '#333';
            formButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    
            const itemToEdit = itemList.querySelector('.edit-mode');
            itemToEdit.remove();
    
            removeItemFromStorage(itemToEdit.firstChild.textContent);
            checkUI();
        }
    
    
    
        if (newItem !== '') {
            addItemToDOM(newItem);
            itemInput.value = '';
            addItemToStorage(newItem);
        } else {
            alert('Please enter an item!');
        }
    } else {
        alert('This item is already on the list!');
    }


}

function itemExists(item) {
    let allItems = itemList.querySelectorAll('li');
    let yesItems = [];
    allItems.forEach(i => yesItems.push(i.firstChild.textContent.toLowerCase()));

    let exists = false;
    
    if (yesItems.includes(item.toLowerCase())) {
        exists = true;
        return exists;
    };
}

function addItemToStorage(item) {
    let storageItems = JSON.parse(localStorage.getItem('items'));

    if (storageItems === null) {
        storageItems = [];
    }

    storageItems.push(item);
    localStorage.setItem('items', JSON.stringify(storageItems));
}

function getItemsFromStorage() {
    let storageItems = JSON.parse(localStorage.getItem('items'));

    if (storageItems !== null) {
        storageItems.forEach(storageItem => addItemToDOM(storageItem));
    }

    checkUI();
}

function addItemToDOM(item) {
    const li = document.createElement('li');
    const itemText = document.createTextNode(item);

    const button = createButton();

    li.appendChild(itemText);
    li.appendChild(button)

    itemList.appendChild(li);



    checkUI();
}

function createButton() {
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = createIcon();
    button.appendChild(icon);

    return button;
}

function createIcon() {
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    return icon;
}


// Remove an item

function onClickItem(e) {
    const li = itemList.querySelectorAll('.remove-item');


    // isEditMode
    if (e.target.tagName === 'LI') {        
        setItemToEdit(e, e.target.firstChild.textContent);        
    };
    
    // remove item
    if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove();
        removeItemFromStorage(e.target.parentElement.parentElement.firstChild.textContent);
    }
    
    checkUI();
}

function setItemToEdit(e, item) {
    isEditMode = true;    
    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'));
    e.target.classList.add('edit-mode');
    document.getElementById('item-input').value = item;
    document.getElementById('item-input').focus();
    
    formButton.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formButton.style.backgroundColor = 'green';

    // removeItemFromStorage(item);
}

function removeItemFromStorage(item) {
    let storageItems = JSON.parse(localStorage.getItem('items'));
        
    const newStorageItems = storageItems.filter(storageItem => storageItem !== item);
    localStorage.removeItem('items');

    if (newStorageItems.length !== 0) {
        localStorage.setItem('items', JSON.stringify(newStorageItems));
    }    
}


// remove all items
function clearAll(e) {
    while (itemList.firstChild) {
        itemList.firstChild.remove();
    }

    localStorage.removeItem('items');
    itemInput.value = '';

    checkUI();
}

function checkUI() {
    if (!itemList.firstElementChild) {
        itemFilter.style.display = 'none';
        clearBtn.style.display = 'none';
    } else {
        itemFilter.style.display = 'block';
        clearBtn.style.display = 'block';
    }

    itemInput.value = '';
}


// filter items
function filterItems(e) {
    const filterText = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll('li');    

    items.forEach(item => {
        const itemText = item.firstChild.textContent.toLowerCase();
        if (!itemText.includes(filterText)) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    })
}


function init() {
    // initialize event listeners
    itemForm.addEventListener('submit', onSubmitItem);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearAll);
    itemFilter.addEventListener('input', filterItems);

    getItemsFromStorage();
}

init();