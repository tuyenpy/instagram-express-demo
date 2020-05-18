const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    avatar: {
        type: String,
        required: false
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
    notification: [{
        body: {
            type: String,
            required: false
        },
        status: {         // read or not read
            type: Boolean,
            default: false
        },
        date: {     
            type: Date,
            default: Date.now
        }
    }]
});

const User = model('User', userSchema);

module.exports = User;