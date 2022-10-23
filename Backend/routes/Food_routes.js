const express = require('express');
const router = express.Router();
const Food_skeleton_model = require('../model/Food_skeleton_model');
const Food_CRUD_controls = require('../controllers/Food_CRUD_controls');

router.get("/", Food_CRUD_controls.getAllFood);
router.post("/", Food_CRUD_controls.addFood);
router.get("/:id", Food_CRUD_controls.getById);
router.put("/:id", Food_CRUD_controls.updateFood);
router.delete("/:id", Food_CRUD_controls.deleteFood);

module.exports = router;
