@app.route('/<int:category_id>/Delete', methods=['POST'])
def delete(category_id):
	if request.method == 'POST':
		Category.query.filter(category.id == category_id).delete()


	return 