
import App from '../App';
import { screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProvider from './helper/renderWithProvider';



describe('Test if all inputs exist in the application', () => {
  renderWithProvider(<App />);

  describe('test the button to add pokemon to the bank', () => {

    it('Test if the add pokemon button exists and when clicked it opens the forms', () => {
      const addbtn = screen.getByTestId("add-btn");
      expect(addbtn).toBeInTheDocument();

      userEvent.click(addbtn);

      const forms = screen.getByTestId('form-add')
      expect(forms).toBeInTheDocument();
    });
  });

})