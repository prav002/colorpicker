import React from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';

function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Picker App</h1>
      </header>
      <main>
        <ColorPicker colors={colors} />
      </main>
    </div>
  );
}

export default App;
