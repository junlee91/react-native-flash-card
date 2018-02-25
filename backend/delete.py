@app.route('/<int:category_id>/Delete', methods=['POST'])
def delete(category_id):
	if request.method == 'POST':
		Category.query.filter(category.id == category_id).delete()


	return 

@app.route('/<int:card_id>/Delete_Card', methods=['POST'])
def delete_card(card_id):
	if request.method == 'POST':
		Card.query.filter(card.id == card_id).delete()

	return

@app.route('/<int:card_id>/Read_Card', methods=['POST'])
def read_card(card_id):
	if request.method == 'POST':
		Card.query().filter_by(card.id=card_id).first()

	return

@app.route('/<int:card_id>/Read_Category', methods=['POST'])
def read_category(category_id):
	if request.method == 'POST':
		Category.query().filter_by(category.id=category_id).first()

	return
