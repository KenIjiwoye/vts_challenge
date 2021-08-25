import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { Lookup } from './screens/Lookup';
import Profile from './screens/Profile';
import { Navigation } from './components/Navigation/Navigation';
import Login from './screens/Login';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [routeVisited, setRouteVisited] = useState(false)
  return (
    <div>
      <Router>
        {userLoggedIn && <Navigation />}
        <Container className="App my-4" >
         {userLoggedIn ? (
            <Switch>
            <Route exact path='/'>
              <Lookup />
            </Route>
            <Route path='/profile' >
              <Profile />
            </Route>
            <Route exact path='*'>
            <Redirect to="/" />
          </Route>
          </Switch>
         ): (
          <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='*'>
            <Redirect to="/login" />
          </Route>
        </Switch>
         )}
          
        </Container>
      </Router>
    </div>
  );
}

export default App;
