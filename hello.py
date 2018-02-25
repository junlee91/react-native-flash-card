
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
    session.add(user)
    session.commit()
    return "adsfasdfasdf"


@app.route("/getUsers")
def getstuff():

    users_conn = session.query(User)
    users = users_conn.all()
    return "users"

@app.route("/<int:category_id>/Update")
def getstuff(category_id):
    update_json = {
        "name":"updated_category"
        "description: "updated_description"

    };

    session.commit()

@app.route("/<int:category_id>/Update")
def getstuff(user):
    from sqlalchemy import update

    update_json = {
        "name": "updated_category",
        "description":"updated_description"
    }
    stmt = update(Category).where(category_id == category_id).\
        values(name=update_json["name"],
        description=update_json["description"])
    
    return "Success"

@app.route("/<string:user_name>/Update") 
    def updateUser() {
        update_json {
            "name" = "updated_name",

        }
        stmt = update(User).where(user_name == user_name).\
            values(name = update_json["name"])
    } 
    return "Success"

    
if __name__ == "__main__":
    app.run()

