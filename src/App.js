import './App.css';
import BoxForm from './components/BoxForm';
import React, {useState} from 'react';

function App() {

    const [currentColor, setCurrentColor] = useState("red");

    const gotColor = (newColor) => {
      setCurrentColor(newColor);
    }

  return (
    <div className="App">
      <BoxForm onNewColor={ gotColor } color={currentColor}/>
    </div>
  );
}

export default App;
