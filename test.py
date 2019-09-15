import requests

URL = "http://192.168.1.6:5000/getAmount"
PARAMS = {'id':'abc'} 
r = requests.post(url = URL, data = PARAMS) 
print(r.text)