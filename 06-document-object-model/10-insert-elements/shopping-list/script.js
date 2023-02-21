// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterbegin', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example
// this one is more tricky. It inserts an element before a child element of a specified parent. Here ul is the parent upon which we use the method, and we sepcify li, the element to be inserted and then the element BEFORE which it should be inserted (thirdItem)

function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}



insertElement();
insertText();
insertHTML();
insertBeforeItem();


/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
