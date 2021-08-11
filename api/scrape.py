import requests

def getSearch(name):
  url = "https://movie-database-imdb-alternative.p.rapidapi.com/"

  querystring = {"s":name,"page":"1","r":"json"}

  headers = {
      'x-rapidapi-key': "Insert Rapid API key here",
      'x-rapidapi-host': "movie-database-imdb-alternative.p.rapidapi.com"
      }
  response = requests.request("GET", url, headers=headers, params=querystring)
  return response.text

def getInfo(id):
  url = "https://movie-database-imdb-alternative.p.rapidapi.com/"

  querystring = {"i": id,"r":"json"}

  headers = {
      'x-rapidapi-key': "Insert Rapid API key here",
      'x-rapidapi-host': "movie-database-imdb-alternative.p.rapidapi.com"
      }

  response = requests.request("GET", url, headers=headers, params=querystring)

  print(response.text)
  return response.text