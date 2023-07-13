import React from 'react';

const FunButton = ({ label, handleClick }) => {
    //const funButtonArray = ['C', '=','DEL'];
  return (
    <button className="fun-button" onClick={() => handleClick(label)}>
      {label}
    </button>
  );
};

export default FunButton;
