import React, { Component } from 'react'
import AmounInput from  "../inputs/mata/inputTypes/amount.input"
import DateInput from  "../inputs/mata/inputTypes/date.input"
import InfoInput  from   '../inputs/mata/inputTypes/descripton.input';
export default {AmounInput , DateInput, InfoInput};

// import InfoInput  from   '../info.input';

/* import "./inputs.style.css";
import Axios from 'axios';
import InitCheack from '../init.chack';
import { FormSelectCategory } from './form-select-category';

export default class Inputs extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullAction: {
        amount: 7, info: "", date: new Date(), init: false
      }, 
      type: ""
    }
  }
  onChangeInput = (e, type) => {
      let fullAction = {...this.state.fullAction}
    switch(type) {
      case "date":
          fullAction = {...this.state.fullAction, date: e};
          this.setState({fullAction});
          break

        case "amount":
           fullAction = {...this.state.fullAction, amount: e}
          this.setState({fullAction})
          break
        case "info":
           fullAction = {...this.state.fullAction, info: e}
           this.setState({fullAction});
           break;
        case "init":
            fullAction = {...this.state.fullAction, init: true};
            this.setState({fullAction});
            console.log(e);
            
            break

    }

  }

  onAddActions = () => {
    let action = {...this.state.fullAction};

    Axios.post("http://localhost:1998/"+this.state.type, action);
  }

  render() {

    const {fullAction} = {...this.state};


    console.log("full action", fullAction);
    
    return (
      <div className={"form__inputs"}>
      <div className={"form__sys"}>
      <FormSelectCategory onSetType={(type)=>{
        this.setState({type})
      }} className={"form__select"}/>
        <AmounInput onChangeValue={this.onChangeInput} />
        <DateInput  onChangeValue={this.onChangeInput} />
        <InfoInput onChangeValue={this.onChangeInput} />
        <InitCheack onChangeValue={this.onChangeInput}/>
        <input type="submit" onClick={()=>{
              this.onAddActions()
        }} />
      </div>
      </div>
    )
  }

}
 */