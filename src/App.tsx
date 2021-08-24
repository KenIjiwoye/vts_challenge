import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Lookup } from './screens/Lookup';
import Profile from './screens/Profile';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Container className="App my-4" >
        
        {/* <Lookup /> */}
        <Profile />
      </Container>
    </div>
  );
}

export default App;
