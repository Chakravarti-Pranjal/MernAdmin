const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    }, 
    phone : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    }, 
    isAdmin : {
        type : Boolean,
        default : false,
    }
});

//? Secure the password 
userSchema.pre('save', async function(){
    //console.log(this);
    const user = this ;

    if(user.isModified('password')){
        next();
    }

    try {
        const hash_password = await bcrypt.hash(user.password, 8);
        user.password = hash_password ;
    } catch (error) {
        next(error);
    }
});

// json web token
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin,
        },
        process.env.JWT_SECRET_KEY ,
        {
            expiresIn : '30d',
        }
    
    );
    } catch (error) {
        console.log(error);
    }
}

// define the model or collection name 
const User = mongoose.model('User', userSchema);

// export the model
module.exports = User;