import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import AppProvider from './context/AppProvider'

function App() {
  return ( 
    <AppProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Pokedex } />
          </Switch>
        </BrowserRouter>
    </AppProvider>
  );
}

export default App;
