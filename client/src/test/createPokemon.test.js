import Pokedex from '../pages/Pokedex';
import RenderWithProvider from './helper/RenderWithProvider';
import  {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {pokemonEmpty} from './mocks/ProvideStateMock'


describe('Test Pokemon create in database',  () => {
  afterEach(() => jest.clearAllMocks());

  it('test if pokemon is already on database, show the message "Pokemon is already on safari"', async () => {
    
    const mockResponse = {
      message: 'Pokemon name already exist'
    };

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    })
    
    RenderWithProvider(<Pokedex />, pokemonEmpty);

    const addBtn = screen.getByTestId("add-btn");

    userEvent.click(addBtn);
  
    const inputName = screen.getByTestId('name-create-form');
    const inputId = screen.getByTestId('id-create-form');
    const inputImage = screen.getByTestId('image-create-form');
    const createBtn = screen.getByText("Add Pokemon");

    userEvent.type(inputName, 'Pikachu');
    userEvent.type(inputId, '25');
    userEvent.type(inputImage, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png');
    userEvent.click(createBtn);

    const resultCapture = await screen.findByText('Pokemon is already on safari');
    expect(resultCapture).toBeInTheDocument();

  })

  it('tests if the pokemon was successfully added to the database, showing the message "Pokemon added to safari successfully"', async () => {
    
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

    const addBtn = screen.getByTestId("add-btn");

    userEvent.click(addBtn);
  
    const inputName = screen.getByTestId('name-create-form');
    const inputId = screen.getByTestId('id-create-form');
    const inputImage = screen.getByTestId('image-create-form');
    const createBtn = screen.getByText("Add Pokemon");

    userEvent.type(inputName, 'Butterfree');
    userEvent.type(inputId, '12');
    userEvent.type(inputImage, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png');
    userEvent.click(createBtn);

    const resultCapture = await screen.findByText('Pokemon added to safari successfully');
    expect(resultCapture).toBeInTheDocument();

  })
});