const express=require('express');
const app=express()
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    
    res.render("index",{
        name:"gopi",
        place:"andhra",
    })
})
var pro={
    name:"gopi",
}

app.get('/contact',(req,res)=>{
    res.write("gopi go like these")
    res.write("gopi go like these")

    res.write("gopi go like these")
 res.send()
})
app.get('/about',(req,res)=>{
    res.render("index",{project:pro})
})
app.listen(3000)