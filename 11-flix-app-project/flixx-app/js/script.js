// this here shows us the path of the current page
// console.log(window.location.pathname);

// this here sets the global context
const global = {
    currentPage: window.location.pathname,
};

// Display 20 most popular movies
async function displayPopularMovies() {
    // the response object has the data in a "results" array. so here we are destructuring it
    const { results } = await fetchAPIData('movie/popular');

    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
            ${  // if movie.poster_path is not null/falsy, show image, otherwise show dummy No Image image.
                movie.poster_path
                ? `<img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                class="card-img-top"
                alt="${movie.title}"
              />`
                : `<img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${movie.title}"
              />`
            }

            
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `
    
        document.getElementById('popular-movies').appendChild(div);

    })
    console.log(results);
}

// Display 20 most popular TV shows
async function displayPopularShows() {
    // the response object has the data in a "results" array. so here we are destructuring it
    const { results } = await fetchAPIData('tv/popular');

    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="tv-details.html?id=${show.id}">
            ${  // if movie.poster_path is not null/falsy, show image, otherwise show dummy No Image image.
                show.poster_path
                ? `<img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
              />`
                : `<img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${show.name}"
              />`
            }

            
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">First aired: ${show.first_air_date}</small>
            </p>
          </div>
        `
    
        document.getElementById('popular-shows').appendChild(div);

    })
    console.log(results);
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    // DO NOT push the key to GitHUB, delete the key beforehand! Investigate env files and how to gitignore it or something. We should store the key and make requests from a server.
    const API_KEY = '';    
    const API_URL = 'https://api.themoviedb.org/3/';

    showSpinner();

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

    const data = await response.json();

    hideSpinner();

    return data;
}


//Toggle spinner
function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
};

function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

// Highlight active Link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    })

    // this here does not seem like the best solution to catch the index.html. We could also add specific IDs to the HTML elements and just check for them. I'm going with this for now but would need to be careful when I add more links in the navbar and Movies is not the first one anymore.
    if (global.currentPage === '/index.html') {
        links[0].classList.add('active');
    }
}


// Init App
function init() {

    // Routing depending on the page we're on
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            console.log('Home');
            break;
        case '/shows.html':
            displayPopularShows();
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }

    highlightActiveLink();
}

// calling init upon DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
console.error('Hide API Key before every gitHub push!');
alert('Hide API Key before every gitHub push!')