from azure.cosmos import CosmosClient, PartitionKey
import uuid

# Initialize the Cosmos client
endpoint = ""
key = "YOUR_COSMOS_DB_KEY"
client = CosmosClient(endpoint, key)

# Get a reference to the database and container (collection)
database_name = "Tasks"
container_name = "Items"
database = client.get_database_client(database_name)
container = database.get_container_client(container_name)


from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/players', methods=['GET'])
def get_player():
    

# for testing purposes
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.get("/register_new_device")
def register_new_device():
    new_player = str(uuid.uuid4())
    player_document = {
        "id": new_player,
        "playerId": new_player,
        "partitionKey": new_player
    }
    
    # Add new player to the database (give new player a unique id)
    #store new player document
    container.create_item(body=player_document)
    
    return jsonify({"playerId": new_player})

@app.get("/create_room/<player_id>")
def create_room(player_id):
    # Get the smallest unique value for a room
    new_room_id = str(uuid.uuid4())

    new_room_document = {
        "id": new_room_id,
        "roomId": new_room_id,
        "roomStatus":"TBD",
        "partitionKey": player_id
    }

    #store new room document
    container.create_item(body=new_room_document)

    # Store the current player_id into the player_rooms table
    new_player_rooms_document = {
        "id": player_id,
        "roomId": new_room_id,
        "partitionKey": player_id,
        "playerId": new_room_id
    }

    #store new player-room document
    container.create_item(body=new_player_rooms_document)

    return jsonify({"roomId", new_room_id})
    

#check if room exists
@app.get("/check_room/<room_id>")
def check_room(room_id):
    query = "SELECT * FROM c WHERE c.roomId = @roomId"
    items = list(container.query_items(query, parameters=[{"name": "@roomId", "value": "unique_room_id"}]))
        
    if (len(items) == 1):
        return jsonify(message='SUCCESS'), 200
    else:
        return jsonify(message='FAIL'), 404



@app.get("/register_device_in_room/<player_id>/<room_id>")
def register_device_in_room(player_id, room_id):
    return {"p":player_id, "r":room_id}


@app.get("/start_round/<room_id>")
def start_round(room_id):
    # Set the STARTED flag to be true in the rooms table
    query = "SELECT * FROM c WHERE c.roomId = @roomrId"
    items = list(container.query_items(query, parameters=[{"name": "@roomId", "value": "unique_player_id"}]))
    updated_room_document = items[0]
    updated_room_document[item=updated_room_document, body="busy"]
    return "Success", 200

@app.get("/get_status/<room_id>")
def get_status(room_id):
    # Get the current status of the room in the rooms table
    query = "SELECT * FROM c WHERE c.roomId = @roomrId"
    items = list(container.query_items(query, parameters=[{"name": "@roomId", "value": "unique_player_id"}]))
    return items[0]["roomStatus"]


@app.route("/receive_round_data", methods=['POST'])
def receive_round_data():
    data = request.get_json()
    data = request.get_json()
    player_id = data.get('playerId')
    room_id = data.get('roomId')
    round_data = data.get('roundData')

    new_p_r_document = {
        "id": player_id,
        "playerId": player_id,
        "roomId": room_id,
        "roundData": round_data,
        Partitionkey: player_id 

    }
   
    #process the data
    container.create_item(body=new_p_r_document)
    
    response = {
        'message': 'Data received successfully!',
        'playerId': player_id,
        'roomId': room_id,
        'roundData': array_data
    }
    return jsonify(response)

if __name__ == '__main__':
    # make accessible outside of vm
    app.run(host='0.0.0.0', port=8000, debug=True)


