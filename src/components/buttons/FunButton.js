import React from 'react';
import BaseButton from './BaseButton';

class FunButton extends BaseButton{
  onClickHandler=()=>{
    const{label,funButtonClick}=this.props;
    console.log("Function Handler ",label);
    funButtonClick(label);
  }
  render(){
    return<BaseButton{...this.props} onClick={this.onClickHandler}/>;
  }
}
export default FunButton;
// const FunButton = ({ label, handleClick }) => {
    
//   return <BaseButton className="fun-button" label={label} onClick={() => handleClick(label)} />;

// };

// export default FunButton;
