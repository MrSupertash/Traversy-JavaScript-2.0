const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0') {
        alert('Please fill in all fields')
        return;
    }

    console.log(item, priority);
}

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // the 'item' and 'priority' here are the name property of the HTML element!
    // const item = formData.get('item');
    // const priority = formData.get('priority');


    // the .entries() method gives us an Iterator that allows us to loop through it
    const entries = formData.entries();

    for (let entry of entries) {
        console.log(entry); // gives us an array per entry with name and value of the element
        // console.log(entry[0]); // gives us the name of the element
        // console.log(entry[1]); // gives us the value of the element
    }

    // console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);