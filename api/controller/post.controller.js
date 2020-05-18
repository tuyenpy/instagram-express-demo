const Post = require('../../model/post.model');

module.exports.create = async (req, res) => {
    let post = await new Post({ ...req.body }).save();
    res.json(post);
}

module.exports.like = async (req, res) => {
    let { postID, userID } = req.body;
    let { like } = await Post.findById(postID);
    like.push(userID);
    // console.log(like);
    let post = await Post.findOneAndUpdate({
        _id: postID
    }, {
        like: like
    }, {
        new: true
    })
    res.json(post);
}

module.exports.comment = async (req, res) => {
    let { postID, userID, cmt } = req.body;
    let { comment } = await Post.findById(postID);
    comment.push({cmt, userID });
    let post = await Post.findOneAndUpdate({
        _id: postID
    }, {
        comment: comment
    }, {
        new: true
    })
    res.json(post);
}