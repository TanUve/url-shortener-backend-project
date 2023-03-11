
var userRouter = require('express').Router();


userRouter.post('/register');
userRouter.post('/login');
userRouter.get('/profile');
userRouter.delete('/delete-profile');

module.exports = userRouter;