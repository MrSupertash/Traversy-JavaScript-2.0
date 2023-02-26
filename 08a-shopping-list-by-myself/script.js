// My own try at this projects without looking at Brad's lessons, only the lesson names

// First bring in all the elements that we need

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

// Functions

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

// Event Listeners
// itemInput.addEventListener('input', addItem);
itemForm.addEventListener('submit', onSubmitItem);