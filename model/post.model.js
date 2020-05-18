const { Schema, model } = require('mongoose');
const postSchema = new Schema({
    userID: { //Who owns this article?
        type: String,
        required: true
    },
//     image: { // link image
//         type: String,
//         required: true
//     },
    body: { //post content
        type: String,
        required: true
    },
    like: [], // user ID has liked the post
    comment: [{ // user ID has commented the post
        cmt: {
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
