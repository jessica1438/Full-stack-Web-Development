const express = require('express');  //getting all the functionalities of express
const mongoose = require('mongoose'); //getting all the functionalities of mongoose ( used to connect to the database)
const router = require('./routes/Food_routes'); //get the CRUD routes
const cors = require('cors'); // allows us to make requests from one website to another website which is usually prohibited accoridng to the SOP
const app = express(); // variable app recieves all the functionalities of express library

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/showRecipe", router); // localhost:5000/food

mongoose
  .connect("mongodb+srv://dbuser:WxwAFpW3ff85ipi@cluster0.zp619fg.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected To Database"))
  .then(() => {app.listen(5000);})
  .catch((err) => console.log(err));
