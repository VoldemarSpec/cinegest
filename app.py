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