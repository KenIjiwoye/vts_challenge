import React, {useState, useEffect} from 'react';
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = localStorage.getItem('currentUser') ? setUserLoggedIn(true) : setUserLoggedIn(false)
    setIsLoading(false)
    return checkAuth
  }, [])

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUserLoggedIn(false)
  }

  const updateUserDetails = () => {}
  return (
    <div>
      <Router>
       {isLoading ? <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center',  alignItems: 'center', height: '100vh'}} > <h2>Loading...</h2> </div> : (
          <>
          {userLoggedIn && <Navigation logout={logout} />}
          <Container className="App my-4" >
           {userLoggedIn ? (
              <Switch>
              <Route exact path='/'>
                <Lookup />
              </Route>
              <Route path='/profile' >
                <Profile />
              </Route>
              <Route path='*'>
              <Redirect to="/" />
            </Route>
            </Switch>
           ): (
            <Switch>
            <Route exact path='/login'>
              <Login setUserLoggedIn={setUserLoggedIn}  />
            </Route>
            <Route path='*'>
              <Redirect to="/login" />
            </Route>
          </Switch>
           )}
            
          </Container>
          </>
       )}
      </Router>
    </div>
  );
}

export default App;
