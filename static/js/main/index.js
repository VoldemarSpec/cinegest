const films_button = document.getElementById("films_button");
const aboutus_button = document.getElementById("about_us")
const news_button = document.getElementById("news_button")
const profile_button = document.getElementById("profile_button")



films_button.addEventListener("click", async ()=>{window.location.href = "/filmsearch"})
aboutus_button.addEventListener("click", async ()=>{window.location.href = "/aboutus"})
news_button.addEventListener("click", async ()=>{window.location.href = "/news"})
profile_button.addEventListener('click', async () => {
  const response = await fetch('/api/check_login');
  const data = await response.json();

  if (data.is_logged_in) {
    window.location.href = '/profile'; // Переход в профиль
  } else {
    window.location.href = '/login'; // Переход на логин
  }
});




