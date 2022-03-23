import React from 'react';
import SearchBar from '../components/SearchBar';
import AddDelButtons from '../components/AddDelButtons';
import PokemonCard from '../components/PokemonCard';
import '../style/pokedex.css'


export default function Pokedex() {

  return (
    <div className='main-div'>
      < SearchBar />
      <AddDelButtons />
      <PokemonCard />
    </div>
  )
}
