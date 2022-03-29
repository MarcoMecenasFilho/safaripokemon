import AppProvider from '../../context/AppProvider';
import {render} from '@testing-library/react';


const renderWithProvider = (component) => {
return  (
    render(
    <AppProvider>
      {component}
    </AppProvider>
))
}

export default renderWithProvider