const userController = {};
const jwt = require('jsonwebtoken');


userController.loginUser = async (req, res) => {
    //le indicamos la  duración del validez del token:
    const expiresIn = 60 * 15;
    //Desués le pasamos la constante al token para que lo tenga en cuenta e indique que dura 15'
    try {
        const token = jwt.sign({ name: req.user.name, uid: req.user._id, }, process.env.SECRET_TOKEN, { expiresIn })
        res.json({ token, expiresIn })
    } catch (error) {
        console.log(error);
    }

};


module.exports = userController;