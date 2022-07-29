const express = require('express');
const bodyParser=require("body-parser");
const app=express();
app.use(express.urlencoded({ extended : true}));
app.use(express.json())

app.get("/",function(req,res)

{
  res.sendFile(__dirname+ "/index.html");
});
app.post("/index.html",function(req,res)
{
  var num1=Number(req.body.num1);
  console.log(num1);
  var num2=Number(req.body.num2);
  console.log(num2);
  var result=num1+num2;

  res.send("The result is : "+result);
});

app.get("/bmicalculator",function(req,res)
{
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res)
{
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=weight/(height*height);
  res.send("Your Bmi Is : "+bmi);
});


app.listen(3000 , function(req,res)
{
    console.log("Port Stared at 3000");
    // console.log(__dirname);
});
