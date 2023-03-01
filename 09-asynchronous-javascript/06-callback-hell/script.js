function getData(endpoint, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            cb(JSON.parse(this.responseText));
        }
    }

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
}

// the order we get these back is random! Cannot rely on these executing one after another!
// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');


// we can do it like this to keep the order, but this is very much callback hell
getData('./movies.json', (data) => {
    console.log(data);
    getData('./actors.json', (data) => {
        console.log(data);
        getData('./directors.json', (data) => {
            console.log(data)
        })
    })
});