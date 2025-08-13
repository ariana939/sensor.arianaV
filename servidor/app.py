from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/sensor", methods=['POST'])
def sensor():
    nombre = request.json["nombre"]
    valor =  request.json ["valor"]  
    print(f"el nombre es {nombre} y el valor es {valor}")
    return "ok"