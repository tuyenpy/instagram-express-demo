const User = require('../../model/user.model');

//create user
module.exports.signUp = async (req, res) => {
    let { avatar, name, phone, email, password } = req.body;
    let user = await new User({ avatar, name, phone, email, password }).save();
    res.json(user);

}

//login
module.exports.login = async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({
        email: email
    });

    res.json(user);
}