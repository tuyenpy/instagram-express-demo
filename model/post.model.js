const { Schema, model } = require('mongoose');
const postSchema = new Schema({
    userID: { //Who owns this article?
        type: String,
        required: true
    }
    body: { //post content
        type: String,
        required: true
    },
    like: [
        userID: { // user ID has liked the post
            type: String,
            required: true
        }
    ],
    comment: [{ // user ID has commented the post
        text: {
            type: String,
            required: true
        },
        userID: {
            type: String,
            required: true
        }
    }],
    date: {  // Date
        type: Date,
        default: Date.now
    }
})

const Post = model('Post', postSchema);

module.exports = Post;