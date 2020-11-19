const config = require('./config');
const express = require('express');
const server = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

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
    res.send('Hello World!');
});

server.use('/api', videoRouter, userRouter);

//Start the server
server.listen(config.PORT, () =>
    console.log(`Server is running on port ${config.PORT}`)
);
