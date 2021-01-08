require('dotenv').config();

const secret = process.env.JWT_SECRET || 'secret for development';

const MONGO_URI = process.env.MONGO_URI;

const PORT = process.env.PORT || 3000;

module.exports = {
    MONGO_URI,
    secret,
    PORT,
};
