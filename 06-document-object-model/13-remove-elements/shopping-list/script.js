function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    // const li = document.querySelector(`li:nth-child(${itemNumber})`)

    // Brad's second solution. The querySelectorAll() creates a nodeList that can be accessed like an array
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

function removeItem3(itemNumber) { // 3 because I implented #2 already in the first one
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

const removeItem4 = itemNumber => document.querySelectorAll('li')[itemNumber - 1].remove();

// removeClearButton();
// removeFirstItem();
// removeItem(3);
// removeItem3(1);
removeItem4(2);