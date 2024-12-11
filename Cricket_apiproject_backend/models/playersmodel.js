const mongoose=require("mongoose");
const player=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    avalible:{
     type:Boolean,
     required:true
    }
})
module.exports=mongoose.model("players",player);