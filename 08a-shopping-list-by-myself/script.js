// My own try at this projects without looking at Brad's lessons, only the lesson names

// First bring in all the elements that we need

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

// Functions


// Add an item
function addItem(e) {
    const text = itemInput.value;
    const li = document.createElement('li');
    const itemText = document.createTextNode(text);

    const button = createButton();

    li.appendChild(itemText);
    li.appendChild(button)

    itemList.appendChild(li);
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


function onSubmitItem(e) {
    e.preventDefault();

    if (itemInput.value !== '') {
        addItem(itemInput.value);
        itemInput.value = '';
    }
}

// Remove an item

function onClickItem(e) {
    const li = itemList.querySelectorAll('.remove-item');


    // isEditMode

    // remove item
    if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove();
    }
}

// remove all items
function clearAll(e) {
    while (itemList.firstChild) {
        itemList.firstChild.remove();
    }
}


// Event Listeners
// itemInput.addEventListener('input', addItem);
itemForm.addEventListener('submit', onSubmitItem);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearAll)