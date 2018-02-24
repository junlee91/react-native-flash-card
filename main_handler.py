
from flask import Flask
from sqlalchemy import create_engine, asc, desc, and_
from sqlalchemy.orm import sessionmaker
from database_setup import Base, User, Category, Card


app = Flask(__name__)
app.secret_key = 'asdfasdf'
app.debug = True

engine = create_engine('sqlite:///flashcard.db')

Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)

session = DBSession()


import new_catagory_handler
import new_card_handler


@app.route("/populate")
def populate():
    user = session.query(User).filter_by(name='seho')
    user = session.get()
    new_catagory = Category()

    return "adsfasdfasdf"


@app.route("/getUsers")
def getstuff():

    users_conn = session.query(User)
    users = users_conn.all()
    return "users"


if __name__ == "__main__":
    app.run()
