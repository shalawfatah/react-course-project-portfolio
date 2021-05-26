import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
