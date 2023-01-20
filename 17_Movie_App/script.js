const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const form = document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL);

async function getMovies(url) {
   
    const result = await fetch(url);
    const data = await result.json();

    showMovies(data.results);
}

function showMovies(movies) {
    MediaDeviceInfo.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
        
          <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            ${overview}
          </div>
    `
        main.appendChild(movieElement);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {

        document.getElementById('main').innerHTML = '';

        getMovies(SEARCH_URL + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
});