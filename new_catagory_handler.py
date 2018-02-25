def getstuff(category_id):
    from sqlalchemy import update

    update_json = {
        "name": "updated_category",
        "description":"updated_description"
    }
    stmt = update(Category).where(category_id == category_id).\
        values(name=update_json["name"],
        description=update_json["description"])
    
    return "Success"
