import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const param = useParams();

  const pokemons = JSON.parse(localStorage.getItem("pokemonData"));
  const pokemonDetail = pokemons.find((pokemon) => pokemon.name == param.name);

  return (
    <div>
      {pokemonDetail ? (
        <div className="pokemon_details">
          <div className="pokemon_name">
            <img src={pokemonDetail.sprites.other.dream_world.front_default} />
            <p> {pokemonDetail.name} </p>
          </div>

          <div>
            <h3>Species:</h3>
            <p>{pokemonDetail.species.name}</p>

            <div>
              <h3>Base Stats</h3>
              <div className="base-content">
                {pokemonDetail.stats.map((stat, idx) => {
                  return (
                    <div className="base-content-item" key={idx}>
                      <h5>{stat.stat.name}</h5>
                      <p>{stat.base_stat}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3>Types:</h3>
              <div className="types">
                {pokemonDetail.types.map((item, idx) => {
                  return (
                    <p className="types-item" key={idx}>
                      {item.type.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default PokemonDetails;
