const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Define the Video schema for the video collection
const Video = new Schema(
    {
        title: { type: String, required: true, unique: true },
        releaseDate: { type: Date, required: true },
        type: { type: String, required: true },
        synopsis: { type: String, required: true },
        coverImage: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('videos', Video);
