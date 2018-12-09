import React, { Component } from 'react'
import FormInputs from './mata/inputs';
import FormCategory from './mata/cateogry.form/select-category.form';

export default class FormAddAction extends Component {
    constructor(props){
      super(props);
      this.state = {
        cateogry : "debts"
      }
      this.setCateory = this.setCateory.bind(this);
    }

    setCateory(value) {

      this.setState({cateogry: value});
      console.log("set category to", value);

    }

    onAddNewActionApi= (obj) => {
      let obj = {...obj};
      let {cateogry} = this.state;
  
      jsonServer.post(cateogry, obj);
    };

  render() {

    let cateogry = this.state.cateogry;

    return (
      <div>
      <div className={"form"}>
      
      <div className={"form__inputs"} >
      <form onChange={e=>{e.preventDefault()}}>
      <FormCategory onSetCateory={setCateory}/>
          <FormInputs cateogry={cateogry} onAddAction={this.onAddNewActionApi} />
      </form>
      
      </div>
      </div>
      </div>
    )
  }
}
