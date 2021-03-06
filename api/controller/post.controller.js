const Post = require('../../model/post.model');
const User = require('../../model/user.model');

//get all post
module.exports.index = async (req, res) => {
    let posts = await Post.find();
    res.json({posts});
}   

//create post
module.exports.create = async (req, res) => {
    //Retrive userID, image, body from req.body
    let { images, description, title, userID } = req.body;
    //Find user by userID
    let result = await User.findById(userID);
    // create user
    let user = {
        id: result._id,
        name: result.name,
        avatar: result.avatar
    }
    // create new Post
    await new Post({ images, description, title, user }).save();
    // get all post
    let posts = await Post.find();
    res.json({posts});
}

//like post
module.exports.like = async (req, res) => {
    //Retrive postID vs userID from req.body
    let { postID, userID } = req.body;
    // Retrive like from Post
    let { likes } = await Post.findById(postID);
    // Create like array
    likes.push(userID);
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
    await Post.findOneAndUpdate({
        _id: postID
    }, {
        likes: likes
    }, {
        new: true
    })
    let posts = await Post.find();
    res.json({posts});
}

//comment post
module.exports.comment = async (req, res) => {
    // Retrive postID, userID , cmt(comment) from req.body
    let { postID, userID, cmt, userName } = req.body;
    // Retrive comment from Post
    let { comments } = await Post.findById(postID);
    //Create comment array
    comments.push({cmt, userID, userName });
    // find postID vs update comment
    await Post.findOneAndUpdate({
        _id: postID
    }, {
        comments: comments
    }, {
        new: true
    })
    let posts = await Post.find();
    res.json({posts});
}
