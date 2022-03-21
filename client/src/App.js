import { Switch, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import AppProvider from './context/AppProvider'

function App() {
  return ( 
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Pokedex } />
      </Switch>
    </AppProvider>
  );
}

export default App;
