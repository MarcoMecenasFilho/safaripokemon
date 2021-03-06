import React,  { useState, useContext } from 'react';
import  AppContext from '../context/AppContext';
import { Form, FloatingLabel } from 'react-bootstrap';
import '../style/searchBar.css';
import capture from '../images/capture.png';  

export default function SearchBar() {

  const {
    capturedPokemon, 
    setCapturedPokemon
  } = useContext(AppContext)
  const [searchPokemon, setSearchPokemon] = useState('');
  const [statusReq, setStatusReq] = useState('Welcome to Pokemon safari')

const handleChange = ({target}) => {
    const lower = target.value.toLowerCase();
  const capitalized = target.value.charAt(0).toUpperCase() + lower.slice(1);
  setSearchPokemon(capitalized);
};
const url = `http://localhost:3001/pokemon?namepokemon=${searchPokemon}`

async function getPokemon(e)  {
    e.preventDefault()
  if(capturedPokemon[0]) {
  const ifCaptured = capturedPokemon.some((poke) => poke.name.toLowerCase() ===  searchPokemon.toLowerCase().trim())
    if(ifCaptured) {
      return setStatusReq('Pokemon has been captured')
    }
}

  try {
    const result = await fetch(url);
    const json = await result.json();
    if (json.message) {
    return   setStatusReq('Pokemon not found on safari');
    }
    setSearchPokemon('');
    setStatusReq('Successfully captured pokemon');
    setCapturedPokemon([...capturedPokemon, json]);
    localStorage.setItem('safariPokemon', JSON.stringify([...capturedPokemon, json]));
  } catch (error) {
    console.log(error)
    }
    

  }
  return (
    <div className='form-div'>
      <Form onSubmit={(e) => getPokemon(e)}>
        <div className='status-message'>
          <h4>{statusReq}</h4>
        </div>
        <div className='form-div-input'>
          <FloatingLabel
            controlId="floatingInput"
            label="Capture Pokemon on safari"
            className="mb-3 input" >
            <Form.Control data-testid={"search-name-pokemon"}  type="text" value={searchPokemon} onChange={(e) => handleChange(e)} placeholder='Pokemon' required />
          </FloatingLabel>
          <button type='submit' data-testid={'btn-search'}>
            <img src={capture} alt='capture'/>
          </button>
        </div>
      </Form>
    </div>
  )
}
