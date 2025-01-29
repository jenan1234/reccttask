import React from 'react';

const InlineStyledComponent = () => {
  const containerStyle = {
    backgroundColor: '#f0f0f0',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Inline Styles Example</h1>
      <button style={buttonStyle} onClick={handleButtonClick}>
        Click Me
      </button>
    </div>
  );
};

export default InlineStyledComponent;