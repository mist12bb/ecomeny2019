import React from 'react';
import {TextArea, Checkbox} from "semantic-ui-react";
import "./info.style.css"
const InfoInput = ({onChangeValue}) => {
  return (
    <div>
      <TextArea autoHeight 
      onChange={(e)=>{
        console.log(e);
        onChangeValue(e.currentTarget.value, "info")
      }}
      />
     
    </div>
  );
};

export default InfoInput;