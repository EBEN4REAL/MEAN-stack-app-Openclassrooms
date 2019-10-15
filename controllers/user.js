const bcrypt = require("bcrypt");

const User = require('../models/user');

const jwt = require('jsonwebtoken');


exports.signUp = (req, res , next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hashedPassword => {
            const user = new User({
                email: req.body.email,
                password: hashedPassword
        });

        user.save().then(() => {
            res.status(200).json({
                message: "Saved succesfully"
            })
        }).catch(error => {
            res.status(501).json({
                message: "An error occured",
                error: error
            })
        })
    });
}