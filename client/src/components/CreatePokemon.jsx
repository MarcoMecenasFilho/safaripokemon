import React, {useState, useContext} from 'react'
import  AppContext from '../context/AppContext'

export default function CreatePokemon() {
  const [name, setName] = useState('');
  const [id, setId] = useState(0);
  const [image, setImage] = useState('');
  const [messageAPI, setMessageAPI] = useState('');
  const { createOn,  setCreateOn} = useContext(AppContext)

const handleChange = ({target}) => {
  if(target.name ==='name') {
    setName(target.value)
  }
  if(target.name ==='id') {
    setId(target.value)
  }
  if(target.name ==='image') {
    setImage(target.value)
  }

};

const bodyReq = {
  id: Number(id),
  name,
  image,
}

const url = 'http://localhost:3001/pokemon';
const option = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bodyReq),
}

async function createPokemon(e)  {
    e.preventDefault()

  try {
    const result = await fetch(url, option);
    const json = await result.json();
    console.log(json)
    if (json.message === 'Pokemon name already exist') {
      return   setMessageAPI('Pokemon is already on safari')
    }
    setMessageAPI('Pokemon added to safari successfully');
  } catch (error) {
    console.log(error)
    }
    

  }

  return (
    <div>
      <form onSubmit={(e) => createPokemon(e)}>
        <button  type='submit' onClick={() => setCreateOn(!createOn)}>x</button>
        <input type='text' name='name' placeholder='Name' onChange={(e) => handleChange(e)} required />
        <input type='number' name='id' placeholder='Id' onChange={(e) => handleChange(e)} required/>
        <input type='text' name='image' placeholder='Image' onChange={(e) => handleChange(e)} required/>
        <button  type='submit'>Create Pokemon</button>
        <h1>{messageAPI}</h1>
      </form>
    </div>
  )
}
