// My own try at this projects without looking at Brad's lessons, only the lesson names

// First bring in all the elements that we need

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

// Functions


// Add an item

function onSubmitItem(e) {
    e.preventDefault();
    const newItem = itemInput.value;

    if (newItem !== '') {
        addItemToDOM(newItem);
        itemInput.value = '';
        addItemToStorage(newItem);
    }
}

function addItemToStorage(item) {
    // localStorage.removeItem('items');
    let storageItems = JSON.parse(localStorage.getItem('items'));

    if (storageItems === null) {
        storageItems = [];
    }

    storageItems.push(item);
    localStorage.setItem('items', JSON.stringify(storageItems));
}

function addItemToDOM(item) {
    const text = itemInput.value;
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

    // remove item
    if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove();
    }

    checkUI();
}


// remove all items
function clearAll(e) {
    while (itemList.firstChild) {
        itemList.firstChild.remove();
    }

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



// Event Listeners
// itemInput.addEventListener('input', addItem);
itemForm.addEventListener('submit', onSubmitItem);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearAll);
itemFilter.addEventListener('input', filterItems);


checkUI();