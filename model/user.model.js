const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    avatar: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [],
    followers: [],
    following: [],
    saved: [],
    notification: [{
        body: {
            type: String,
            required: true
        },
        status: {         // read or not read
            type: Boolean,
            default: false
        },
        date: {     
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const User = model('User', userSchema);

module.exports = User;