require('dotenv').config();

const secret = process.env.JWT_SECRET || 'secret for development';

const MONGO_URI =
    process.env.MONGO_URI ||
    'mongodb+srv://tdyleuth:Thrice909!@cluster0.jgo74.mongodb.net/videos?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;

module.exports = {
    MONGO_URI,
    secret,
    PORT,
};
