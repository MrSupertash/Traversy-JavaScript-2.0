function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));


// with async/await

// async function getAllData() {
//   const movies = await getData('./movies.json');
//   console.log(movies);

//   const actors = await getData('./actors.json');
//   console.log(actors);

//   const directors = await getData('./directors.json');
//   console.log(directors);
// }

async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
  // this here will not run UNTIL the above is all done. The function itself is asynchronous though, so if we do the console.log below in the global scope, it will run and not wait on the async function
  // console.log(123);
}


// async function getAllDataWithFetch() {
//   const movieRes = await fetch('./movies.json');
//   const movies = await movieRes.json();

//   const actorsRes = await fetch('./actors.json');
//   const actors = await actorsRes.json();

//   const directorsRes = await fetch('./directors.json');
//   const directors = await directorsRes.json();

//   console.log(movies, actors, directors);
// }


// async function getAllDataPromiseAll() {
//   // here we are destructuring the response we get into the const variables of that name
//   const [moviesRes, actorsRes, directorsRes] = await Promise.all([
//     fetch('./movies.json'),
//     fetch('./actors.json'),
//     fetch('./directors.json'),
//   ]);

//   // we have the destructured Promise response in the ...Res variable already. see above
//   const movies = moviesRes.json();
//   const actors = actorsRes.json();
//   const directors = directorsRes.json();

//   // the below will just console.log the promises, not the actual data yet
//   console.log(movies, actors, directors);
// }

async function getAllDataPromiseAll2() {
  // here we are destructuring the response we get into the const variables of that name but already assign the json() data to it, not like above
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then(res => res.json()),
    fetch('./actors.json').then(res => res.json()),
    fetch('./directors.json').then(res => res.json()),
  ]);

  // the below will now console.log the data, not the Promises, because of the .then() which we didn't use in the example one above
  console.log(movies, actors, directors);
}


// getAllData();
// this here below runs first! the getAllData() function is async and will run when it's ready.
// console.log(456);

// getAllDataWithFetch();
// getAllDataPromiseAll();
getAllDataPromiseAll2();