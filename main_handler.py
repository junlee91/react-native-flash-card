
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


@app.route("/<int:category_id>/Card/new", methods=['GET', 'POST'])
def new_Card(category_id):
    category = session.query(Category).filter_by(id=category_id).one()
    user = session.query(User).filter_by(id=get_user_id(login_session)).one()
    if request.method == 'POST':
        name = request.form['name']
        category = request.form['category']
        # Checks if the user input a name and a description.
        if name and description:
            cards = session.query(Card).filter_by(category_id=course.id)
            name = name.lower()
            for c in cards:
                if c.name.lower() is name:
                    flash("The %s card is already exists" %
                          name)  # NEEDS TO BE DELETED
                    return render_template('newCard.html', course=course,   # NEEDS TO BE REMOVED
                                           description=description, name=name)
                else:
                    created_card = Card(name=name, description=description,
                                        category_id=category_id, created_by=user.name,
                                        user_id=user.id)
                    session.add(created_card)
                    session.commit()
                    flash("Successfully created %s" % created_card.name)
                    return redirect(url_for('show_cards', category_id=course.id))
        else:
            flash("Please input a name and a category")
            return render_template('newCard.html', course=course,
                                   description=description, name=name)
    else:
        return render_template('newCard.html', course=course)


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
