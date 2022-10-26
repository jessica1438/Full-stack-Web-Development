import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddFood from "./components/AddFood";
import Foods from "./components/FOOOD/Foods";
import About from "./components/About";
import FoodDetail from "./components/FOOOD/FoodDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/addRecipe" element={<AddFood />} exact />
          <Route path="/showRecipe" element={<Foods />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/showRecipe/:id" element={<FoodDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
