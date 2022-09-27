import React from 'react'
import { json, Link } from 'react-router-dom';
const PokemonThumb = ({id, image, name, type, _callback, pokemon }) => {

    const style = type + " thumb-container";
    return (
        <div className={style}>
        <Link to={`/${name}`} onClick={()=> localStorage.setItem('pokemon', JSON.stringify(pokemon))}>
        <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </Link>

        </div>
    )
}

export default PokemonThumb
