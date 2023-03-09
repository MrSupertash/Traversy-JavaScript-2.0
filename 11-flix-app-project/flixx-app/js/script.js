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


// Display Movie Details
async function displayMovieDetails() {
    // the following will return the query string, everything after and including the question mark "?" in the URL. We passed that in in the href of the individual cards. We split here at the equal sign, to get the actual value of "?id=4353324" at index 1
    const movieId = window.location.search.split('=')[1];

    const movie = await fetchAPIData(`movie/${movieId}`);
    

    


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="details-top">
    <div>
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
    </div>
    <div>
      <h2>${movie.title}</h2>
      <p>
        <i class="fas fa-star text-primary"></i> ${movie.vote_average.toFixed(1)}
      </p>
      <p class="text-muted">Release Date: ${movie.release_date}</p>
      <p>${movie.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
      ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('')}
      </ul>
      <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
    </div>
  </div>
  <div class="details-bottom">
    <h2>Movie Info</h2>
    <ul>
      <li><span class="text-secondary">Budget:</span> ${movie.budget ? movie.budget.toLocaleString('en-US') : 'N/A'}</li>
      <li><span class="text-secondary">Revenue:</span> ${movie.revenue ? movie.revenue.toLocaleString('en-US') : 'N/A'}</li>
      <li><span class="text-secondary">Runtime:</span> ${movie.runtime ? movie.runtime + ' minutes' : 'N/A'}</li>
      <li><span class="text-secondary">Status:</span> ${movie.status ? movie.status : 'N/A'}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group companies">
    ${movie.production_companies.map(company => `<span>${company.name}</span>`).join(', ')}
    </div>
  </div>
    `
    document.querySelector('#movie-details').appendChild(div);

    // get list of genres. This here was my solution. The above solution is how Brad injected the code right into the ul element
    // const movieGenres = movie.genres;
    // movieGenres.forEach(genre => {
    //     const li = document.createElement('li');
    //     li.textContent = `${genre.name}`;
    //     document.querySelector('.list-group').appendChild(li);
    // });

    // get list of production companies Same here, this was my first solution. I did the above one myself after the genre example
    // const prodCompanies = movie.production_companies;
    // const allCompanyNames = prodCompanies.map(company => company.name).join(', ');
    // const companiesText = document.createTextNode(allCompanyNames);
    // document.querySelector('.companies').appendChild(companiesText);

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
            displayMovieDetails();
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