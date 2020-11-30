require('dotenv').config();

TOKENSecret = process.env.JWT_SECRET || 'Secret';

MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/videos';

PORT = process.env.PORT || 3000;

module.exports = {
    MONGO_URI,
    TOKENSecret,
    PORT,
};
