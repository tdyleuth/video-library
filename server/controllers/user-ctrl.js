const User = require('../models/user-model');

//Update existing User email and/or password
updateUser = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            });
        }
        user.email = body.email;
        user.password = body.password;

        user.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User info updated!',
                });
            })
            .catch((error) => {
                return res.status(404).json({
                    error,
                    message: 'User in not updated!',
                });
            });
    });
};

//Delete user from DB
deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'User not found' });
        }

        return res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: user,
        });
    }).catch((err) => console.log(err));
};

//Get all Users from DB
getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Users not found' });
        }
        return res.status(200).json({
            success: true,
            data: users,
        });
    }).catch((err) => console.log(err));
};

// Get User by Id from DB
getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'User not found' });
        }
        return res
            .status(200)
            .json({ success: true, message: 'User found!', data: user });
    }).catch((err) => console.log(err));
};

module.exports = {
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
};
