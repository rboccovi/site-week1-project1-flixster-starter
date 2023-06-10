// Set the API key for accessing movie data
const apiKey = "525668c32f48f1cb8fc0832c59ff5bd5";

//  the URL for retrieving NOW playing movies
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

// Get references to various elements in the HTML
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const clearResultsBtn = document.getElementById("clear-results-btn");
const loadMoreMoviesBtn = document.getElementById("load-more-movies-btn");
const moviesGrid = document.getElementById("movies-grid");

// Initialize page and previousMovies array
let page = 1;
let previousMovies = [];

async function fetchMovies(url) {
  const response = await fetch(url);
  const data = await response.json();
  const movies = data.results;

  moviesGrid.innerHTML = ""; // Clear the current grid  

  movies.forEach(movie => {
    const movieWrapper = createMovieCard(movie);
    moviesGrid.appendChild(movieWrapper);
  });
}
// Search movies based on the given query
async function searchMovies(query) {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  const response = await fetch(searchUrl);
  const data = await response.json();
  const movies = data.results;
 
  moviesGrid.innerHTML = ""; // Clear the current grid

  previousMovies.forEach(movie => {
    const movieWrapper = createMovieCard(movie);
    moviesGrid.appendChild(movieWrapper);
  });

    // Create and append movie card elements for each movie
  movies.forEach(movie => {
    const movieWrapper = createMovieCard(movie);
    moviesGrid.appendChild(movieWrapper);
  });

  // Update the previousMovies array
  previousMovies = movies; 
}

// Create a movie card element based on the movie object
function createMovieCard(movie) {
  const movieWrapper = document.createElement("div");
  movieWrapper.classList.add("movie-card");

  const title = document.createElement("h2");
  title.classList.add("movie-title");
  title.textContent = movie.title;

  const poster = document.createElement("img");
  poster.classList.add("movie-poster");
  poster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  const votes = document.createElement("p");
  votes.classList.add("movie-votes");
  votes.textContent = `⭐️ Rating: ${movie.vote_average}`;

  movieWrapper.appendChild(title);
  movieWrapper.appendChild(poster);
  movieWrapper.appendChild(votes);

  return movieWrapper;
}

function clearResults() {
  moviesGrid.innerHTML = ""; // Clear the current grid
  previousMovies.forEach(movie => {
    const movieWrapper = createMovieCard(movie);
    moviesGrid.appendChild(movieWrapper);
  });
  previousMovies = []; // Clear the previousMovies array
}

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    searchMovies(searchTerm);
  }
});

clearResultsBtn.addEventListener("click", function(event) {
  event.preventDefault();
  clearResults();
});

//EventListner for load more button
loadMoreMoviesBtn.addEventListener("click", function(event) {
  event.preventDefault();
  fetchMovies(nowPlayingUrl + `&page=${page}`);
  page++;
});


// Add alt text to movie posters
const moviePosters = document.querySelectorAll('.movie-poster');
moviePosters.forEach(poster => {
  const movieTitle = poster.parentElement.querySelector('.movie-title').textContent;
  poster.alt = `${movieTitle} Poster`;
});

const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupContainer = document.getElementById('popupContainer');

//Eventlistener for popup
openPopupButton.addEventListener('click', function() {
  popupContainer.style.display = 'flex';
});

closePopupButton.addEventListener('click', function() {
  popupContainer.style.display = 'none';
});

fetchMovies(nowPlayingUrl);






