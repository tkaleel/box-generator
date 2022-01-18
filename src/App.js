import './App.css';
import BoxForm from './components/BoxForm';
import React, {useState} from 'react';

function App() {

    const [currentColor, setCurrentColor] = useState("red");
    const [colorArr, setColorArr] = useState([]);

    const gotColor = (newColor) => {
      setCurrentColor(newColor);
      colorArr.push(newColor);
    }
    

  return (
    <div className="App">
      <BoxForm onNewColor={ gotColor } color={currentColor} colors={colorArr}/>
    </div>
  );
}

export default App;
