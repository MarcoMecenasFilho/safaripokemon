import Pokedex from '../pages/Pokedex';
import RenderWithProvider from './helper/RenderWithProvider';
import  {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {pokemonEmpty, pokemonFull} from './mocks/ProvideStateMock'


describe('Test Pokemon search', () => {
  afterEach(() => jest.clearAllMocks());

  it('Test if the pokemon has already been captured show the message "Pokemon has been captured"', () => {
    RenderWithProvider(<Pokedex />, pokemonFull);
    const searchInput = screen.getByTestId('search-name-pokemon');
    const searchButton = screen.getByText('Capture Pokemon');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    userEvent.type(searchInput, 'Pikachu');
    userEvent.click(searchButton);

    const resultCapture = screen.getByText('Pokemon has been captured');
    expect(resultCapture).toBeInTheDocument();

  })
  
  it('test if pokemon was successfully captured', async () => {
    const mockResponse = {
          name: 'Butterfree',
          id: 12,
          image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    };

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    RenderWithProvider(<Pokedex />, pokemonEmpty);
    const searchInput = screen.getByTestId('search-name-pokemon');
    const searchButton = screen.getByText('Capture Pokemon');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    userEvent.type(searchInput, 'Butterfree');
    userEvent.click(searchButton);

    const resultCapture = await screen.findByText('Successfully captured pokemon');
    expect(resultCapture).toBeInTheDocument();
});

  it('test if pokemon was not successfully captured', async () => {
    const mockResponse = {
      message: 'Pokemon not found',
    };

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    RenderWithProvider(<Pokedex />, pokemonEmpty);

    const searchInput = screen.getByTestId('search-name-pokemon');
    const searchButton = screen.getByText('Capture Pokemon');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    userEvent.type(searchInput, 'Butterfree');
    userEvent.click(searchButton);

    const resultCapture = await screen.findByText('Pokemon not found on safari');
    expect(resultCapture).toBeInTheDocument();
    });

    it('test if pokemon was successfully captured and is shown in the captured pokemon area', async () => {
      const mockResponse = {
            name: 'Butterfree',
            id: 12,
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
      };
  
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      })
  
      RenderWithProvider(<Pokedex />, pokemonEmpty);
      const searchInput = screen.getByTestId('search-name-pokemon');
      const searchButton = screen.getByText('Capture Pokemon');
      expect(searchInput).toBeInTheDocument();
      expect(searchButton).toBeInTheDocument();
  
      userEvent.type(searchInput, 'Butterfree');
      userEvent.click(searchButton);
  
      const resultCapture = await screen.findByText('Successfully captured pokemon');
      expect(resultCapture).toBeInTheDocument();

      const butterfree = await screen.findByTestId('pokemon-card-Butterfree');
      const butterfreeImage = await screen.findByTestId('pokemon-image-Butterfree');
      
      expect(butterfree).toBeInTheDocument();
      expect(butterfree).toHaveTextContent('Butterfree');
      expect(butterfree).toHaveTextContent('12');
      expect(butterfree).toHaveTextContent('Free Pokemon');
      expect(butterfreeImage).toHaveAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png');
    });

    
})