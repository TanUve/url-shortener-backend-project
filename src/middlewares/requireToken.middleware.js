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

        //Le indicamos que el uis de la req sea el del jwt
        req.uid = uid;

        next()

    } catch (error) {
        console.log(error.message);
        return res.status(401).json({ error: error.message });
    }
}

module.exports = requireToken;