const getUsers = async () => {
    try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await fetch('http://httpstat.us/404');

        if (!res.ok) {
            // if we throw an Error here, it will go right into the catch block if this returns true
            throw new Error('Request failed');
        }

        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const getPosts = async () => {

        // const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await fetch('http://httpstat.us/500');

        if (!res.ok) {
            // if there is no try catch, this Error will not be caught and it will return "Uncaught Error" again. Instead we can do it on the function call. see below.
            throw new Error('Request failed');
        }

        const data = await res.text();
        console.log(data);
};


// getUsers();

// this here is not preferred. We rather have a try catch and do all the error handling WITHIN the function as in the above getUsers function
getPosts().catch(error => console.log(error));