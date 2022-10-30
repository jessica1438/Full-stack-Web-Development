require("dotenv").config();
const express = require('express');  //getting all the functionalities of express
const mongoose = require('mongoose'); //getting all the functionalities of mongoose ( used to connect to the database)
const router = require('./routes/Food_routes'); //get the CRUD routes
const cors = require('cors'); // allows us to make requests from one website to another website which is usually prohibited accoridng to the SOP
const app = express(); // variable app recieves all the functionalities of express library


const conn = process.env.DATABASE

const port = process.env.PORT || 5000;
// Middlewares
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => { res.json('Hello from Express!')})

app.use("/showRecipe", router); // localhost:5000/food

mongoose
  .connect(conn,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => console.log("Connected To Database"))
  .then(() => {app.listen(port);})
  .catch((err) => console.log(err));


  
