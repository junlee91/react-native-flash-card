
from flask import Flask, render_template, request, redirect, jsonify, \
    url_for, flash, make_response, g
from sqlalchemy import create_engine, asc, desc, and_
from sqlalchemy.orm import sessionmaker
from database_setup import Base, User, Category, Card
from random import randint

import requests
import pprint


app = Flask(__name__)
app.secret_key = 'asdfasdf'
app.debug = True

engine = create_engine('sqlite:///flashcard.db')

Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)

session = DBSession()


def _translate(aa):
    from googletrans import Translator
    translator = Translator()
    dest = 'ko'
    translated_text = translator.translate(
        aa, dest).text
    return translated_text


def _get_image(search_term):
    search_url = "https://api.cognitive.microsoft.com/bing/v7.0/images/search"

    headers = {"Ocp-Apim-Subscription-Key": "1a18e93243bb415e88efcbf0708e9189"}
    params = {"q": search_term, "license": "public", "imageType": "photo"}
    response = requests.get(search_url, headers=headers,
                            params=params)
    response.raise_for_status()
    search_results = response.json()

    return search_results


@app.route('/newCategory', methods=['POST'])
def newCategory():

    user = session.query(User).filter_by(name="seho").one()

    #name = request.form['name']
    name = "New Category"
    description = "New Description."
    #description = request.form['description']
    created_by = user.name
    category_list = []

    if name and description:
        users = session.query(User).all()
        for c in users:
            lower_name = c.name.lower()
            category_list.append(lower_name)
        if name.lower() in category_list:
            #flash("The %s category is already exists" % name)
            return "Success1"

        new_category = Category(
            name=name, description=description, user_id=user.id, created_by=created_by)
        session.add(new_category)
        session.commit()
        # flash('New Category %s Successfully Created' %
        #      new_category.name)
        return "Success2"
    else:
        flash("We need both name and description")
        return "Success3"
    return "Success4"


@app.route("/<int:category_id>/card/new", methods=['GET', 'POST'])
def new_Card(category_id):

    print("category id: ", category_id)
    user = session.query(User).filter_by(id=1).one()
    category = session.query(Category).filter_by(id=category_id).one()
    if request.method == 'POST':
        content = request.json
        input_text = content["text"]
        #name = request.form['name']
        # This input word is supposed to come from the client.
        #category = request.form['category']
        translated_text = _translate(input_text)
        img_json = _get_image(input_text)

        pp = pprint.PrettyPrinter(indent=4)
        pp.pprint(img_json)
        url = img_json["value"][0]["contentUrl"]

        # Checks if the user input a name and a description.

        created_card = Card(name=input_text, img_url=url, translated_name=translated_text,
                            category_id=category_id, user_id=user.id)
        session.add(created_card)
        session.commit()

    return None


@app.route("/<int:category_id>/update", methods=['GET', 'POST'])
def update_category(category_id):

    # get the cateogory using
    # update
    update_json = {
        "name": "updated_category",
        "descirption": "updated_description"
    }

    stmt = update(Category).where(category.id == category_id).\
        values(name=update_json["name"],
               descirption=update_json["description"])

    return


@app.route("/getUsers")
def getstuff():

    users_conn = session.query(User)
    users = users_conn.all()
    courses_list = [user.serialize for user in users]
    return jsonify(User=courses_list)


@app.route("/getCategories")
def getCategories():
    categories_conn = session.query(Category)
    categories = categories_conn.all()
    category_list = [category.serialize for category in categories]
    return jsonify(Category=category_list)


@app.route("/getCards")
def getCards():
    cards_conn = session.query(Card)
    cards = cards_conn.all()
    card_list = [card.serialize for card in cards[::-1]]
    return jsonify(Card=card_list)


app.route("/<int:user_id>/Update")


def updateUser(user_id):
    from sqlalchemy import update
    update_json = {
        "name": "updated_name",
    }
    stmt = update(User).where(user_id == user_id).\
        values(name=update_json["name"])
    return "Success"


if __name__ == "__main__":
    app.run()
