const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { jwtSecret } = require('../configuration')

signToken = (user) => {
    return jwt.sign({
        iss: 'api',
        sub: user._id,
        iat: new Date().getTime(), // current date
        exp: new Date().setDate(new Date().getDate + 1) // current date + one day
    }, jwtSecret);
}

module.exports = {
    signUp: async (req, res, next) => {

        // req.value.body contents
        // console.log('the contents of req.value.body ', req.value.body);
        // console.log('UsersController.signUp() invoked');

        const { email, password } = req.value.body;

        // check if there is same user 
        const foundUser = await User.findOne({email});
        if(foundUser){
            return res.status(403).json({ error: "Email already exists"});
        }

        // create a new user
        const newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();

        // return a token
        // res.json({ user: 'created'});
        const token = signToken(newUser);
        res.status(200).json({ token: token});
    },

    signIn: async (req, res, next) => {
        // console.log('UsersController.signIp() invoked');
    },

    secret: async (req, res, next) => {
        // console.log('UsersController.secret() invoked');
    }
}