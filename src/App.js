import './App.css';
import BoxForm from './components/BoxForm';
import React, {useState} from 'react';

function App() {

    const [newColor, setNewColor] = useState("red");
    const [colors, setColors] = useState([]);

    const gotColor = (newColor) => {
      setNewColor(newColor);
      setColors([...colors, newColor])
      colors.push(newColor);
    }
    

  return (
    <div className="App">
      <BoxForm onNewColor={ gotColor } color={newColor} colors={colors}/>
    </div>
  );
}

export default App;
