const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

// user model
const User = mongoose.model('user', userSchema);

// export model
module.exports = User;