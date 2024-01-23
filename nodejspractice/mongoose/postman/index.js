var express=require('express')
const students=require('./Students')
var bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.json())
app.get('/api/students',(req,res)=>{
    res.json(students)
})
app.post('/api/students',( req,res)=>{
    const user={
        id:students.length+1,
        first_name:req.body.first_name,
        last_name:req.body.last_name

    }
    students.push(user)
console.log(user)
res.json(user)
})
app.put("/api/students/:id",(req,res)=>{
    let id=req.params.id
    let first_name=req.body.first_name;
    let  last_name=req.body.last_name;
    let email = req.body.email;

   let index=students.findIndex((student)=>{
    return (student.id===Number.parseInt(id))
   })
   if (index>=0){
    let std=students[index]
    std.first_name=first_name;
    std.last_name=last_name;
    std.email=email;
    res.json(std)
   }
})
app.delete("/api/students/:id",(req,res)=>{
    let id=req.params.id
     let index=students.findIndex((student)=>{
    return (student.id===Number.parseInt(id))
   })
   if (index>=0){
    let std=students[index]
    students.splice(index,1)
    res.json(std)
   }
})

    app.listen(4000,()=>{
    console.log("listening")
})