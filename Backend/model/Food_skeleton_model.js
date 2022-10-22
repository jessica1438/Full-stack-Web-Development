const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Food_skeleton_model", foodSchema);

// books
