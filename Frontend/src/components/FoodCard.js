import React from 'react'
import { Button } from "@mui/material"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import "./FoodStyle.css"

const Food = (props) => {
  const history = useNavigate();
  const { _id, name, cuisine, ingredients, price, image } = props.food;
  const deleteHandler = async () => {
    await axios
      .delete(`https://foodrecipemern.herokuapp.com/showRecipe/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/showRecipe"))}

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article><h4>Name</h4>{name}</article>
      <article><h4>Cuisine  </h4>{cuisine}</article>
      <article><p><h4>Ingredients </h4>{ingredients}</p></article>
      <article><h4>Price </h4>Rs {price}</article>
      <Button LinkComponent={Link} to={`/showRecipe/${_id}`} sx={{ mt: "auto" }}>
        Update Recipe
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete Recipe
      </Button>
    </div>
  )
}

export default Food;
