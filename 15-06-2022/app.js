const express = require('express');
const app=express();
// app.get('/', function (req, res){
//   res.sendfile(__dirname + '/HelloWorld.html')
// });
// app.get('/home',function(req, res){
//   res.send("Hello world");
// } )
app.delete("/",function(req, res){
  res.send("Delete");
})

app.listen(3000,function(){
  console.log("App started at port 3000");
})
