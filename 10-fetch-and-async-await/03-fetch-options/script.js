// function createPost(post) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: post.title,
//             body: post.body,
//         })        
//     })
// }

// with destructured post object
function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            'Content-Type': 'application/json',
            // tokens for identification/access or so would go here.
            token: 'abc123',
        }
    }).then(res => res.json())
    // what you usually get back from a POST request is the newly created item/object in a Promise, including any properties that the server added, like the id of a post/object.
      .then(data => console.log(data));
}

createPost({ title: 'My Post', body: 'This is my post'});