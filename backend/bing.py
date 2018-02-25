import requests, requests.utils
import time




from py_bing_search import PyBingWebSearch
	search_term = category
	bing_web = PyBingWebSearch('', search_term, web_only=False) 
	first_fifty_result= bing_web.search(limit=50, format='json') 
	second_fifty_result= bing_web.search(limit=50, format='json') 

	print (second_first_result[0].description)
    