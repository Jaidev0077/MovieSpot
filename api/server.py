from flask import Flask, request, jsonify
import json
import sys
import scrape

app = Flask(__name__)

@app.route("/")
def index():
    return {
        'status': 'Runs'
    }
    pass

@app.route('/sendInput', methods=['POST', 'GET'])
def getInput():
    if request.method == "POST":
        dataVal = request.data
        objectT=json.loads(dataVal)
        toSearch = str(objectT["content"])
        resp = scrape.getSearch(toSearch)
        return { 
            '201': 'Input Recieved',
            'name': toSearch,
            'response': resp,
            }

@app.route('/sendInfo', methods=['POST', 'GET'])
def returnInfo():
    if request.method == "POST":
        dataVal = request.data
        objectT=json.loads(dataVal)
        param = str(objectT["id"])
        print("param", param)
        info = scrape.getInfo(param)
        #description = str(objectT["content"])
        return{
            '201': 'Info recieved',
            'id': param,
            'response': info
        }

if __name__ == '__main__':
  app.run(debug=True)