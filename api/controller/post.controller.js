const Post = require('../../model/post.model');
const User = require('../../model/user.model');

module.exports.create = async (req, res) => {
    //Retrive userID, image, body from req.body
    let { userID, body } = req.body;
    // create new Post
    let post = await new Post({ userID, body }).save();
    res.json(post);
}

module.exports.like = async (req, res) => {
    //Retrive postID vs userID from req.body
    let { postID, userID } = req.body;
    // Retrive like from Post
    let { like } = await Post.findById(postID);
    // Create like array
    like.push(userID);
    // Retrive notification from User
    let { notification } = await User.findById(userID);
    //Create notification array
    notification.push({ body:`${userID} liked ${postID}` });
    // find userID vs update notification
    let user = await User.findOneAndUpdate({
        _id: userID
    }, {
        notification: notification
    }, {
        new: true
    })
    // find postID vs update like
    let post = await Post.findOneAndUpdate({
        _id: postID
    }, {
        like: like
    }, {
        new: true
    })
    res.json(user);
}

module.exports.comment = async (req, res) => {
    // Retrive postID, userID , cmt(comment) from req.body
    let { postID, userID, cmt } = req.body;
    // Retrive comment from Post
    let { comment } = await Post.findById(postID);
    //Create comment array
    comment.push({cmt, userID });
    // find postID vs update comment
    let post = await Post.findOneAndUpdate({
        _id: postID
    }, {
        comment: comment
    }, {
        new: true
    })
    res.json(post);
}
