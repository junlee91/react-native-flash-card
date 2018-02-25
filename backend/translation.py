


from googletrans import Translator


#@app.route("/Card/Translate")
def translate():
	translations = translator.translate(['The quick brown fox', 'jumps over', 'the lazy dog'], dest='ko')
	for translation in translations:
		print(translation.origin, ' -> ', translation.text)
t