import * as React from 'react';
import './App.css';
import MyButton from './components/MyButton';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Host from './host';
import Homepage from './components/Homepage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/host">
            <Host />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
