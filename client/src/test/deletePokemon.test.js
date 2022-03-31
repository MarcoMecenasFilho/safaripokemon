import Pokedex from '../pages/Pokedex';
import RenderWithProvider from './helper/RenderWithProvider';
import  {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {pokemonEmpty} from './mocks/ProvideStateMock'

describe('Test Pokemon delete in database',  () => {
  afterEach(() => jest.clearAllMocks());

  it('tests if it deletes the existing pokemon in the database and shows the message "Pikachu taken from safari"', async () => {
    

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      status: 204,
    })


    RenderWithProvider(<Pokedex />, pokemonEmpty);

    const deleteBtn = screen.getByTestId("delete-btn");
    userEvent.click(deleteBtn);

    const inputName = screen.getByTestId('name-delete-form');
    const removeBtn = screen.getByText("Remove Pokemon");

    userEvent.type(inputName, 'Pikachu');
    userEvent.click(removeBtn);

    const resultDelete = await screen.findByText('Pikachu taken from safari');
    expect(resultDelete).toBeInTheDocument();
  
  })

  it(`tests if it does not delete a pokemon that does not exist in the database and shows the 
      message "Pikachu is not on safari to be taken out"`,  async () => {
    
    const mockResult = {
          message: 'Pikachu does not exist in the database to be deleted'
        }

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResult),
    })


    RenderWithProvider(<Pokedex />, pokemonEmpty);

    const deleteBtn = screen.getByTestId("delete-btn");
    userEvent.click(deleteBtn);

    const inputName = screen.getByTestId('name-delete-form');
    const removeBtn = screen.getByText("Remove Pokemon");

    userEvent.type(inputName, 'Pikachu');
    userEvent.click(removeBtn);

    const resultDelete = await screen.findByText('Pikachu is not on safari to be taken out');
    expect(resultDelete).toBeInTheDocument();
  
  })
});