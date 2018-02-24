
from flask import Flask
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/getFlashcards")
def getstuff():

    return "here are all the flashcards you need"


if __name__ == "__main__":
    app.run()
