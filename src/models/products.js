const mongoose=require("mongoose");
//mongoose.set("strictQuery",false);

const client=new mongoose.Schema({

    name :{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    Country:{
        type:String,
        require:true
    },
    phone:{
type:Number,
require:true,
unique:true
    },

    password:{
        type:String,
        require:true
    }
});

const register =new mongoose.model('product',client);

module.exports= register;