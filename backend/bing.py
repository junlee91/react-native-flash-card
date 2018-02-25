from py_bing_search import PyBingImageSearch
from random import randint
	
def Image(name)
	bing_image = PyBingImageSearch('1a18e93243bb415e88efcbf0708e9189', "name") 
	first_ten_result= bing_image.search(limit=10, format='json') #1-50
	url = (first_ten_result[randint(0,9)].media_url)

	return url