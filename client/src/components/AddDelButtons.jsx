import React, {useContext} from 'react';
import  AppContext from '../context/AppContext';
import CreatePokemon from '../components/CreatePokemon';
import DeletePokemon from '../components/DeletePokemon';
import '../style/addDelBtns.css';

export default function AddDelButtons() {

  const {
    createOn, 
    setCreateOn,
    deleteOn, 
    setDeleteOn } = useContext(AppContext)

  return (
    <div className='btn-add-del'>
      <div className='btn-div-add'>
        <button type='button' onClick={() => setCreateOn(!createOn)}>add pokemon on safari</button>
        {createOn && <CreatePokemon />}
      </div>
      <div className='btn-div-del'>
        <button type='button' onClick={() => setDeleteOn(!deleteOn)}>remove pokemon on safari</button>
        { deleteOn && <DeletePokemon />}
      </div>
    </div>
  )
}
