const apiUrl = 'https://jsonplaceholder.typicode.com/todos';


// it seems good practice to have the fetch in a separate function and NOT to also do something with the response data in the same function but to call a separate function in the second .then!
const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
        .then(res => res.json())
        .then(data => {
            data.forEach((todo) => addTodoToDOM(todo));
        })
    };
    
const addTodoToDOM = (todo) => {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));

    // when adding custom attributes they should start with "data-" so we can later use the .dataset property to read all of them. .dataset is a read-only property of the HTMLElement interface. When we read it (see below in toggleCompleted function) we only access the name without the "data-", so in case of the id just .id (see below);
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

const toggleCompleted = e => {
    // since the eventListener is on the parent div, it would also register the clickevent by clicking in-between the individual todos. That is why we added a class of "todo" to them upon creation, which we can here check for
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');

        // updating the todo with via its id and the class 'done' if it has it. If not, the second argument will be false, which is the Boolean we want to see on the updated object under Completed.
        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    }
}

const updateTodo = (id, completed) => {
    // the URL for the put requests comes from the documentation of the API. Note that the doc only says "/1". It is not clear to me if the 1 is always just an example for the id with the number 1, and thus it can be used like "/2" gets the post with id number 2, etc. This kinda stuff needs to be tested and see what's coming back if docs are unclear like that
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        // since we're only updating the completed property, we can just pass this in as the body
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // we don't even have to do anything with the Promise once we're sure the PUT method works. So we can just get rid of the thens
        // .then(res => res.json())
        // .then(data => console.log(data));
}

const deleteTodo = e => {
    if (e.target.classList.contains('todo')) {
        const id = e.target.dataset.id;
        fetch(`${apiUrl}/${id}`, {
            // we don't need the body or headers here, since it's a delete request
            method: 'DELETE',
        })
        // I don't think we need to get the response here, unless we check for status codes, error or what not
        .then(res => res.json())
        // if it is successfuly deleted from the datatbase, we remove it from the DOM
        .then(() => e.target.remove())
    }
}



const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
}

init();
