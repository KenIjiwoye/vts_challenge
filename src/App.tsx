import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { Lookup } from './screens/Lookup';
import Profile from './screens/Profile';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Container className="App my-4" >
          <Switch>
            <Route exact path='/'>
              <Lookup />
            </Route>
            <Route path='/profile' >
              <Profile />
            </Route>
          </Switch>
          
        </Container>
      </Router>
    </div>
  );
}

export default App;
