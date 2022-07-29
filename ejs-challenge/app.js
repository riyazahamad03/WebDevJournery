//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent = "Welcome To The Journal Contents ";
const aboutContent = "Thanks For Looking Into About page";
const contactContent = "For Any Queries Mail Us Using Below Button";

const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts=[];
app.get("/",function(req, res)
{
  res.render("home",
  {
    startingContent:homeStartingContent,
    posts:posts,

  });
});

app.get("/contact",function(req, res)
{
  res.render("contact",{ContactContent:contactContent});
});

app.get("/about",function(req, res)
{
  res.render("about",{AboutContent:aboutContent});
});

app.get("/compose",function(req, res)
{
  res.render("compose");
});
app.post("/compose",function(req, res)
{
  const post={
    title : req.body.PostTitle,
    content : req.body.TextDescription
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName",function(req,res)
{
  const requestedTitle= _.lowerCase(req.params.postName);
  posts.forEach(function(post) {
    const storedTitle=_.lowerCase(post.title);
    if(requestedTitle === storedTitle)
    {
      res.render("post",
    {
      title:post.title,
      content:post.content
    });
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
