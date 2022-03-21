import React, {useContext} from 'react';
import  AppContext from '../context/AppContext'
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import CreatePokemon from '../components/CreatePokemon';
import DeletePokemon from '../components/DeletePokemon';

export default function Pokedex() {
  const {
    createOn, 
    setCreateOn,
    deleteOn, 
    setDeleteOn } = useContext(AppContext)


  return (
    <div className='main-div'>
    < SearchBar />
    <button type='button' onClick={() => setCreateOn(!createOn)}>add pokemon on safari</button>
    <button type='button' onClick={() => setDeleteOn(!deleteOn)}>remove pokemon on safari</button>
    {createOn && <CreatePokemon />}
    { deleteOn && <DeletePokemon />}
    <PokemonCard />
  </div>
  )
}
