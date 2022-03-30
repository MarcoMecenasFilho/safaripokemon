
import Pokedex from '../pages/Pokedex';
import RenderWithProvider from './helper/RenderWithProvider';
import  {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {pokemonEmpty} from './mocks/ProvideStateMock'




describe('Test if all inputs exist in the application', () => {

  describe('test the button to add pokemon to the bank', () => {

    
    it('Test if the add pokemon button exists and when clicked it opens the forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addbtn = screen.getByTestId("add-btn");
      expect(addbtn).toBeInTheDocument();

      userEvent.click(addbtn);

      const forms = screen.getByTestId('form-add')
      expect(forms).toBeInTheDocument();
    });


    it('Test if heading with text ("Add Pokemon on safari") exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addbtn = screen.getByTestId("add-btn");
      userEvent.click(addbtn);
      
      const h5Text = screen.getByText('Add Pokemon on safari');
      expect(h5Text).toBeInTheDocument();
    });

    it('Test if input name  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addbtn = screen.getByTestId("add-btn");
      userEvent.click(addbtn);
      const inputName = screen.getByTestId('name-create-form');
      expect(inputName).toBeInTheDocument();
    });

    it('Test if input id  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addbtn = screen.getByTestId("add-btn");
      userEvent.click(addbtn);
      const inputId = screen.getByTestId('id-create-form');
      expect(inputId).toBeInTheDocument();
    });

    it('Test if input image  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addbtn = screen.getByTestId("add-btn");
      userEvent.click(addbtn);
      const inputImage = screen.getByTestId('image-create-form');
      expect(inputImage).toBeInTheDocument();
    });
  });

})