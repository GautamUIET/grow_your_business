const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:3 
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error("invalid email id")

            }
        } 
    },
    Phone:{
        type:Number,
        required:true,
        minLength:3
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})
const User = mongoose.model("User",userSchema);

module.exports=User;