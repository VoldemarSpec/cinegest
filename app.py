from flask import Flask, redirect, session, jsonify, render_template, request
import requests

app = Flask(__name__, static_folder='static')
headers = {
            "accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlOWU3MWNhODJlNjc2OGU0NTM2YTFiNGYwZjY1MyIsIm5iZiI6MTczMzU3NDM1MS41MzIsInN1YiI6IjY3NTQzZWNmYjQ2NzU2MGNkNzA1NGVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DEf1kjOBLv53B3oWCdY1blAeJ7Afe0h9DLlU8duPHKU"
        }


@app.route('/', methods =["GET", "POST"])
def main_page():
    return render_template('index.html', title = "Cinegest")

@app.route('/filmsearch', methods =["GET", "POST"])
def get_movies():
    if request.method == 'GET':
        return render_template("films.html")

    elif request.method == 'POST':
        data = request.get_json()
        print(data["region"])
        url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year={data["year"]}&region={data["region"]}&sort_by={data["sort"]}&with_genres={data["genre"]}"

        response = requests.get(url, headers=headers)
        return_data = []
        for i in range(0, len(response.json()["results"])):
            return_data.append({"title": response.json()["results"][i]["title"],
                    "genres": response.json()["results"][i]["genre_ids"],
                    "picture": response.json()["results"][i]["poster_path"],
                      "id": response.json()["results"][i]["id"]
                    })

        return jsonify({"results": return_data})

@app.route('/filmsearch/movie/<int:movie_id>')
def get_movie(movie_id):
    if request.method == 'GET':
        trailer_url = f"https://api.themoviedb.org/3/movie/{movie_id}/videos"
        trailer_response = requests.get(trailer_url, headers=headers)
        trailer = ""
        for i in range(0, len(trailer_response.json()["results"])):
            if trailer_response.json()["results"][i]["site"] == "YouTube" and trailer_response.json()["results"][i]["type"] == "Trailer":
                trailer = trailer_response.json()["results"][i]["key"]
                break
            else:
                continue
        if trailer == "":
            trailer = None



        review_url = f"https://api.themoviedb.org/3/movie/{movie_id}/reviews"
        review_response = requests.get(review_url, headers=headers)
        review_data = []
        if review_response.json()["results"] != []:
            review_status = "Reviews"
            for i in review_response.json()["results"]:
                review_data.append({"author": i["author"],
                                    "content": i["content"]})
        else: review_status = "No reviews yet"


        similar_url = f"https://api.themoviedb.org/3/movie/{movie_id}/similar"
        similar_response = requests.get(similar_url, headers=headers)
        similar_data = []
        for i in similar_response.json()["results"]:
            similar_data.append({"poster_path": i["poster_path"],
                                "title": i["title"],
                                 "id":i["id"]
                                 })




        url = f"https://api.themoviedb.org/3/movie/{movie_id}"
        response = requests.get(url, headers=headers)


        return_data = {"title": response.json()["title"],
                    "genres": ",".join([i["name"] for i in response.json()["genres"]]),
                    "release_date": response.json()["release_date"] ,
                    "picture": response.json()["poster_path"],
                    "runtime": response.json()["runtime"],
                    "overview": response.json()["overview"],
                    "tagline": response.json()["tagline"],
                    "trailer": trailer,
                    "production_countries": ",".join([i["iso_3166_1"] for i in
                                  response.json()["production_countries"]]),
                    "reviews": review_data,
                    "review_status": review_status,
                    "similar": similar_data
                       }

        return render_template("details.html", content=return_data)


app.run(debug=False)











