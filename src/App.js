import React, { useEffect, useState } from "react";
import PokemonThumb from "./components/PokemonThumb";
import PokemonDetails from "./components/PokemonDetails";
import { Route, Routes } from "react-router-dom";
import AllPokemons from "./components/AllPokemons";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AllPokemons />} />
      <Route path="/:name" element={<PokemonDetails />} />
    </Routes>
  );
};

export default App;
