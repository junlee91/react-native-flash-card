@app.route('/newCatagory', methods=['POST'])
def newCategory():
	if request.method == 'POST':
		name = request.form['name']
		description = request.form['description']
		created_by = user.name
		category_list = []
		if name and description:
			user = session.query(User).order_by(asc(name))
			for c in user:
				lower_name = c.name.lower()
				category_list.append(lower_name)
			if name.lower() in category.list
				flash("The %s category is already exists" % name)
				return render_template('newCategory.html', description=description, name=name)
            else:
                new_catagory = catagory(name=name, description=description, user_id=user.id, created_by=user.name)
                session.add(new_category)
                session.commit()
                flash('New Category %s Successfully Created' % new_category.name)
                return redirect(url_for('show_categories'))
        else:
            flash("We need both name and description")
            return render_template('newCategory.html')
    else:
return render_template('newCategory.html')