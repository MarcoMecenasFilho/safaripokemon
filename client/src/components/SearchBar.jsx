import React,  { useState, useContext } from 'react';
import  AppContext from '../context/AppContext';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import '../style/searchBar.css';

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
      return setStatusReq('Pokemon has been captured')
    }
}

  try {
    const result = await fetch(url);
    const json = await result.json();
    console.log(json)
    if (json.message) {
    return   setStatusReq('Pokemon not found on safari');
    }
    setStatusReq('Successfully captured pokemon')
    setCapturedPokemon([...capturedPokemon, json]);
  } catch (error) {
    console.log(error)
    }
    

  }
  return (
    <div className='form-div'>
      <Form onSubmit={(e) => getPokemon(e)}>
        <div className='form-div-input'>
          <FloatingLabel
            controlId="floatingInput"
            label="Pokemon name"
            className="mb-3 input" >
            <Form.Control  type="text" onChange={(e) => handleChange(e)} placeholder='Pokemon' required />
          </FloatingLabel>
          <Button  type='submit'>Capture Pokemon</Button>
        </div>
        <h4>{statusReq}</h4>
      </Form>
    </div>
  )
}
