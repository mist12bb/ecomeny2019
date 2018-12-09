import React, { Component } from 'react'
import {Provider} from "react-redux";
import {createStore} from "redux"
import rootReducer from "./redux/store/redecers";

import  DailyEntrings from "./daily.enter";
import Shorthand from './mata/util/!importent/importent.modal';


export default class EntringsHndel extends Component {
  componentDidMount() {
  }
  
  render() {
    return (
      <div>
      <Provider store={createStore(rootReducer)}>
      <DailyEntrings num={this.props.num}/>
      <Shorthand/>
      </Provider>
      </div>
    )
  }
}

