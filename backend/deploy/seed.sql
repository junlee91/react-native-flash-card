
INSERT INTO user (
 name,
 email)
VALUES
 (
 "Coffee",
 "coffee@aaa.com"
 );

 INSERT INTO user (
 name,
 email)
VALUES
 (
 "Hassan",
 "123@aaa.com"
 );

 INSERT INTO user (
 name,
 email)
VALUES
 (
 "Anas",
 "55555@aaa.com"
 );

INSERT INTO category (name, description,  user_id)
	   VALUES ("animal", "ANIMALS!!", 1);

INSERT INTO category (name, description,  user_id)
	   VALUES ("food", "Delicious!!", 1);

INSERT INTO category (name, description,  user_id)
	   VALUES ("sports", "Fun!!!", 2);

INSERT INTO category (name, description,  user_id)
	   VALUES ("Instruments", "Beautiful!", 2);

INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("chicken", "닭", 1, 1);
INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("cow", "소", 1, 1);
INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("sheep", "양", 1, 1);

INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("basketball", "농구", 2, 2);
INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("baseball", "야구", 2, 2);
INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("soccer", "축구", 2, 2);

INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("saxphone", "색소폰", 3, 3);
INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("violin", "바이올린", 3, 3);
INSERT INTO Card(name, translated_name, category_id, user_id)
		VALUES ("drum", "북", 3, 3);






