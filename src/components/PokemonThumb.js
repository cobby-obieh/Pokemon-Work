import React from 'react'
import { json, Link } from 'react-router-dom';


const PokemonThumb = ({pokemonData}) => {

    const style = pokemonData.types[0].type.name + " thumb-container";
    
    return (
        <div className={style}>
        <Link to={`/${pokemonData.name}`} 
        // onClick={()=> localStorage.setItem('pokemon', JSON.stringify(pokemon))}
        >
        <div className="number"><small>#{pokemonData.id}</small></div>
            <img src={pokemonData.sprites.other.dream_world.front_default} alt='{name}' />
            <div className="detail-wrapper">
                <h3>{pokemonData.name}</h3>
                <small>Type: {pokemonData.types[0].type.name}</small>
            </div>
        </Link>

        </div>
    )
}

export default PokemonThumb
