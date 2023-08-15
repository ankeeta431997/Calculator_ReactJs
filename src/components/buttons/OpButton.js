import React from 'react';
import BaseButton from './BaseButton';

class OpButton extends BaseButton{
  onClickHandler=()=>{
    const{operator,opButtonClick}=this.props;
    console.log("Operation Handler ",operator);
    opButtonClick(operator);
  }
  render(){
    return<BaseButton{...this.props} onClick={this.onClickHandler}/>;
  }
}
export default OpButton;

// const OpButton = ({ operator, handleClick }) => {
  
//   return <BaseButton className="fun-button" label={operator} onClick={() => handleClick(operator)} />;
// };

// export default OpButton;
