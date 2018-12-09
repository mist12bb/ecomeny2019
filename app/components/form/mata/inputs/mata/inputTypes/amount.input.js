import React from 'react';
import NumericInput from 'react-numeric-input';
import { withState } from "recompose";
import "./amount.input.style.css";

const AmountInput = ({amount, setAmount,  onChangeValue}) => {

  
  return (
    <div style={{cursor: "none", marginBottom: "20px"}}>
      <NumericInput 
      className="amount-input"
      min={7}
       max={1000}
        value={amount}
        onChange={
          (e) => {
            
            setAmount(e);
            console.log(e);
            onChangeValue(e, "amount")
            
          }}
        />
    </div>
  );
};

export default withState("amount", "setAmount", 7)(AmountInput);