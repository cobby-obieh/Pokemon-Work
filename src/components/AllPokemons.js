import React, { useEffect, useState } from 'react'
import PokemonThumb from './PokemonThumb'
import PokemonDetails from './PokemonDetails'
import { Link } from 'react-router-dom'

const AllPokemons = () => {
    const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=16')
   const [isLoading, setIsLoading] = useState(true);

  const getAllPokemons = async () => {
    setIsLoading(true);
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results);
    setIsLoading(false)
  }

 useEffect(() => {
  getAllPokemons()
}, [])


  return (
    <div className="app-contaner">
      <h1>My Pokemon Characters</h1>
      <h1> { isLoading } </h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              pokemon={pokemonStats}
            />
            
            )}
          
        </div>
          <button className="load-more" onClick={() => getAllPokemons()} hidden={isLoading}>Load more</button>
      </div>
    </div>
  )
}

export default AllPokemons
