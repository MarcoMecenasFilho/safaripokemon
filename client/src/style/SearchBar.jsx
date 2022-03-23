import React,  { useState, useContext } from 'react';
import  AppContext from '../context/AppContext'

export default function SearchBar() {

  const {
    capturedPokemon, 
    setCapturedPokemon
  } = useContext(AppContext)
  const [searchPokemon, setSearchPokemon] = useState('');
  const [statusReq, setStatusReq] = useState('')

const handleChange = ({target}) => {
  setSearchPokemon(target.value);
};
const url = `http://localhost:3001/pokemon?namepokemon=${searchPokemon}`

async function getPokemon(e)  {
    e.preventDefault()
  if(capturedPokemon[0]) {
  const ifCaptured = capturedPokemon.some((poke) => poke.name.toLowerCase() ===  searchPokemon.toLowerCase().trim())
    if(ifCaptured) {
      return setStatusReq('Pokemon já foi capturado')
    }
}

  try {
    const result = await fetch(url);
    const json = await result.json();
    console.log(json)
    if (json.message) {
    return   setStatusReq('Pokemon não foi encontrado');
    }
    setStatusReq('Pokemon Capturado com sucesso')
    setCapturedPokemon([...capturedPokemon, json]);
  } catch (error) {
    console.log(error)
    }
    

  }
  return (
    <div>
      <form onSubmit={(e) => getPokemon(e)}>
        <input type='text' placeholder='Pokemon' onChange={(e) => handleChange(e)} />
        <button  type='submit'>Catch Pokemon</button>
        <h1>{statusReq}</h1>
      </form>
    </div>
  )
}
