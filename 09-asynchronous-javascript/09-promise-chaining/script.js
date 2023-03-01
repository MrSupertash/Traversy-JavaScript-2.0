const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  //whatever is after the catch will run no matter what. Here though, when there is no error, the catch statement will not return anything, so we cannot use it in the next then. We can use however, something that does not rely on a return from the catch, such as a simple console.log('After the catch'). Tricky. But it seems not really sensible to do something after the catch, instead using .finally() if really necessary is probably the way better option
  .then((x) => {
    console.log(x)
  });