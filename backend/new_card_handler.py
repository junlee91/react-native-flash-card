@app.route("/<int:category_id>/Card/new", methods=['GET', 'POST'])
def new_Card(category_id):
    category = session.query(Course).filter_by(id=category_id).one()
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
