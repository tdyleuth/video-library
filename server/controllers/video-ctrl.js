const Video = require('../models/video-model');

//Create a Video and store in DB
createVideo = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a video',
        });
    }

    const video = new Video(body);

    if (!video) {
        return res.status(400).json({
            success: false,
            error: err,
        });
    }

    video
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: video._id,
                message: 'Video created!',
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: 'Video not created, title may already exist',
            });
        });
};

//Updates existing Video from DB using Video id
updateVideo = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    Video.findOne({ _id: req.params.id }, (err, video) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Video not found!',
            });
        }
        video.title = body.title;
        video.releaseDate = body.releaseDate;
        video.type = body.type;
        video.synopsis = body.synopsis;
        video.coverImage = body.coverImage;
        video.rating = body.rating;

        video
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: video._id,
                    message: 'Video updated!',
                });
            })
            .catch((error) => {
                return res.status(404).json({
                    error,
                    message: 'Video not updated!',
                });
            });
    });
};

//Deletes a video from DB
deleteVideo = async (req, res) => {
    await Video.findOneAndDelete({ _id: req.params.id }, (err, video) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!video) {
            return res
                .status(404)
                .json({ success: false, error: 'Video not found' });
        }

        return res.status(200).json({
            success: true,
            message: 'Video deleted successfully',
            data: video,
        });
    }).catch((err) => console.log(err));
};

//Get all videos from DB
getVideos = async (req, res) => {
    await Video.find({}, (err, videos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!videos.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Video not found' });
        }
        return res.status(200).json({
            success: true,
            data: videos,
        });
    }).catch((err) => console.log(err));
};

// Get video by Id
getVideoById = async (req, res) => {
    await Video.findOne({ _id: req.params.id }, (err, video) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!video) {
            return res
                .status(404)
                .json({ success: false, error: 'Video not found' });
        }
        return res
            .status(200)
            .json({ success: true, message: 'Video found!', data: video });
    }).catch((err) => console.log(err));
};

module.exports = {
    createVideo,
    updateVideo,
    deleteVideo,
    getVideos,
    getVideoById,
};
