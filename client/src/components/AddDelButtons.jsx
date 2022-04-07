import React, {useContext} from 'react';
import  AppContext from '../context/AppContext';
import CreatePokemon from '../components/CreatePokemon';
import DeletePokemon from '../components/DeletePokemon';
import '../style/addDelBtns.css';
import addpokemon from '../images/addpokemon.png';
import delpokemon from '../images/delpokemon.png';

export default function AddDelButtons() {

  const {
    createOn, 
    setCreateOn,
    deleteOn, 
    setDeleteOn } = useContext(AppContext)

  return (
    <div className='btn-add-del'>
      <div className='btn-div-add'>
        <button type='button' onClick={() => setCreateOn(!createOn)} data-testid={"add-btn"}>
        Add Pokemon on safari
        </button>
        {createOn && <CreatePokemon />}
      </div>
      <div className='btn-div-del'>
        <button type='button' onClick={() => setDeleteOn(!deleteOn)} data-testid={"delete-btn"}>
        Remove Pokemon on safari
        </button>
        { deleteOn && <DeletePokemon />}
      </div>
    </div>
  )
}
