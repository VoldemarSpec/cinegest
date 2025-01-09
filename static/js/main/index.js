const films_button = document.getElementById("films_button");
const aboutus_button = document.getElementById("about_us")
const news_button = document.getElementById("news_button")
const profile_button = document.getElementById("profile_button")

films_button.addEventListener("click", ()=>{window.location.href = "/filmsearch"})
aboutus_button.addEventListener("click", ()=>{window.location.href = "/aboutus"})
news_button.addEventListener("click", ()=>{window.location.href = "/news"})
profile_button.addEventListener("click", ()=>{window.location.href = "/p rofile"})