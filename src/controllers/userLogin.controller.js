const userController = {};
const jwt = require('jsonwebtoken');


userController.loginUser = async (req, res) => {

    const token = jwt.sign({
        name: req.user.name,
        id: req.user._id,
    }, process.env.SECRET_TOKEN)
    res.header('auth-token', token).json({
        error: null,
        data: token
    })
};


module.exports = userController;