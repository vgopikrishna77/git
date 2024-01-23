const http=require('http');
http.createServer((request,response)=>{
    response.write("gopi")
    response.end()
}).listen(3000)
console.log(http);