import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {

    const [item, setItem] = useState()
    const [pokemon, setPokemon] = useState()
    const params = useParams();

    console.log(pokemon)

    useEffect(() => {
        const pokemon = JSON.parse(localStorage.getItem('pokemon'));
        if (pokemon) {
         setPokemon(pokemon);
        }
      }, []);
    
    return (
        <div>
            {
                pokemon ?
                <div className='pokemon_details'>
                    <div className='pokemon_name'>
                        <img src={pokemon.sprites.other.dream_world.front_default} />
                        <p> {pokemon.name} </p>
                    </div>

                    <div>
                        <h3 style={{fontWeight: 700, margin: 0}}>Species:</h3>
                        <p style={{margin: 0, marginTop: '10px'}}>{pokemon.species.name}</p>

                        <div>
                            <h3 style={{fontWeight: 700, margin: 0, marginTop: '30px'}}>Base Stats</h3>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '60px', gridRowGap: '50px'}}>
                                {
                                    pokemon.stats.map((stat, idx) => {
                                        return(
                                            <div key={idx} style={{background: '#D3D3D3', color: 'black', textAlign: 'center', borderRadius: '10px', padding: '10px'}} >
                                                <h5 style={{margin: 0, fontSize: '14px', textTransform: 'capitalize'}}>{stat.stat.name}</h5>
                                                <p style={{ margin: 0, marginTop: '10px'}}>{stat.base_stat}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div>
                            <h3 style={{fontWeight: 700, margin: 0, marginTop: '50px'}}>Types:</h3>
                            <div style={{ display: 'flex'}}>
                                {
                                    pokemon.types.map((item, idx) =>{
                                        return(
                                            <p style={{marginRight: '20px', background: '#D3D3D3', borderRadius: "20px", padding: '5px 10px'}}>{item.type.name}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <p>Loading....</p>
            }
            
        </div>
    )
}

export default PokemonDetails
