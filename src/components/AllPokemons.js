import React, { useEffect, useState } from "react";
import PokemonThumb from "./PokemonThumb";
import Pagination from "./Pagination";
import axios from "axios";

const AllPokemons = () => {
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=16")
      .then((response) => {
        if (response.status == "200") {
          localStorage.setItem("allPokemons", JSON.stringify(response.data));

          const data = response.data;
          const pokemons = [];

          return data.results.forEach((pokemon) => {
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((res) => {
                pokemons.push(res.data);
                localStorage.setItem("pokemonData", JSON.stringify(pokemons));
              });
          });
        } else console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pokemons = JSON.parse(localStorage.getItem("pokemonData"));

  return (
    <div className="app-contaner">
      <h1>My Pokemon Characters</h1>
      <div className="pokemon-container">
        {pokemons ? (
          <div className="all-container">
            {pokemons.map((pokemon, index) => (
              <PokemonThumb
                key={index}
                  pokemonData={pokemon}
              />
            ))}
          </div>
        ) : (
          <p>No Pokemon Available</p>
        )}

        <Pagination />
      </div>
    </div>
  );
};

export default AllPokemons;
