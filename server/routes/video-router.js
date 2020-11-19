const express = require('express');

const {
    createVideo,
    updateVideo,
    deleteVideo,
    getVideoById,
    getVideos,
} = require('../controllers/video-ctrl');

//Video Routes
const router = express.Router();

router.post('/video', createVideo);
router.put('/video/:id', updateVideo);
router.delete('/video/:id', deleteVideo);
router.get('/video/:id', getVideoById);
router.get('/videos', getVideos);

module.exports = router;
