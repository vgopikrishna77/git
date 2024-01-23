const fs=require('fs');
fs.writeFileSync('gopi.txt','hii how are you');
fs.appendFileSync('gopi.txt','where are you gopi what are you doing right now in the era');
var data=fs.readFileSync('gopi.txt');
var sti=data.toString();
console.log(sti);

