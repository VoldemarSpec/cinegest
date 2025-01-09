from flask import Flask, redirect, session, jsonify, render_template, request
import requests

app = Flask(__name__)

# Bearer Token
BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlOWU3MWNhODJlNjc2OGU0NTM2YTFiNGYwZjY1MyIsIm5iZiI6MTczMzU3NDM1MS41MzIsInN1YiI6IjY3NTQzZWNmYjQ2NzU2MGNkNzA1NGVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DEf1kjOBLv53B3oWCdY1blAeJ7Afe0h9DLlU8duPHKU"

# Заголовки
headers = {
    "accept": "application/json",
    "Authorization": f"Bearer {BEARER_TOKEN}"
}

@app.route('/', methods =["GET", "POST"])
def main_page():
    return render_template('index.html', title = "Hello world!")

@app.route('/filmsearch', methods =["GET", "POST"])
def movies():
    if request.method == 'GET':
        return render_template("films.html")

    elif request.method == 'POST':
        data = request.get_json()

        url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year={data["year"]}&region={data["region"]}&sort_by={data["sort"]}&with_genres={data["genre"]}"

        headers = {
            "accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlOWU3MWNhODJlNjc2OGU0NTM2YTFiNGYwZjY1MyIsIm5iZiI6MTczMzU3NDM1MS41MzIsInN1YiI6IjY3NTQzZWNmYjQ2NzU2MGNkNzA1NGVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DEf1kjOBLv53B3oWCdY1blAeJ7Afe0h9DLlU8duPHKU"
        }
        response = requests.get(url, headers=headers)
        a = []
        for i in range(0, 10):
            a.append({"title": response.json()["results"][i]["title"],
                    "genres": response.json()["results"][i]["genre_ids"],
                    "picture": response.json()["results"][i]["poster_path"]
                    })

        return jsonify({"results": a})



app.run(debug=False)





# "title": response.json()["results"][i]["title"],
#                     "genres": response.json()["results"][i]["genre_ids"],
#                     "releases": response.json()["results"][i]["release_date"],
#                     "picture": response.json()["results"][i]["poster_path"],
#                     "runtime": requests.get(f"https://api.themoviedb.org/3/movie/{response.json()["results"][i]["id"]}", headers=headers).json()["runtime"],
#                     "overview": response.json()["results"][i]["overview"],
