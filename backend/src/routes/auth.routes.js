const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/auth.controller');   
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post('/register', authController.registerUserController);


/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post('/login', authController.loginUserController);


/**
 * @route POST /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */
authRouter.get("/logout",authController.logoutUserController)

/**
 * @route POST /api/auth/get-me
 * @description get the currrent logged in user details
 * @access Private
 */
authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)

module.exports = authRouter;
