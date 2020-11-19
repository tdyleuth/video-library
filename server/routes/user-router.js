const express = require('express');

const { signup, loginUser } = require('../controllers/auth-ctrl');

const {
    updateUser,
    getUsers,
    deleteUser,
    getUserById,
} = require('../controllers/user-ctrl');

// User Routes
const router = express.Router();

router.post('/user/signup', signup);
router.post('/user/login', loginUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/users', getUsers);
router.get('/user/:id', getUserById);

module.exports = router;
