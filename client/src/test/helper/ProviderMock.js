import React, {useState} from 'react';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';


export default function Provider(props) {
  const [capturedPokemon, setCapturedPokemon] = useState(props.mock.arrayPokemon);
  const [createOn, setCreateOn] = useState(props.mock.createStatus);
  const [deleteOn, setDeleteOn] = useState(props.mock.deleteStatus);
  
  const context = {
    capturedPokemon, 
    setCapturedPokemon,
    createOn, 
    setCreateOn,
    deleteOn, 
    setDeleteOn
  };

  return (
    <AppContext.Provider value={ context }>
      {props.component}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
