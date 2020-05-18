const User = require('../../model/user.model');

module.exports.signUp = async (req, res) => {
    let { avatar, name, phone, email, password } = req.body;
    let user = await new User({ avatar, name, phone, email, password }).save();
    res.json(user);

}