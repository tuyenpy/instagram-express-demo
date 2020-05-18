const User = require('../../model/user.model');

module.exports.signUp = async (req, res) => {
    let user = await new User({ ...req.body }).save();
    res.json(user);
    
}