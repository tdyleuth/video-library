const User = require('../models/user-model');
const { secret } = require('../config');
const jwt = require('jsonwebtoken');

//Register new User
signup = (req, res) => {
    const body = req.body;

    const { email } = req.body;

    const user = new User(body);
    user.save()
        .then(() => {
            // Create JWT
            let token = jwt.sign(
                {
                    id: user._id,
                },
                secret,
                { expiresIn: '2h' }
            );
            return res.status(201).json({
                success: true,
                id: user._id,
                email: email,
                message: 'User created!',
                token,
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            });
        });
};

//Login user
loginUser = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (!user) {
            res.status(400).json({
                success: false,
                error: err,
                message: 'Login failed, user not found',
            });
        } else {
            user.comparePassword(password, (err, isMatch) => {
                if (!isMatch) {
                    return res.status(400).json({
                        success: false,
                        error: err,
                        message: 'Entered wrong password',
                    });
                } else {
                    //Create JWT when logged in successful
                    const token = jwt.sign({ email }, secret, {
                        expiresIn: '1h',
                    });
                    res.status(200).json({
                        success: true,
                        email: email,
                        message: 'Logged in Succesfully',
                        token,
                    });
                }
            });
        }
    });
};

module.exports = {
    signup,
    loginUser,
};
