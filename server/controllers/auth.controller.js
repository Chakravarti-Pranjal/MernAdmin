const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

// home logic

const home = async (req, res) => {
    try {
        res.status(200)
            .send('Welcome to home page');
    } catch (error) {
        console.log(error);
    }    
}


// ? user registration 
const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { userName , email , phone, password } = req.body ;

        const userExist = await User.findOne({email});

        if(userExist) {
            return res.status(400).json({msg : 'email already exists'});
        }

        // hash the password
        //const hashPassword = await bcrypt.hash(password, 8);

       const userCreated = await User.create({ userName , email , phone, password });

        res.status(201)
           .json({msg : "registration successful", 
                token : await userCreated.generateToken(),
                userId : userCreated._id.toString(),
         });
    } catch (error) {
        res.status(500).json("internal server error");
    }
}

// ? User Login Logic

const login = async (req, res) => {
    try {
        const {email, password} = req.body ;

        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({
                message : "Login Successful",
                token : await userExist.generateToken(),
                userId : userExist._id.toString(),
            });
        }else{
            res.status(400).json({message : "Invalid email or password"});
        }

    } catch (error) {
        res.status(500).json("Internal server error");
    }
}


module.exports = { home , register, login };