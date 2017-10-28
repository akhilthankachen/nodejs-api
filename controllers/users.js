const User = require('../models/user');

module.exports = {
    signUp: async (req, res, next) => {

        // req.value.body contents
        // console.log('the contents of req.value.body ', req.value.body);
        // console.log('UsersController.signUp() invoked');

        const { email, password } = req.value.body;

        // check if there is same user 
        const foundUser = User.findOne({email: email});
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
        res.json({ user: 'created'});
    },

    signIn: async (req, res, next) => {
        // console.log('UsersController.signIp() invoked');
    },

    secret: async (req, res, next) => {
        // console.log('UsersController.secret() invoked');
    }
}