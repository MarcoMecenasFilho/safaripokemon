import React, {useState} from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [capturedPokemon, setCapturedPokemon] = useState([])
  const context = {
    capturedPokemon, 
    setCapturedPokemon,
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
