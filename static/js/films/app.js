const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

document.getElementById("popular").addEventListener("click", async ()=>{
  const body = {
      type: "popular"
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

      function decodeGenres(genreIds) {
        return genreIds.map((id) => GENRE_MAP[id] || "Unknown");
      }

      data.results.forEach((movie, index) => {
        const decodedGenres = decodeGenres(movie.genres);
        const firstTwoGenres = decodedGenres.slice(0, 2);

        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        movieCard.dataset.movieId = movie.id;

        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w154/${movie.picture}" alt="${movie.title}" class="movie-poster">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${firstTwoGenres.join(", ")}</p>
          </div>
        `;

        moviesContainer.appendChild(movieCard);

        setTimeout(() => {
          movieCard.classList.add("animate");
        }, index * 100);

        const elements = document.querySelectorAll('[data-movie-id]');
        elements.forEach((el) => {
          el.addEventListener('mouseover', () =>{
            el.style.backgroundColor = "#333333"

          })
          el.addEventListener('mouseout', () =>{
            el.style.backgroundColor = "#1a1a1a"

          })

        el.addEventListener('click', () => {
          const movieId = el.getAttribute('data-movie-id');
          window.location.href = `/filmsearch/movie/${movieId}`; //


  });
});

      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
)


document.getElementById("now_playing").addEventListener("click", async ()=>{
  const body = {
      type: "now_playing"
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

      function decodeGenres(genreIds) {
        return genreIds.map((id) => GENRE_MAP[id] || "Unknown");
      }

      data.results.forEach((movie, index) => {
        const decodedGenres = decodeGenres(movie.genres);
        const firstTwoGenres = decodedGenres.slice(0, 2);

        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        movieCard.dataset.movieId = movie.id;

        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w154/${movie.picture}" alt="${movie.title}" class="movie-poster">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${firstTwoGenres.join(", ")}</p>
          </div>
        `;

        moviesContainer.appendChild(movieCard);

        setTimeout(() => {
          movieCard.classList.add("animate");
        }, index * 100);

        const elements = document.querySelectorAll('[data-movie-id]');
        elements.forEach((el) => {
          el.addEventListener('mouseover', () =>{
            el.style.backgroundColor = "#333333"

          })
          el.addEventListener('mouseout', () =>{
            el.style.backgroundColor = "#1a1a1a"

          })

        el.addEventListener('click', () => {
          const movieId = el.getAttribute('data-movie-id');
          window.location.href = `/filmsearch/movie/${movieId}`; //


  });
});

      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
)

document.getElementById("upcoming").addEventListener("click", async ()=>{
  const body = {
      type: "upcoming"
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

      function decodeGenres(genreIds) {
        return genreIds.map((id) => GENRE_MAP[id] || "Unknown");
      }

      data.results.forEach((movie, index) => {
        const decodedGenres = decodeGenres(movie.genres);
        const firstTwoGenres = decodedGenres.slice(0, 2);

        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        movieCard.dataset.movieId = movie.id;

        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w154/${movie.picture}" alt="${movie.title}" class="movie-poster">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${firstTwoGenres.join(", ")}</p>
          </div>
        `;

        moviesContainer.appendChild(movieCard);

        setTimeout(() => {
          movieCard.classList.add("animate");
        }, index * 100);

        const elements = document.querySelectorAll('[data-movie-id]');
        elements.forEach((el) => {
          el.addEventListener('mouseover', () =>{
            el.style.backgroundColor = "#333333"

          })
          el.addEventListener('mouseout', () =>{
            el.style.backgroundColor = "#1a1a1a"

          })

        el.addEventListener('click', () => {
          const movieId = el.getAttribute('data-movie-id');
          window.location.href = `/filmsearch/movie/${movieId}`; //


  });
});

      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
)


document.getElementById("top_rated").addEventListener("click", async ()=>{
  const body = {
      type: "top_rated"
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

      function decodeGenres(genreIds) {
        return genreIds.map((id) => GENRE_MAP[id] || "Unknown");
      }

      data.results.forEach((movie, index) => {
        const decodedGenres = decodeGenres(movie.genres);
        const firstTwoGenres = decodedGenres.slice(0, 2);

        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        movieCard.dataset.movieId = movie.id;

        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w154/${movie.picture}" alt="${movie.title}" class="movie-poster">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${firstTwoGenres.join(", ")}</p>
          </div>
        `;

        moviesContainer.appendChild(movieCard);

        setTimeout(() => {
          movieCard.classList.add("animate");
        }, index * 100);

        const elements = document.querySelectorAll('[data-movie-id]');
        elements.forEach((el) => {
          el.addEventListener('mouseover', () =>{
            el.style.backgroundColor = "#333333"

          })
          el.addEventListener('mouseout', () =>{
            el.style.backgroundColor = "#1a1a1a"

          })

        el.addEventListener('click', () => {
          const movieId = el.getAttribute('data-movie-id');
          window.location.href = `/filmsearch/movie/${movieId}`; //


  });
});

      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
)



document.getElementById("search_button").addEventListener("click", async () => {
  const year = document.querySelector('.overlap-15 select').value;
  const genre = document.querySelector('.overlap-16 select').value;
  const region = document.querySelector('.overlap-17 select').value;
  const sort = document.querySelector('.overlap-18 select').value;

  if (!year || !genre || !region || !sort) {
    alert("Please select all filters!");
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

      function decodeGenres(genreIds) {
        return genreIds.map((id) => GENRE_MAP[id] || "Unknown");
      }

      data.results.forEach((movie, index) => {
        const decodedGenres = decodeGenres(movie.genres);
        const firstTwoGenres = decodedGenres.slice(0, 2);

        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        movieCard.dataset.movieId = movie.id;

        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w154/${movie.picture}" alt="${movie.title}" class="movie-poster">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${firstTwoGenres.join(", ")}</p>
          </div>
        `;

        moviesContainer.appendChild(movieCard);

        setTimeout(() => {
          movieCard.classList.add("animate");
        }, index * 100);

        const elements = document.querySelectorAll('[data-movie-id]');
        elements.forEach((el) => {
          el.addEventListener('mouseover', () =>{
            el.style.backgroundColor = "#333333"

          })
          el.addEventListener('mouseout', () =>{
            el.style.backgroundColor = "#1a1a1a"

          })

        el.addEventListener('click', () => {
          const movieId = el.getAttribute('data-movie-id');
          window.location.href = `/filmsearch/movie/${movieId}`; //


  });
});

      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
})

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