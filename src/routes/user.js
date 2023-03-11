const userRouter = require('express').Router();
const User = require('../schemas/User');


userRouter.post('/register', async (req, res) => {

    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })

    } catch (err) {
        res.status(400).json(err)
    }

});
// userRouter.post('/login');
// userRouter.get('/profile');
// userRouter.delete('/delete-profile');

module.exports = userRouter;