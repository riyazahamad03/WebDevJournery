const express=require("express");
const app= express();


app.get("/",function(req,res){
  res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res)
{
  res.send("<h1> Contact Me : Riyaz Ahamed : 638268059 : riyazahamad397@gmail.com </h1>");
});
app.get("/about",function(req,res)
{
  res.send("Hello All This Is riyaz Ahamed iam here for web development");
});

app.listen(3000, function()
{
  console.log("Server has started on port 3000");
});
