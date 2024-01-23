const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/gopi").then(()=>{
    console.log("hii");
}).catch((err)=>{
    console.log("error");
})
const students=new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})
const Students=new mongoose.model("Students",students)
const adder=()=>{
    const adfar=new Students({
        name:"gopi",
        workout:true,
        height:10
    })
    adfar.save()
}
adder()