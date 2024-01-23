const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/gopikrishna").then(()=>{
    console.log("connected")
})
const  userShema=mongoose.Schema({
    username:String,
    password:String
})
const userModel= mongoose.model("users",userShema)
module.exports=userModel