const Food_skeleton_model = require('../model/Food_skeleton_model');

const getAllFood = async (req, res, next) => {
  let foods;
  try {
    foods = await Food_skeleton_model.find();
  } catch (err) {
    console.log(err);
  }

  if (!foods) {
    return res.status(404).json({ message: 'No products found' });
  }
  return res.status(200).json({ foods });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let food;
  try {
    food = await Food_skeleton_model.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!food) {
    return res.status(404).json({ message: 'No food found' });
  }
  return res.status(200).json({ food });
};

const addFood = async (req, res, next) => {
  const { name, cuisine, ingredients, price, available, image } = req.body;
  let food;
  try {
    food = new Food_skeleton_model({
      name,
      cuisine,
      ingredients,
      price,
      available,
      image,
    });
    await food.save();
  } catch (err) {
    console.log(err);
  }

  if (!food) {
    return res.status(500).json({ message: 'Unable To Add Food' });
  }
  return res.status(201).json({ food });
};

const updateFood = async (req, res, next) => {
  const id = req.params.id;
  const { name, cuisine, ingredients, price, available, image } = req.body;
  let book;
  try {
    book = await Food_skeleton_model.findByIdAndUpdate(id, {
      name,
      cuisine,
      ingredients,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: 'Unable To Update By this ID' });
  }
  return res.status(200).json({ book });
};

const deleteFood = async (req, res, next) => {
  const id = req.params.id;
  let food;
  try {
    food = await Food_skeleton_model.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!food) {
    return res.status(404).json({ message: 'Unable To Delete By this ID' });
  }
  return res.status(200).json({ message: 'Product Successfully Deleted' });
};

exports.getAllFood = getAllFood;
exports.addFood = addFood;
exports.getById = getById;
exports.updateFood = updateFood;
exports.deleteFood = deleteFood;
