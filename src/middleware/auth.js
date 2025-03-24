const User = require("../models/userModels")
const jwt = require("jsonwebtoken")

exports.verifyToken = async (req, res, next) =>{
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "No token provided!" });
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
        req.userId = decodedToken.userId;
        const user= await User.findById(req.userId)
        
        if (!user){
            return res.status(404).send({ message: "User not found!" });
        }
        next();
    } catch (err) {
        return res.status(401).send({ message: "Unauthorized!" });
    }
}