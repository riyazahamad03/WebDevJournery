const express = require("express");
const bodyParser=require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
// console.log(date());
var items=[];
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function (req, res)
{
  // var today = new Date();
  // var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  // if(today.getDay() == 6 || today.getDay() == 0)
  // {
  //   day = days[today.getDay()];
  // }
  // else {
  //   day = days[today.getDay()];
  // }
  let day=date();
  res.render('list',{kindofday:day , NewDataitems :items})
});


app.post('/', function (req, res)
{
  var item = req.body.newIt;
  items.push(item);
  res.redirect("/");
});

app.get("/about",function(req,res)
{
  res.render('about');
});



app.listen(3000,function()
{
  console.log("App Started working at port 3000");
});
