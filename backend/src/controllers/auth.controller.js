const userModel = require('../models/user.model');  
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const tokenBlacklistModel = require('../models/blacklist.model');   



/**
 * @name registerUserController
 * @description Register a new user,expects username,email and password in the request
 * @acces Public
 */
async function registerUserController(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide username, email, and password' });
    }
    
    const isUserAlreadyExists = await userModel.findOne({ $or: [{ username }, { email }] });    
    if (isUserAlreadyExists) {
        return res.status(400).json({ message: 'Username or email already exists' });
    } 
    
    const hashed = await bcrypt.hash(password, 10);
    const user = await userModel.create({ username, email, password: hashed });  
    
    const token = jwt.sign(
        { id: user._id },
         process.env.JWT_SECRET, 
         { expiresIn: '1d' }
    );

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000
    });
    
    res.status(201).json({ 
        message: 'User registered successfully',
        token: token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
}


/**
 * @name loginUserController
 * @description login a user,expects email and password in the request body
 * @acces Public
 */
async function loginUserController(req,res) {
    const{email,password}=req.body
    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message:"Invalid email"
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid   password"
        })
    }

    const token =jwt.sign(
      {id:user._id,username:user.username},
      process.env.JWT_SECRET,
      {expiresIn:"1d"}
  )
  res.cookie("token",token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 24 * 60 * 60 * 1000
  })

  res.status(201).json({
    message:"user loggedin successfully",
    token: token,
    user:{
       id:user._id,
       username:user.username,
       email:user.email
    }
 })
}

/**
 * @name logoutUserController
 * @description clean token from user cookie and add the token in blacklist
 * @acces Public
 */
async function logoutUserController(req,res){
  const token=req.cookies.token

  if(token){
    await tokenBlacklistModel.create({token})
  }

  res.clearCookie("token")

  res.status(200).json({
    message:"user logged out successfully"
  })
}

/**
 * @name getMeController
 * @description get the current logged in user details
 * @access Private
 */
async function getMeController(req,res){
    const user=await userModel.findById(req.user.id)

    res.status(200).json({
      message:"user details fetched successfully",
      user:{
        id:user._id,
        username:user.username,
        email:user.email
      }
    })

}



module.exports = {  registerUserController , loginUserController, logoutUserController,getMeController};
