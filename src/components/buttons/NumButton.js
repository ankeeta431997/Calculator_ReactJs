import React from 'react';

const numButton = ({ number, handleClick }) => {
    //const numButtonArray = ['9', '8', '7', '6', '5', '4', '1', '2', '3', '0'];
  return (
    <button className="num-button" onClick={() => handleClick(number)}>
      {number}
    </button>
  );
};

export default numButton;

