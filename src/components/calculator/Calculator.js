import React, { useState } from 'react';
//import NumButton from '../buttons/NumButton';
// import FunButton from '../buttons/funButton';
// import OpButton from '../buttons/OpButton';
// import Display from '../display/Display';
// import NumButton from '../buttons/numButton';
import axios from 'axios';
import CalculatorComponent from '../model/CalculatorComponent';
import authHeader from '../../services/auth.header';


function Calculator() {

  const apiUrl = 'http://localhost:8080/SpringSecurityWithJwt/calculation';
  //const apiUrl = 'http://localhost:8080/SpringSecurityJwt/calculation';

  const [displayValue, setDisplayValue] = useState('0');

  const [inputArray, setInputArray] = useState([]);
  const [previousResult, setPreviousResult] = useState('0');

  const handleNumberClick = (num) => {
    console.log("Number Button Handler from the Calculator ", num);
    // // let value = displayValue;
    // // const newValue = value === '0' ? num.toString() : value + num;
    // // setDisplayValue(newValue);

    // let value = displayValue + "";
    // // console.log("Number key " + displayValue);
    // const newValue = value === '0' ? num.toString() : value + num;
    // setDisplayValue(newValue);
    // const updatedInputArray = [...inputArray];

    // if (updatedInputArray.length > 0 &&
    //   updatedInputArray[updatedInputArray.length - 1].type === 'num') {
    //   updatedInputArray[updatedInputArray.length - 1].value += num;
    // } else {
    //   updatedInputArray.push({ value: num, type: 'num' });
    // }
    const newValue = displayValue === '0' ? num.toString() : displayValue + num;
    setDisplayValue(newValue);

    const updatedInputArray = [...inputArray];
    if (updatedInputArray.length > 0 && updatedInputArray[updatedInputArray.length - 1].type === 'num') {
      updatedInputArray[updatedInputArray.length - 1].value += num;
    } else {
      updatedInputArray.push({ value: num.toString(), type: 'num' });
    }
    setInputArray(updatedInputArray);
    console.log(inputArray, 'after push');
    setInputArray(updatedInputArray)
  };

  const getValue = () => {
    return displayValue;
  };

  const setValue = (value) => {
    setDisplayValue(value);
  };

  const getInputArray = () => {
    return inputArray;
  };

  const setInputArrayState = (newInputArray) => {
    setInputArray(newInputArray);
  };


  const handleFunctionClick = (func) => {
    console.log("Function Button click calculator: ", func);
    if (func === 'C') {
      const newInputArray = getInputArray();
      setValue('0');
      setPreviousResult('0');
      setInputArrayState([]);
          setDisplayValue('0');
       setInputArray([]);
      
    } else if (func === '=') {
      try {
         calculate();
        // let value = getValue();
        // const result = eval(value);
        // setValue(result.toString());
      } catch (error) {
        console.log('Error:', error);
      }
    }
    else if (func === 'DEL') {
      const newInputArray = [...inputArray];
      newInputArray.pop();
      console.log(newInputArray, 'after pop');
      const value = getValue()+"";
      const newValue = value.length === 1 ? '0' : value.slice(0, -1);
      setValue(newValue);
      setInputArrayState(newInputArray);
    } 
    // else if (func === 'UNDO') {
    //   const newUndoStack = [...inputArray];
    //   const previousValue = newUndoStack.pop();
    //   if (previousValue) {
    //     setValue(previousValue);
    //     setInputArrayState([{ value: previousValue, type: 'num' }]);
    //   }
    // }

    //first code which is in used
    // if (func === 'C') {
    //   setDisplayValue('0');
    //   setInputArray([]);
    //   setPreviousResult('0');
    // } else if (func === '=') {
    //   try {
    //    // calculate();
    //    let value = getValue();
    //    const result = eval(value);
    //    setValue(result.toString());
    //   } catch (error) {
    //     console.log('Error:', error);
    //   }
    // } else if (func === 'DEL') {
    //   setDisplayValue((prevValue) => prevValue.slice(0, -1));
    //   setInputArray((prevArray) => prevArray.slice(0, -1));
    // }
    //---------------------------------------------------
    //   setInputArray((prevArray) => {
    //     const newArray = [...prevArray];
    //     newArray.pop();
    //     return newArray;
    //   });
    //   const value = displayValue + "";
    //   const newValue = value.length === 1 ? '0' : value.slice(0, -1);
    //   setDisplayValue(newValue);

  };

  const handleOperationClick = (op) => {
    // const value = displayValue;
    // const lastChar = value.slice(-1);
    // let newValue = null;
    // if (lastChar === '+' || lastChar === '-' || lastChar === '*' ||lastChar === '/') {
    //   newValue = value.slice(0, -1) + op;
    // } else {
    //   newValue = value + op;
    // }
    // setDisplayValue(newValue);

    // const value = displayValue + "";
    // const lastChar = value.slice(-1);
    // let newValue = null;
    // if (lastChar === '+' || lastChar === '-' || lastChar === '*' ||
    //   lastChar === '/') {
    //   newValue = value.slice(0, -1) + op;
    // } else {
    //   newValue = value + op;
    // }
    // setDisplayValue(newValue);
    // const updatedInputArray = [...inputArray];
    // if (updatedInputArray.length > 0 &&
    //   updatedInputArray[updatedInputArray.length - 1].type === 'op') {
    //   updatedInputArray[updatedInputArray.length - 1].value = op;
    // } else {
    //   updatedInputArray.push({ value: op, type: 'op' });
    // }
    if (op === '=') {
      // Call the calculate function and handle the logic
      // Clear inputArray after calculation
    } else {
      let value = getValue() + "";
      const lastChar = value.slice(-1);
      let newValue = null;

      if (lastChar === '+' || lastChar === '-' || lastChar === '*' ||
        lastChar === '/') {
        newValue = value.slice(0, -1) + op;
        setValue(newValue);
      } else {
        newValue = value + op;
        setValue(newValue);
      }

      const newInputArray = getInputArray();

      if (newInputArray.length > 0 && newInputArray[newInputArray.length - 1].type === 'op') {
        // Update the last operation key instead of adding a new one
        newInputArray[newInputArray.length - 1].value = op;
      } else {
        // Add the operation key to the array
        newInputArray.push({ value: op, type: 'op' });
      }

      // if (previousResult) {
      //   // Handle undoStack and inputArray merging here
      // } else {
      //   setInputArrayState(newInputArray);
      // }
      setInputArray(newInputArray);
      console.log(newInputArray, 'after push');
    }

  };

  // const calculator = () => {
  //   let value = displayValue;
  //   try {
  //     const result = eval(value);
  //     setDisplayValue(result.toString());
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // };

  const calculate = () => {
    // first code
    // let value = displayValue + "";
    // const inputArrayToSend = [...inputArray];
    // if (previousResult !== '0') {
    //   axios.post(apiUrl, JSON.stringify(inputArrayToSend))
    //     .then((response) => {
    //       const result = response.data.result;
    //       setPreviousResult(result);
    //       setDisplayValue(result);
    //       setInputArray([{ value: result, type: 'num' }]);
    //       console.log("Result: " + result);
    //     })
    //     .catch((error) => {
    //       console.log('Error:', error);
    //     });
    // } else {
    //   axios.post(apiUrl, JSON.stringify(inputArrayToSend))
    //     .then((response) => {
    //       const result = response.data.result;
    //       setPreviousResult(result);
    //       setDisplayValue(result);
    //       setInputArray([...inputArray, { value: result, type: 'num' }]);
    //       console.log("Result: " + result);
    //     })
    //     .catch((error) => {
    //       console.log('Error:', error);
    //     });
    // }

    const inputArrayToSend = getInputArray();

    if (previousResult !== '0') {
      axios.post(apiUrl, inputArrayToSend,{headers:authHeader()})
        .then(resp => {
          const result = resp.data.result;
          setPreviousResult(result);
          setInputArrayState([{ value: result, type: 'num' }]);
          setValue(result);
          console.log("Result: " + result);
        })
        .catch(error => {
          if (error.response && error.response.status === 403) {
            console.log('Access Forbidden');
            alert('You are a user. Only admin access is required to see the output.');
          }
        });
    } else {
      axios.post(apiUrl, inputArrayToSend,{headers:authHeader()})
        .then(resp => {
          const result = resp.data.result;
          setPreviousResult(result);
          setInputArrayState([...inputArray, { value: result, type: 'num' }]);
          setValue(result);
          console.log("Result: " + result);
        })
        .catch(error => {
          if (error.response && error.response.status === 403) {
            console.log('Access Forbidden');
            alert('You are a user. Only admin access is required to see the output.');
          }
        });
    }
  };

  return (
    <CalculatorComponent
      displayValue={displayValue}
      handleNumberClick={handleNumberClick}
      handleOperationClick={handleOperationClick}
      handleFunctionClick={handleFunctionClick}
    />
  );
}

export default Calculator;


