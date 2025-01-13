const elements = document.querySelectorAll('[data-movie-id]');

elements.forEach((el) => {
  el.addEventListener('click', () => {
    const movieId = el.getAttribute('data-movie-id');
    window.location.href = `/filmsearch/movie/${movieId}`;
  });
});
