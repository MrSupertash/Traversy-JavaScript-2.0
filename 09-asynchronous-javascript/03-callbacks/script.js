// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(post => {
      const div = document.createElement('div');
      const strong = document.createElement('strong');
      const textTitle = document.createTextNode(post.title);
      const textSeparator = document.createTextNode(' - ');
      const textBody = document.createTextNode(post.body);
      strong.appendChild(textTitle);
      div.appendChild(strong);
      div.appendChild(textSeparator);
      div.appendChild(textBody);

      document.querySelector('#posts').appendChild(div);
    })
  }, 1000);
}

// since createPost lasts 2000 milliseconds and getPosts only 1000, the newly created post will not be yet be included when getPosts executes
// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();


// to prevent above issue, instead of calling them separately, we will pass in getPosts as a callback to createPosts, so it is definitely run AFTER the new Post has been created. Not the "cb()" in the createPost function

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);