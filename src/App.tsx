import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }
  return (
    <div className="App">
      <Button onClick={handleClick} type="button" className="danger" size="medium" disabled>
        Disabled Button
      </Button>
    </div>
  );
}

export default App;
