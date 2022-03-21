import React, {useState, useContext} from 'react'
import  AppContext from '../context/AppContext';

export default function DeletePokemon() {
  const [name, setName] = useState('');
  const [messageAPI, setMessageAPI] = useState('');
  const { deleteOn,  setDeleteOn} = useContext(AppContext)

const handleChange = ({target}) => {
    setName(target.value)
};

const bodyReq = {
  name,
}

const url = 'http://localhost:3001/pokemon';
const option = {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bodyReq),
}

async function deletePokemon(e)  {
    e.preventDefault()

  try {
    const result = await fetch(url, option);
    if (result.status ===204) {
      return  setMessageAPI(`${name} taken from safari`);
    }
    const json = await result.json()
    console.log(result)
    if (json.message) {
      return   setMessageAPI(`${name} is not on safari to be taken out`)
    }
  } catch (error) {
    console.log(error)
    }
    

  }

  return (
    <div>
      <form onSubmit={(e) => deletePokemon(e)}>
        <button  type='submit' onClick={() => setDeleteOn(!deleteOn)}>x</button>
        <input type='text' name='name' placeholder='Name' onChange={(e) => handleChange(e)} required />
        <button  type='submit'>Remove pokemon from safari</button>
        <h1>{messageAPI}</h1>
      </form>
    </div>
  )
}
