// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();

/* Dependencies */

const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder

app.use(express.static('website'));


// Spin up the server

const port = 8000;

const server = app.listen(port, listening);

function listening(){
    console.log(`running on localhost: ${port}`);
}

// Callback to debug



// Initialize all route with a callback function

// Callback function to complete GET '/all'

app.get('/all', sendData);

function sendData (request, response) {
response.send(projectData);
};
// Post Route
app.post('/add', callBack);

function callBack(request,response){

response.send('POST received');

console.log(request.body);

newData = {
    temp: request.body.temp,
    date: request.body.date,
    content: request.body.content,
}
projectData=newData;
}
