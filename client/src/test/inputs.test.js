
import Pokedex from '../pages/Pokedex';
import RenderWithProvider from './helper/RenderWithProvider';
import  {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {pokemonEmpty} from './mocks/ProvideStateMock'




describe('Test if all inputs exists in the application', () => {
  localStorage.clear();


  describe('Test the form that search Pokemon in the database', () => {
    it('Test if input name  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);
      const inputName = screen.getByTestId('search-name-pokemon');
      expect(inputName).toBeInTheDocument();
    });

    it('Test if pokemon search button exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);
      const searchBtn = screen.getByText('Capture Pokemon');
      expect(searchBtn).toBeInTheDocument();
    });
    
    it(`Tests if initial message "Welcome to pokemon safari" 
        is shown in the application`, () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);
      const message = screen.getByText('Welcome to Pokemon safari');
      expect(message).toBeInTheDocument();

    });

  });

  describe('Test the form that create Pokemon in the database', () => {

    
    it('Test if the add pokemon button exists and when clicked it opens the forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      expect(addBtn).toBeInTheDocument();

      userEvent.click(addBtn);

      const forms = screen.getByTestId('form-add')
      expect(forms).toBeInTheDocument();
    });


    it('Test if heading with text ("Add Pokemon on safari") exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      userEvent.click(addBtn);
      
      const h5Text = screen.getByText('Add Pokemon on safari');
      expect(h5Text).toBeInTheDocument();
    });

    it('Test if input name  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      userEvent.click(addBtn);
      const inputName = screen.getByTestId('name-create-form');
      expect(inputName).toBeInTheDocument();
    });

    it('Test if input id  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      userEvent.click(addBtn);
      const inputId = screen.getByTestId('id-create-form');
      expect(inputId).toBeInTheDocument();
    });

    it('Test if input image  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      userEvent.click(addBtn);
      const inputImage = screen.getByTestId('image-create-form');
      expect(inputImage).toBeInTheDocument();
    });

    it('Test if the add pokemon button exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      userEvent.click(addBtn);

      const btn = screen.getByText('Add Pokemon')
      expect(btn).toBeInTheDocument();
    });

    it('Test if the button with text "Add Pokemon" exists', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      expect(addBtn).toBeInTheDocument();

      userEvent.click(addBtn);

      const btnAdd = screen.getByText('Add Pokemon')
      expect(btnAdd).toBeInTheDocument();
    });

    it('Test if the close form button exists and when clicked the form is closed', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const addBtn = screen.getByTestId("add-btn");
      expect(addBtn).toBeInTheDocument();

      userEvent.click(addBtn);

      const forms = screen.getByTestId('form-add')
      expect(forms).toBeInTheDocument();


      const closeBtn = screen.getByTestId('close-create-form');
      expect(closeBtn).toBeInTheDocument();

      userEvent.click(closeBtn);

      expect(forms).not.toBeInTheDocument();
    });

  });

  describe('Test the form that delete pokemon in the database', () => {

    it('Test if the delete pokemon button exists and when clicked it opens the forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const deleteBtn = screen.getByTestId("delete-btn");
      expect(deleteBtn).toBeInTheDocument();

      userEvent.click(deleteBtn);

      const forms = screen.getByTestId('form-delete')
      expect(forms).toBeInTheDocument();
    });

    it('Test if heading with text ("Remove Pokemon on safari") exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const deleteBtn = screen.getByTestId("delete-btn");
      userEvent.click(deleteBtn);
      
      const h5Text = screen.getByText('Remove Pokemon on safari');
      expect(h5Text).toBeInTheDocument();
    });


    it('Test if input name  exists in forms', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const deleteBtn = screen.getByTestId("delete-btn");
      userEvent.click(deleteBtn);
      const inputName = screen.getByTestId('name-delete-form');
      expect(inputName).toBeInTheDocument();
    });

    it('Test if the button with text "Remove Pokemon" exists', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const deleteBtn = screen.getByTestId("delete-btn");
      expect(deleteBtn).toBeInTheDocument();

      userEvent.click(deleteBtn);

      const removeBtn = screen.getByText('Remove Pokemon')
      expect(removeBtn).toBeInTheDocument();
    });


    it('Test if the close form button exists and when clicked the form is closed', () => {

      RenderWithProvider(<Pokedex />, pokemonEmpty);

      const deleteBtn = screen.getByTestId('delete-btn');
      expect(deleteBtn).toBeInTheDocument();

      userEvent.click(deleteBtn);

      const forms = screen.getByTestId('form-delete')
      expect(forms).toBeInTheDocument();


      const closeBtn = screen.getByTestId('close-delete-form');
      expect(closeBtn).toBeInTheDocument();

      userEvent.click(closeBtn);

      expect(forms).not.toBeInTheDocument();

    });

  })

})