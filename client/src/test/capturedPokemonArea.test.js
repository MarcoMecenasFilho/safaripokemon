import Pokedex from '../pages/Pokedex';
import RenderWithProvider from './helper/RenderWithProvider';
import { waitForElementToBeRemoved } from "@testing-library/react";
import  {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {pokemonEmpty, pokemonFull} from './mocks/ProvideStateMock'

describe('Test if Pokemon captured exists in application', () => {

  it('tests if  the "Captured Pokemon" text appears in the application', () => {
    RenderWithProvider(<Pokedex />, pokemonEmpty);

    const message = screen.getByText('Captured Pokemon');
    expect(message).toBeInTheDocument();

  });

  it('Tests if no pokemon were caught should show the text"No Pokemon captured yet"', () => {
    RenderWithProvider(<Pokedex />, pokemonEmpty);

    const message = screen.getByText('No Pokemon captured yet');
    expect(message).toBeInTheDocument();
  });

  it('Tests if pokemon were caught should show the pokemon card', () => {
    RenderWithProvider(<Pokedex />, pokemonFull);
    const bulbasaur = screen.getByTestId('pokemon-card-Bulbasaur');
    const charmeleon = screen.getByTestId('pokemon-card-Charmeleon');
    const blastoise = screen.getByTestId('pokemon-card-Blastoise');
    const pikachu = screen.getByTestId('pokemon-card-Pikachu');

    expect(bulbasaur).toBeInTheDocument();
    expect(charmeleon).toBeInTheDocument();
    expect(blastoise).toBeInTheDocument();
    expect(pikachu).toBeInTheDocument();
  });

  it('Tests if pokemon were caught should show the names', () => {
    RenderWithProvider(<Pokedex />, pokemonFull);
    const bulbasaur = screen.getByText('Bulbasaur');
    const charmeleon = screen.getByText('Charmeleon');
    const blastoise = screen.getByText('Blastoise');
    const pikachi = screen.getByText('Pikachu');

    expect(bulbasaur).toBeInTheDocument();
    expect(charmeleon).toBeInTheDocument();
    expect(blastoise).toBeInTheDocument();
    expect(pikachi).toBeInTheDocument();
  });

  it('Test if pokemon cards have name, id, image and button', () => {
    RenderWithProvider(<Pokedex />, pokemonFull);
    const pokemonCard = screen.getByTestId('pokemon-card-Bulbasaur');
    const pokemonImage = screen.getByTestId('pokemon-image-Bulbasaur');
    expect(pokemonCard).toHaveTextContent('Bulbasaur');
    expect(pokemonCard).toHaveTextContent('1');
    expect(pokemonImage).toHaveAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png');
    expect(pokemonCard).toHaveTextContent('Free Pokemon');
  })

  it.only('tests if the release free pokemon button is clicked, the pokemon is excluded from the application',  () => {
    RenderWithProvider(<Pokedex />, pokemonFull);
    const bulbasaur = screen.queryByText('Bulbasaur');
    expect(bulbasaur).toBeInTheDocument();

    const freeBtn = screen.getByTestId('pokemon-free-Bulbasaur');
    userEvent.click(freeBtn);
    
    const bulbasaurFree = screen.queryByText('Bulbasaur');
    expect(bulbasaurFree).not.toBeInTheDocument()
    
  })

});