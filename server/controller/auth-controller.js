const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req , res) => {
    try {
        res.status(200).send("welcome to home page");
    } catch (error) {
        res.status(400).send("page not found");
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body); 
        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist) {
            res.status(400).json({msg : "user already exist"});
        }
        const userCreated = await User.create({username, email, phone, password});
        res.status(200).json({msg : "registration successfull",
            token : await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

    } catch (error) {
        console.log(error);
    }
}


const login = async (req, res) => {
   try {
     console.log(req.body);
    const {email, password} = req.body;
    const userExist = await User.findOne({email});
    if(!userExist) {
        return res.status(400).json("invalid email or password");
    }
    const user = await userExist.comparePassword(password);

    if(user) {
        res.status(200).json({msg : "login successfull",
            token : await userExist.generateToken(),
            userId : userExist._id.toString(),
        })
    }else {
        res.status(400).json({msg : "invalid email or password"});
    }
   } catch (error) {
    console.error("Login error:", error);
    res.status(500).json("internal server error");
   }

}

module.exports = {home, register, login};