const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

//Define User schema for the user collection

const User = new Schema(
    {
        email: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
            unique: true,
            index: true,
        },

        password: {
            type: String,
            minlength: 6,
            required: [true, "can't be blank"],
        },
    },
    { timestamps: true }
);

User.plugin(uniqueValidator, { message: 'is already taken.' });

//
const bcrypt = require('bcrypt');
let SALT = 10;

//Hash password before storing in DB
User.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next();
    }

    // Generate a salt
    bcrypt.genSalt(SALT, (err, salt) => {
        if (err) return next(err);

        // Hash the password using our new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            // Override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

//Compare passwords

User.methods.comparePassword = function (enteredPassword, checkedPassword) {
    bcrypt.compare(enteredPassword, this.password, function (err, isMatch) {
        if (err) {
            return checkedPassword(err, false);
        }
        return checkedPassword(null, isMatch);
    });
};

module.exports = mongoose.model('user', User);
