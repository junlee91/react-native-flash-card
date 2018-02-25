
from flask import Flask, render_template, request, redirect, jsonify, \
    url_for, flash, make_response, g
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


'''
id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String(200))
    created_on = Column(DateTime, default=func.now())
    created_by = Column(String(250), nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    user = relationship("User")
    card = relationship("Card")
'''


def _translate(aa):

    return aa + "bb"


@app.route('/newCategory', methods=['POST'])
def newCategory():

    user = session.query(User).filter_by(name="seho").one()

    #name = request.form['name']
    name = "hello"

    #description = request.form['description']
    description = _translate(name)
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


'''
class Card(Base):
    __tablename__ = 'card'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    translated_name = Column(String(250), nullable=False)
    #memorized = Column(Integer)
    memorized_bool = Column(Boolean)
    created_on = Column(DateTime, default=func.now())
    created_by = Column(String(250), nullable=False)
    category = relationship("Category")
    category_id = Column(Integer, ForeignKey('category.id'))
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User")
'''

@app.route('/<int:category_id>/Delete', methods=['POST'])
def delete(category_id):
    if request.method == 'POST':
        Category.query.filter(category.id == category_id).delete()


    return 

@app.route("/<int:category_id>/Card/new", methods=['GET', 'POST'])
def new_Card(category_id):
    user = session.query(User).filter_by(name='seho')
    category = session.query(Category).filter_by(id=category_id).one()
    print("stuff")
    if request.method == 'POST':
        #name = request.form['name']
        name = "random_hello2"
        #category = request.form['category']
        category = "random_category2"
        translated_name = "I am trnaslated stuff."
        # Checks if the user input a name and a description.
        print("things")
        if name and category:
            cards = session.query(Card).filter_by(category_id=1).all()
            print(cards)
            name = name.lower()

            print("asdfasdfasdf")
            for c in cards:
                if c.name.lower() is name:
                    # flash("The %s card is already exists" %
                    #      name)  # NEEDS TO BE DELETED
                    return "Success1"

            created_card = Card(name=name, translated_name=translated_name,
                                category_id=category_id, created_by=user.name,
                                user_id=user.id)
            session.add(created_card)
            session.commit()
            #flash("Successfully created %s" % created_card.name)
            return "Success2"

        else:
            #flash("Please input a name and a category")
            return "Success3"
    else:
        return "Success4"

    return "Success5"


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
