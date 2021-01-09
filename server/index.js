require('dotenv').config();
const config = require('./config');
const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const db = require('./db');
const videoRouter = require('./routes/video-router');
const userRouter = require('./routes/user-router');

//Middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to MongoDB
db.on('error', console.error.bind(console, 'Mongo connection error:'));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', videoRouter, userRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
//Start the server
app.listen(config.PORT, () =>
    console.log(`Server is running on port ${config.PORT}`)
);
