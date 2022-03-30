import React, {useState} from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [capturedPokemon, setCapturedPokemon] = useState([{
    id: 1,
    name: 'Bulbasaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  },
  {
    id: 5,
    name: 'Charmeleon',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  },
  {
    id: 9,
    name: 'Blastoise',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
  },
  {
    id: 25,
    name: 'Pikachu',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  }]);
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
