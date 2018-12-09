
import React from 'react';

const ActionInited = ({init}) => {
  return (
    <div>
      <p>{init? "yes": "no"}</p>
    </div>
  );
};

export default ActionInited;




/* import React, { Component } from 'react'

export default class ActionInit extends Component {
  render() {
    const {init} = this.props;
    return (
      <p >{init ? "yes":"no"}</p>
    )
  }
}
 */