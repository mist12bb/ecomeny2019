import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import {   Icon } from 'semantic-ui-react'

/* import { onPutInit, url } from './util'; */
import Axios from 'axios';
import { options } from '../../../util';
import { url, onPutInit } from '../../../util/api';


export default class ActionPutInit extends Component {
  render() {
    const {action,category, setActionsOnInitAction, setInitValue} = this.props;
    return (
   
      <Dropdown options={options} onChange={async (e, {value})=>{
        /* to be deleted */
          console.log("hello", action.init);
        /* to be deleted */
        
        Axios.get(`${url}/${category}`).then(({data})=>{
          if (value != "pick"){
             onPutInit(action, value, action.id, category);
              setActionsOnInitAction(data)
              
              }
        });
        /* to be deleted */
          console.table(action);
          console.log(value);
        /* to be deleted` */
        
      }}/>
      
    
    )
  }
}

