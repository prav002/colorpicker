import React, { useState } from 'react';

function ColorPicker({ colors }) {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBackgroundColor(color); // Set the background color to the selected color
    setColorListVisible(false);
  };

  return (
    <div className="color-picker" style={{ backgroundColor }}>
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p className="selected-color">Selected Color: {selectedColor}</p>
      )}
    </div>
  );
}

export default ColorPicker;
