import React, {useState, useContext} from 'react'
import  AppContext from '../context/AppContext';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import '../style/delpokemon.css'

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
      setName('');
      return  setMessageAPI(`${name} taken from safari`);
    }
    const json = await result.json()
    if (json.message) {
      return   setMessageAPI(`${name} is not on safari to be taken out`)
    }
  } catch (error) {
    console.log(error)
    }
    

  }

  return (
      <Form className='form-del' onSubmit={(e) => deletePokemon(e)} data-testid={'form-delete'}>
      <div className='close-btn-del'>
          <Button data-testid={'close-delete-form'} variant="danger"  type='button' onClick={() => setDeleteOn(!deleteOn)}>x</Button>
        </div>
        <h5>Remove Pokemon on safari</h5>
        <FloatingLabel
            controlId="floatingInput"
            label="Pokemon name"
            className="mb-3 input" >
            <Form.Control data-testid={'name-delete-form'}  value={name} type="text" name="name" onChange={(e) => handleChange(e)} placeholder='Pokemon' required />
          </FloatingLabel>
        <Button className='btn-del' type='submit'>Remove Pokemon </Button>
        <h5>{messageAPI}</h5>
      </Form>
  )
}
