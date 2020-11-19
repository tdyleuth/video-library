const mongoose = require('mongoose');
let config = require('../config');
mongoose.set('useCreateIndex', true);

mongoose
    .connect(config.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    .then(() => console.log('DB Connected!'))
    .catch((e) => {
        console.error('Connection Error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
