import React, { useEffect, useState } from "react";
import "./FoodStyle.css";
import axios from "axios";
import Food from "./Food";
const URL = "http://localhost:5000/food";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}
const Foods = () => {
  const [food, setFoods] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setFoods(data.food));
  }, []);
  console.log(food);
  return (
    <div>
      <ul>
        {food &&
          food.map((foodsi, i) => (
            <li key={i}>
              <Food foodsi={foodsi} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Foods;
