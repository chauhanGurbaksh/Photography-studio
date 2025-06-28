const express = require('express');
const userRouter = express.Router();
const { Insertregister, userLogin } = require("../controller/userController")

// Register User (POST /api/register)
userRouter.post('/user_register', Insertregister);

// Login User (POST /api/login)
userRouter.post('/user_login', userLogin);



module.exports = userRouter;
