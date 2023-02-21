function insertAfterItem() {
    // New element to insert
    const li = document.createElement('li');
    li.textContent = 'Insert Me After!';

    // Existing element to insert after
    const firstItem = document.querySelector('li:first-child');

    // Our custom function
    firstItem.insertAdjacentElement('afterend', li);
};

// my solution
// not really sure if I understood the assignment. I'm just using the insertAdjacentElement() method wrapped in a custom function :shrug:

function insertAfter(newEl, existingEl) {
    existingEl.insertAdjacentElement('afterend', newEl);
};

// Traversy solution
// function insertAfter(newEl, existingEl) {
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }


insertAfterItem();