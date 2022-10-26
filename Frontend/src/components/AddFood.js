import {Button,Checkbox,FormControlLabel,FormLabel,TextField} from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddFood = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    cuisine: "",
    price: "",
    ingredients: "",
    
    image: "",
  })

  const [checked, setChecked] = useState(false)
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/showRecipe", {
        name: String(inputs.name),
        cuisine: String(inputs.cuisine),
        ingredients: String(inputs.ingredients),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/showRecipe"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Cuisine</FormLabel>
        <TextField
          value={inputs.cuisine}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="cuisine"
        />
        <FormLabel>Ingredients</FormLabel>
        <TextField
          value={inputs.ingredients}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="ingredients"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Food Recipe ( YUMM!! )
        </Button>
      </Box>
    </form>
  );
};

export default AddFood;
