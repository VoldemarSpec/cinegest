# 🎬 Cinegest

**Cinegest** is a Flask web application created as a university project for the course *Designing Interfaces*.
The app allows users to search for movies using **The Movie Database (TMDb) API** and explore trailers, reviews, and additional information.

The interface was designed in **Figma** and converted to code using a Figma-to-code module, making the UI visually clean and user-friendly. **Note:** All buttons except the Search button are purely part of the UI mockup and are non-functional.

---

## ⚙️ Features

* Search movies by different filters (genre, year, region, sort order).
* Click on a movie to view detailed information:

  * Trailer (YouTube)
  * Overview and tagline
  * Runtime, release date, production countries
  * Reviews from TMDb
  * Similar movies suggestions
* User authentication:

  * Register, login, logout
  * Profile page
* News and About Us pages for additional content. **Note:** Except for the Search functionality, other buttons/pages are mockups only.

---

## 🛠 Technologies

* Python 3
* Flask
* Requests (for API calls)
* TMDb API
* HTML/CSS for templates
* Figma-to-code for interface design

---

## ⚙️ Installation & Running

1. Clone the repository:

```bash
git clone https://github.com/VoldemarSpec/cinegest.git
cd repository
```

2. Install dependencies:

```bash
pip install flask requests
```

3. Run the app:

```bash
python app.py
```

4. Open your browser and go to:

```
http://127.0.0.1:5000/
```

---

## 📖 Usage

1. Go to the main page and browse movies.
2. Use search filters or categories to find films.
3. Click on a movie to see trailer, reviews, and detailed information.
4. Register or login to access profile-related features.
5. Navigate to News or About Us for additional content. **Note:** Only the Search button is functional; other buttons are mockups.

---

## 📜 License

MIT
