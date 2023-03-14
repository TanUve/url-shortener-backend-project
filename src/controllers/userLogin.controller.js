const userController = {};
const generateToken = require('../utils/tokenManager.js');


userController.loginUser = async (req, res) => {
    //le indicamos la  duración del validez del token:
    const expiresIn = 60 * 15;
    //Desués le pasamos la constante al token para que lo tenga en cuenta e indique que dura 15'
    try {
        const { token, expiresIn } = generateToken(req.user._id);
        return res.json({ token, expiresIn });
 
    } catch (error) {
        console.log(error);
    }

};


module.exports = userController;