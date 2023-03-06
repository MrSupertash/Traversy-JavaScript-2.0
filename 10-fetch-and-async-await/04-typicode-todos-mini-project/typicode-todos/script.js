const apiUrl = 'https://jsonplaceholder.typicode.com/todos';


// it seems good practice to have the fetch in a separate function and NOT to also do something with the response data in the same function but to call a separate function in the second .then!
const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(res => res.json())
        .then(data => {
            data.forEach((todo) => addTodoToDOM(todo));
        })
    };
    
const addTodoToDOM = (todo) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));

    // when adding custom attributes they should start with "data-" so we can later use the .dataset property to read all of them. .dataset is a read-only property of the HTMLElement interface.
    div.setAttribute('data-id', todo.id);

    if (todo.completed) {
        div.classList.add('done');
    }
    
    document.getElementById('todo-list').appendChild(div);
    
}

const createTodo = e => {
    e.preventDefault();

    const newTodo = {
        // new todo gets the title from the input field
        title: e.target.firstElementChild.value,
        completed: false,
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => addTodoToDOM(data));
}



const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
}

init();
