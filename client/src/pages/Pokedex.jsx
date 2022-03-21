import React from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import CreatePokemon from '../components/CreatePokemon';
import DeletePokemon from '../components/DeletePokemon';

export default function Pokedex() {



  return (
    <div className='main-div'>
    < SearchBar />
    <CreatePokemon />
    <PokemonCard />
    <DeletePokemon />
  </div>
  )
}
