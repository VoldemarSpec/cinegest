const elements = document.querySelectorAll('[data-movie-id]');

elements.forEach((el) => {
  el.addEventListener('click', () => {
    const movieId = el.getAttribute('data-movie-id');
    window.location.href = `/filmsearch/movie/${movieId}`;
  });
});


const profile_button = document.getElementById("profile")
profile_button.addEventListener('click', async () => {
  const response = await fetch('/api/check_login');
  const data = await response.json();

  if (data.is_logged_in) {
    window.location.href = '/profile'; // Переход в профиль
  } else {
    window.location.href = '/login'; // Переход на логин
  }
});
const logo = document.getElementById("logo")
    logo.addEventListener("click", async ()=>{
      window.location.href ="/"

    })

