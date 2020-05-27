const { Schema, model } = require('mongoose');
const postSchema = new Schema({
    images: [],
    user: {
        _id: String,
        avatar: String,
        name: String,
    },
    likes: [], // user ID has liked the post
    comments: [{ // user ID has commented the post
        text: {
            type: String,
            required: false
        },
        userID: {
            type: String,
            required: false
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {  // Date
        type: Date,
        default: Date.now
    }
})

const Post = model('Post', postSchema);

module.exports = Post;
