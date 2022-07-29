const mongoose = require ('mongoose');
// Connection URL
// const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'fruitsDB';
// Create a new MongoClient
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema=new mongoose.Schema({
  name : String,
  ratings:{
    type:Number,
    min : 1,
    max : 10
  },
  review : String
});

const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
  name : "Mango Banganapalle",
  ratings : 7.5,
  review : "Seasional fruit "
})
// fruit.save();


const PersonSchema = new mongoose.Schema({
  name : String,
  age : Number
});
const Person = mongoose.model("Person",PersonSchema);
const person =  new Person ({
  name : "John",
  age : 37
});
// person.save();

const imampasand =  new Fruit({
  name : "imampasand Mango ",
  ratings : 10,
  review : "First Quality"
});

const alphonsoRatangiri = new Fruit({
  name : "AlphonsoRatangiri",
  ratings : 8,
  review:"This Tastes Awesome "
});

// Fruit.insertMany([imampasand,alphonsoRatangiri], function(err)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("Successfully uploaded into fruitsDB");
//   }
// });

// Fruit.deleteOne({name : "Mango Banganapalle"}, function(err)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("Successfully deleted");
//   }
// });


Fruit.find(function (err , fruits)
{
  // if (err){
  //   console.log(err);
  // }
  // else
  // {
  //   console.log(fruits);
  // }
  mongoose.connection.close();
  fruits.forEach(function(fruit){
    console.log(fruit.name);
    });
});
