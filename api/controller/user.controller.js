const User = require('../../model/user.model');
const { hash, comparePassword } = require('../../config/bcrypt');


//create user
module.exports.signUp = async (req, res) => {
    let { name, phone, email, avatar } = req.body;

    //hash password by bcryptjs
    let password = hash(req.body.password);

    //create user
    let user = new User({ name, phone, email, password, avatar });

    user.save()
        .then()
        .catch(({ message }) => console.log(message));
        
    res.json({user});

}

//login
module.exports.login = async (req, res) => {
    let user = res.locals.user;
    res.json({user});
}