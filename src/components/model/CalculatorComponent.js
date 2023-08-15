import React from 'react';
import FunButton from '../buttons/FunButton';
import OpButton from '../buttons/OpButton';
import Display from '../display/Display';
import NumButton from '../buttons/NumButton';
import { numberButtons,operatorButtons,functionButtons } from './ButtonValues';

const CalculatorComponent = ({ displayValue, handleNumberClick, handleOperationClick, handleFunctionClick }) => {
  return (
    <div className="calculator">
      <Display value={displayValue} />

      <div className="button-container">
        <div className="num-buttons">
          {numberButtons.map((number) => (
            <NumButton key={number} number={number} label={number} numButtonClick={()=>handleNumberClick(number)} />
          ))}
        </div>

        <div className="op-buttons">
          {operatorButtons.map((operator) => (
            <OpButton key={operator} operator={operator} label={operator} opButtonClick={()=>handleOperationClick(operator)} />
          ))}
        </div>

        <div className="fun-buttons">
          {functionButtons.map((label) => (
            <FunButton key={label} label={label} funButtonClick={()=>handleFunctionClick(label)} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CalculatorComponent;