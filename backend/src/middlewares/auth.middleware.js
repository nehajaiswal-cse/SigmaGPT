
const Jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model.js");
async function authUser(req, res, next){
   const token = req.cookies.token;
   if (!token) {
      return res.status(401).json({
        message: "Unauthorized, token not found"    
      })
    }
    const blacklistToken = await tokenBlacklistModel.findOne({ token });
    if (blacklistToken) {
      return res.status(401).json({ message: "Unauthorized, token is blacklisted" });
    }
   try{
    const decoded = Jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next() 
   }
   catch(error){
      return res.status(401).json({
        message: "Unauthorized, invalid token"  
      })
    }
}



module.exports = {authUser};