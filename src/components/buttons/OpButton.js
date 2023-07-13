import React from 'react';

const OpButton = ({ operator, handleClick }) => {
    //const operationButtonArray = ['/', '*', '+', '-'];
  return (
    <button className="op-button" onClick={() => handleClick(operator)}>
      {operator}
    </button>
  );
};

export default OpButton;
