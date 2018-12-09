import React, { Component } from 'react'
import { fetchActions } from './functions';


export default class SumEctActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      comm: 0,
      sumExps: 0
    };
  }

  componentDidMount() {
    fetchActions().then(({sum, comm, sumExps})=>{
      comm = Math.round(comm);
      console.log(sum, comm, sumExps);
      
      this.setState({sum, comm, sumExps})
      
    })
  }

  render() {
    let {sum, comm} = this.state;

    return (
      <div>
        <p 
        children={
        this.state[this.props.as]
        }
        />
      </div>
    )
  }
}
