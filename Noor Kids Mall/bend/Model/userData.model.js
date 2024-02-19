const mongoose=require("mongoose")

const userDataSchema = mongoose.Schema({

    firstName:{
        type:String,
        default:""
    },
    lastName:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:"",
    },
    phone:{
        type:String,
        default:"",
    },
    password:{
        type:String,
        default:"",
    },
    confirmPassword:{
        type:String,
        default:"",
    }  

},

{timestamp:true}

)

module.exports=mongoose.model("UserData",userDataSchema)

 