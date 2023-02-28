const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const joke = JSON.parse(this.responseText);
                jokeElement.textContent = joke.value;
                console.log(joke.value);
            } else {
                jokeElement.textContent = 'Something went wrong';
            }
        }
    }

    xhr.send();
}

jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);