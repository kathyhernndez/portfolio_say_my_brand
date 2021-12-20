CHATBOT WEB FOR HOTEL PAGE

Design, development, implementation, training of a web chatbot, based on Python using the flask framework, the nltk, nlp, pytorch, numpy libraries to create the neural network and the functioning of the chatbot, sending requests through the server with protocol HTTP (GET, POST)
.............
JSON CORPUS FOR THE CHATBOT WEB HOTEL

Here you find a corpus for use in the training chatbot web for a web page hotel.

KEY WORDS FOR READ THIS JSON:
"intents": this included a dic of key words and responses.
"tag":  identify of words for trains
"responses": response for train bot
"patterns": maybe the input of users
...................

DOCKER IMAGE FLASK SERVER
This is a container DOCKER for running a Flask server for implementing the chatbot interface, conect to the container of React in the frontend APP
In construction

........................

APP
Api flask connection to the server and frontend for send a recieved message to chat bot using flask framework

........................

You can run this app:

1. Clone the repository
2. Install Docker in your pc
3. Inside of directory of chatbot run: docker-compose up -d
4. Flow the url for view the chatbot interface
5. Close the serve with command ctrl + c

..........................

DOCKERFILE 

Is the configuration of enviroment of the flask server app.

DOCKER COMPOSE

Container of image docker in python

...........................

This chatbot is configure for used in the web app hotel, and will be implementing with change of corpus (intents.json) and adapter.

...................................

To run this chat bot:

1. Download or clone the repository
2. create a virtual environment
3. Install the dependencies of the requirements.txt file
4. Run the training application: train.py
5. Run to test the chatbot: chat.py
6. Run the flask server: app.py
7. test the graphical interfaces.

#Note: the connections to the frontend interface are already made in this project with js, and the methods used are htt (post, get)


