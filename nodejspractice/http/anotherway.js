const http=require('http');
const fs=require('fs');
const server=http.createServer((request,response)=>
{
    
    var data=fs.readFileSync('gopi.txt');


if(request.url==='/'){
    response.end("home page")
}
else if(request.url==='/about'){
    response.end("abot page")
}
else if(request.url==='/contact'){
    response.end("contact page")
}
else if(request.url==='/authors'){
    response.end(data)
}
else{
    response.end("error")
}
});
server.listen(8000,()=>{
    console.log("hii iam listening");

})
