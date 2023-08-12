import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input'

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }
  return (
    <div className="App">
      <Button onClick={handleClick} type="button" className="danger" size="medium" disabled>
        Disabled Button
      </Button>

      <Input type="text" label='this is a test' placeholder='test placeholder' name='test input' />
    </div>
  );
}

export default App;
