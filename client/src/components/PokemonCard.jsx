import React,  {  useContext } from 'react';
import  AppContext from '../context/AppContext'

export default function PokemonCard() {
  const {
    capturedPokemon, 
    setCapturedPokemon
  } = useContext(AppContext)

  const freePokemon = ({target}) => {
    const filteredPokemon = capturedPokemon.filter((pokemon) => pokemon.name !== target.value);
    setCapturedPokemon(filteredPokemon)
  }
  return (
    <div className='div-catch'>
      <h1>Captured pokemon</h1>
      <div className='catchPokemon'>
      {capturedPokemon.map((infos, index) => (
        <div key={index} className='cardPokemon'>
          <h1>{infos.name}</h1>
          <h3>{infos.id}</h3>
          <img src={infos.image} alt='pokemonImage'/>
          <button type='button' value={infos.name} onClick={(e) => freePokemon(e)}>Free pokemon</button>
        </div>
      ))

      }
      </div>

    </div>
  )
}
