const mongoose=require("mongoose")
exports.ConnectMongoose=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/vijay").then(()=>{
        console.log("connected")
    }).catch((e)=>{
        console.log(e)
    })
}
    const userSchema=new mongoose.Schema({
        name:String,
        email:String,
        password:String
    })

    exports.User= new mongoose.model("Users",userSchema)

