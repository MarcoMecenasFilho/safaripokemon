import React,  {  useContext } from 'react';
import  AppContext from '../context/AppContext'

export default function PokemonCard() {
  const {
    capturedPokemon, 
  } = useContext(AppContext)
  return (
    <div className='div-catch'>
      <h1>Pokemon capturados</h1>
      <div className='catchPokemon'>
      {capturedPokemon.map((infos, index) => (
        <div key={index} className='cardPokemon'>
          <h1>{infos.name}</h1>
          <h3>{infos.id}</h3>
          <img src={infos.image} alt='pokemonImage'/>
        </div>
      ))

      }
      </div>

    </div>
  )
}
