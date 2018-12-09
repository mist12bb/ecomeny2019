import React, { Component } from 'react'
import inputsGrap from './inputs.grap';
import jsonServer from '../../../../util/api/json-server';

export default class FormInputs extends Component {
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

  };
  
  render() {
    let {onAddAction} = this.props;
    let {fullAction} = this.state;
    return (
      <div>
      <div className={"form-new-actions__input"}>
          <inputsGrap.AmounInput/>
          <inputsGrap.DateInput/>
          <inputsGrap.DateInput/>
          <input type={"submit"} onClick={
            ()=>{this.setState({type: this.props.cateogry});onAddAction(fullAction)}
          }/>
      </div>
      </div>
    )
  }
}
