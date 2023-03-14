const jwt = require('jsonwebtoken');

const requireToken = (req, res, next) => {
    try {

        let token = req.headers?.authorization;
        if (!token) throw new Error("No Bearer");

        //Esto lo hacemos porque en postman estamos usando formato bearer
        //y separamos el "Bearer" del token y decimos que nos devuelva la posición 1
        //Que corresponde a nuestro token
        token = token.split(" ")[1];

        //Verificamos el token
        const { uid } = jwt.verify(token, process.env.SECRET_TOKEN);

        //Le indicamos que el uid de la req sea el del jwt
        req.uid = uid;

        next()

    } catch (error) {
        console.log(error.message);

        //Vamos a indicar diferentes mensajes para que aparezcan cuando se de uno u otro error:
        const TokenVerificationErrors = {
            'invalid signature': 'JWT Signature is invalid',
            "jwt expired": 'JWT Expired',
            'invalid token': ' the token is invalid',
            'No Bearer': 'Use Bearer format',
            'jwt malformed': 'The jwt format is not correct'
        }
        return res.status(401).json({ error: TokenVerificationErrors[error.message] });
    }
}

module.exports = requireToken;