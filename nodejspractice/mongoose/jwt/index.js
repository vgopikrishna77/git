const express=require("express")
const app=express()
const userModel=require("./database")
const {hashSync, compareSync}=require("bcrypt")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/register",(req,res)=>{
   res.json(userModel)
})
app.post("/register",(req,res)=>{
    const user=new userModel({
        username:req.body.username,
        password:hashSync(req.body.password,10)
    })
    user.save().then(user=>{
        res.send({
                success:true,
                message:"user created successfully"
            })
                
            
        }).catch(err=>{
            res.send({
                success:false,
                message:"user created successfully"
            })
        })
        
    })
    app.post("/login",(req,res)=>{
        userModel.findOne({username:req.body.username}).then(user=>{
            if(!user){
                return res.status(401).send({
                    success:false,
                    message:"not correct username"
                })
            }
            if(!compareSync(req.body.password,user.password)){
                    return res.status(401).send({
                        success:false,
                        message:"not correct password"
                    })
            }
            res.send("okay")
        })
    })

app.listen(5000,()=>{
    console.log("ok")
})