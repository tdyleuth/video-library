require('dotenv').config();
const config = require('./config');
const express = require('express');
const server = express();
const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
server.use(express.static(path.join(__dirname, 'client', 'build')));

const db = require('./db');
const videoRouter = require('./routes/video-router');
const userRouter = require('./routes/user-router');

//Middleware
server.use(cors());
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//Connect to MongoDB
db.on('error', console.error.bind(console, 'Mongo connection error:'));

server.get('/', (req, res) => {
    res.send('WELCOME TO THE VIDEO LIBRARY API');
});

server.use('/api', videoRouter, userRouter);

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
//Start the server
server.listen(config.PORT, () =>
    console.log(`Server is running on port ${config.PORT}`)
);
