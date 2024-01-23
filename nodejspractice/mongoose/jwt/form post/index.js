const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const ejs=require("ejs")
app.set("view engine","ejs")
const {ConnectMongoose,User}=require("./database")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
ConnectMongoose()
app.get("/",(req,res)=>{
   res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.post("/register",async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    if(user) return res.status(400).send("user already exists")
    const newUser=await User.create(req.body)
    res.status(201).send(newUser)
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",(req,res)=>{
    User.findOne({username:req.body.username}).then(user=>{
        if(!user){
            return res.status(401).send({
                success:false,
                message:"not correct username"
            })
        }
        
        User.findOne({username:req.body.password}).then(user=>{
            if(!user){
                return res.status(401).send({
                    success:false,
                    message:"not correct username"
                })
            }
        
    
})

app.listen(5000,()=>{
    console.log("ok")
})