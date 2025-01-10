document.getElementById("search_button").addEventListener("click", async () => {

    const year = document.querySelector('.overlap-15 select').value;
    const genre = document.querySelector('.overlap-16 select').value;
    const region = document.querySelector('.overlap-17 select').value;
    const sort = document.querySelector('.overlap-18 select').value;


    if (!year || !genre || !region || !sort) {
        alert("Please select all filters!")
    } else {
        const body = {
    year: year,
    genre: genre,
    region: region,
    sort: sort,
            };

        try {
    const response = await fetch('/filmsearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();


    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = "";


    data.results.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w154/${movie.picture}" alt="${movie.title}" class="movie-poster">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>Genres: ${movie.genres.join(", ")}</p>
        </div>
      `

      moviesContainer.appendChild(movieCard);
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}})


