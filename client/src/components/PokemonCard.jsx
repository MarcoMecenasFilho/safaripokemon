import React,  {  useContext } from 'react';
import  AppContext from '../context/AppContext'
import '../style/pokemonCard.css'

export default function PokemonCard() {
  const {
    capturedPokemon, setCapturedPokemon} = useContext(AppContext)

  const freePokemon = ({target}) => {
    const pokemonFiltered = capturedPokemon.filter(pokemon => pokemon.name !== target.value)
    setCapturedPokemon(pokemonFiltered);
    localStorage.setItem('safariPokemon', JSON.stringify(pokemonFiltered));
  }

  return (
    <div className='div-catch'>
      <h1>Captured Pokemon</h1>
      {!capturedPokemon.length && <h1 className='no-pokemon'>No Pokemon captured yet</h1>}
      <div className='catchPokemon'>
      {capturedPokemon.map((infos, index) => (
        <div key={index} className='cardPokemon' data-testid={`pokemon-card-${infos.name}`}>
          <div className='infos-card'>
            <h4>{infos.name}</h4>
            <h5>{infos.id}</h5>
          </div>
          <img data-testid={`pokemon-image-${infos.name}`} src={infos.image} alt='pokemonImage'/>
          <button data-testid={`pokemon-free-${infos.name}`} value={infos.name} onClick={(e) => freePokemon(e)}>Free Pokemon</button>
        </div>
      ))

      }
      </div>

    </div>
  )
}