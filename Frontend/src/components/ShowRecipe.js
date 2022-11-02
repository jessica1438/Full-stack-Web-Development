import React, { useEffect, useState } from "react";
import "./FoodStyle.css";
import axios from "axios";
import FoodCard from "./FoodCard";
const URL = "https://foodrecipemern.herokuapp.com/showRecipe";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}
const Foods = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setFoods(data.foods));
  }, []);
  console.log(foods);
  return (
    <div>
      <ul>
        {foods &&
          foods.map((food, i) => (
            <li key={i}>
              <FoodCard food={food} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Foods;
