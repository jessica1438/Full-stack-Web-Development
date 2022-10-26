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
      .delete(`http://localhost:5000/showRecipe/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/showRecipe"))}

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>{name}</article>
      <h3>{cuisine}</h3>
      <p>{ingredients}</p>
      <h3>Rs {price}</h3>
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
