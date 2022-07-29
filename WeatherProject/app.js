const express=require("express");
const https=require("https");
const bodyParser=require("body-parser")
const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res)
{
  res.sendFile(__dirname +"/index.html");

});

app.post("/",function(req,res)
{
  const query=req.body.CityName;
  const apikey="94247d3cfcfc1690246ba52e00ead2da";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey;
  https.get(url,function(response)
  {

    console.log(response.statusCode);
    response.on("data",function(data)
    {
      const WeatherData=JSON.parse(data);
      // console.log(WeatherData);
      const temp=WeatherData.main.temp;
      console.log(temp);
      const dataa=WeatherData.weather[0].description;
      res.write("<p>the weather des "+temp+"</p\n");
      res.write("<h1> The Temp in "+query+"is "+temp+"</h1>");
    });
  });
});





















app.listen(3000, function(req,res)
{
  console.log("port started at 3000");
});
