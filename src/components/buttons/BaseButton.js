import React from 'react';
// const BaseButton = ({ label, onClick }) => {
//      //console.log("Base Button " ,label)
//    return (
//      <button className="buttons" onClick={onClick}>
//        {label}
//      </button>
//    );
//  };
 
//  export default BaseButton;
class BaseButton extends React.Component{
  render(){
    return(
      <button className={this.props.className} onClick={this.onButtonClick} id={this.props.id}>
        {this.props.label}
      </button>
    );
  }
  onButtonClick=()=>{
    this.props.onClick();
    console.log("in button click");
  }
}
export default BaseButton;