const { Schema, model } = require('mongoose');
const postSchema = new Schema({
    images: [],
    user: {
        id: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }

    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likes: [], // user ID has liked the post
    comments: [{ // user ID has commented the post
        cmt: {
            type: String,
            required: true
        },
        userID: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true,
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
