import React from 'react';
import { render } from '@testing-library/react';
import Provider from './ProviderMock';

const  RenderWithProvider = (component, mock) => {

return ({
  ...render(
    <Provider mock={mock} component={component}>
      {component}
    </Provider>
  )
})
}

export default  RenderWithProvider;