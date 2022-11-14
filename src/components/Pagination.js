import React, { useState } from "react";
import axios from "axios";

const Pagination = () => {
  const data = JSON.parse(localStorage.getItem("allPokemons"));

  const [load, setLoad] = useState(false);
  const pageNumbers = [];

  if (data) {
    for (let i = 1; i <= Math.ceil(data.count / 16); i++) {
      pageNumbers.push(i);
    }
  }

  const handleNext = () => {
    setLoad(true);

    const nextUrl = data.next;

    axios
      .get(`${nextUrl}`)
      .then((res) => {
        if (res.status == "200") {
          setLoad(false);

          const pokemons = [];
          const newPokemons = res.data;

          localStorage.setItem("allPokemons", JSON.stringify(newPokemons));

          return newPokemons.results.forEach((pokemon) => {
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((res) => {
                pokemons.push(res.data);
                localStorage.setItem("pokemonData", JSON.stringify(pokemons));
              });
          });
        } else {
          alert("There was an error getting new pokemons");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // window.location.reload();
  };

  return (
    <div className="pagination">
      <div className="prev">Prev</div>

      {/* {numbers.map((item, idx) => {
        return (
          <p className="number-item" key={idx}>
            {item}
          </p>
        );
      })} */}

      <div className="next" onClick={() => handleNext()}>
        {load ? "Loading..." : "Next"}
      </div>
    </div>
  );
};

export default Pagination;
