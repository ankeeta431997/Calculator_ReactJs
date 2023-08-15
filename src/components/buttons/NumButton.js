import React from 'react';
import BaseButton from './BaseButton';


// const NumButton = ({ number, handleClick }) => {
//   //console.log("Num Button Called ",number);
//   return <BaseButton className="num-button" label={number} onClick={() => handleClick(number)} />;
// };

// export default NumButton;


class NumButton extends BaseButton{
  onClickHandler=()=>{
    const{label,numButtonClick}=this.props;
    console.log("Number Handler ",label);
    numButtonClick(label);
  }
  render(){
    return<BaseButton{...this.props} onClick={this.onClickHandler}/>;
  }
}
export default NumButton;

// const numButton = ({ number, handleClick }) => {
  
//   return (
//     <button className="num-button" onClick={() => handleClick(number)}>
//       {number}
//     </button>
//   );
// };

// export default numButton;

