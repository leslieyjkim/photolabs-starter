import React, { useState, useEffect } from 'react';
import '../styles/LightSwitchButton.scss';

// eslint-disable-next-line func-style
function LightSwitchButton() {
  // State to track whether night mode is on or off
  const [isNightMode, setIsNightMode] = useState(false);
  
  // Effect to apply the night mode class to the body element
  useEffect(() => {
    document.body.classList.toggle('night-mode', isNightMode);
    localStorage.setItem('nightMode', isNightMode);
  }, [isNightMode]);
  
  // Function to handle the button click
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  
  return (
    <button className="LightSwitchButton" onClick={toggleNightMode}>
      {isNightMode ? (
        <span className="on"> LIGHT ON </span>
      ) : (
        <span className="off"> LIGHT OFF </span>
      )}
    </button>
  );
}
  
export default LightSwitchButton;