import React, {useState} from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [capturedPokemon, setCapturedPokemon] = useState([]);
  const [createOn, setCreateOn] = useState(false);
  const [deleteOn, setDeleteOn] = useState(false);
  
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
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.node.isRequired,
};
