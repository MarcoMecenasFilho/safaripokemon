import React, {useState, useContext} from 'react'
import  AppContext from '../context/AppContext'
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import '../style/createpokemon.css'
export default function CreatePokemon() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
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
    if (json.message === 'Pokemon name already exist') {
      return   setMessageAPI('Pokemon is already on safari')
    }
    setName('');
    setId('');
    setImage('');
    setMessageAPI('Pokemon added to safari successfully');
  } catch (error) {
    console.log(error)
    }
    

  }

  return (
      <Form className='form-create' onSubmit={(e) => createPokemon(e)} data-testid={"form-add"}>
        <div className='close-btn'>
          <Button data-testid={"close-create-form"} variant="danger"  type='button' onClick={() => setCreateOn(!createOn)}>x</Button>
        </div>
        <FloatingLabel
            controlId="floatingInput"
            label="Pokemon name"
            className="mb-3 input" >
            <Form.Control data-testid={"name-create-form"} value={name}  type="text" name="name" onChange={(e) => handleChange(e)} placeholder='Pokemon' required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Pokemon id"
            className="mb-3 input" >
            <Form.Control data-testid={"id-create-form"} value={id} type="number" name="id" onChange={(e) => handleChange(e)} placeholder='Id' required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Pokemon image"
            className="mb-3 input" >
            <Form.Control data-testid={"image-create-form"} value={image} type="text" name="image" onChange={(e) => handleChange(e)} placeholder='Image' required />
          </FloatingLabel>
        <Button className='btn-create' type='submit'>Add Pokemon</Button>
        <h5>{messageAPI}</h5>
      </Form>
  )
}
