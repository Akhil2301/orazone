const mongoose=require('mongoose');



const enquirySchema=new mongoose.Schema({
    fname:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    lname:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    phone:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
    },
    message:{
        type:String,
        required:true,        
    }
},
{timestamps:true}
);



module.exports=mongoose.model("enquiry",enquirySchema);