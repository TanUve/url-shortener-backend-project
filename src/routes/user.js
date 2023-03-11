const userRouter = require('express').Router();


userRouter.post('/register', async (req, res) => {
    res.json({
        error: null,
        data: 'register data'
    })
});
// userRouter.post('/login');
// userRouter.get('/profile');
// userRouter.delete('/delete-profile');

module.exports = userRouter;