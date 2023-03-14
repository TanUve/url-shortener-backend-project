
const jwt = require('jsonwebtoken');

const generateToken = (uid) => {

    const expiresIn = 60 * 15;
    //Desués le pasamos la constante al token para que lo tenga en cuenta e indique que dura 15'
    try {
        const token = jwt.sign({ uid }, process.env.SECRET_TOKEN, { expiresIn })
        return ({ token, expiresIn })

    } catch (error) {
        console.log(error);
    }
}




module.exports = generateToken;