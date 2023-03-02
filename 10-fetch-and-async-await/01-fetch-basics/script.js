// Fetching a JSON file

// fetch('./movies.json')
//     // the first promise that we get back from the fetch method is a Response object. Here we return another promise that parses this response stream text as JSON. Very confusing right now.
//     .then(response => {
//         return response.json();
//     })
//     // what is returned can then() be read as JSON
//     .then((data) => {
//         console.log(data);
//     })


//! If you don't specify which request you make, it will default to a GET request!

// A bit cleaner, more concise
fetch('./movies.json')
    .then(response => response.json())
    .then(data => console.log(data))

// Fetching a text file
fetch('./test.txt')
    .then(response => response.text())
    .then(data => console.log(data))

// Fetching from an API
fetch('https:api.github.com/users/mrsupertash')
    .then(response => response.json())
    .then(data => (document.querySelector('h1').textContent = data.login));
