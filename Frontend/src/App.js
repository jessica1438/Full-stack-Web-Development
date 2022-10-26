import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddFood from "./components/AddFood";
import ShowRecipe from "./components/ShowRecipe";
import About from "./components/About";
import Update from "./components/Update";
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
          <Route path="/showRecipe" element={<ShowRecipe />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/showRecipe/:id" element={<Update />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
