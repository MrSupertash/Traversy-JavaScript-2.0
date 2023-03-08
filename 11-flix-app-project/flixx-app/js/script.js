// this here shows us the path of the current page
// console.log(window.location.pathname);

// this here sets the global context
const global = {
    currentPage: window.location.pathname,
};

// console.log(global.currentPage);

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
            console.log('Home');
            break;
        case '/shows.html':
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
document.addEventListener('DOMContentLoaded', init)