import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/About">
            <About/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
