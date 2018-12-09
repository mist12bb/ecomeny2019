import React, { Component } from 'react'
import { connect} from "react-redux";
import { Button } from 'semantic-ui-react';
import  "./util.enterings/style/daily.entrings.style.css";
import Axios from 'axios';

import { dater } from './util.enterings/db/dates';
import Shorthand from './ui/shorthand';
import jsonServer from '../../util/api/json-server';
import { mountlyEntrings } from './mata/db/mounlyEntrings';
import { setNewDateEntr } from './mata/api';
import { amountByDate } from './mata/db/amount-by-date.func';

class DailyEntrings extends Component {
  constructor(props) {
    super(props);
    this.state = {daily: {date: new Date(), added: true}, added: false,date: new Date(), moutilyEntrings: 0};
    
    this.thisDayAdded = this.thisDayAdded.bind(this)
  }
  
  appendEntringsToMounts() {

  };


  componentDidMount() {
  let added = setNewDateEntr(this.state.daily, null, true);
   added.then((bool)=>{
      this.setState({added: bool})
    }) 
    this.setState({mountlyEntrings: mountlyEntrings()});
  };

  onAddedEntring = () => {
    Axios.get(url).then(({data})=>{
      let days = data;

      data.forEach(date=>{
        console.log(date);
        console.log("is it?", new Date (date["date"]).toLocaleDateString() === this.state.date.toLocaleDateString())
        console.log("new", new Date(date).toLocaleDateString() ,"data date", this.state.date.toLocaleDateString() )
        if (new Date (date["date"]).toLocaleDateString() === this.state.daily.date.toLocaleDateString() ) {
          /* let d = dater(new Date().toLocaleDateString());
          console.log(d); */
          this.setState({added: true, date:new Date()});
          console.log(date);

        } else {
         
         /*  let d = amountByDate(new Date().toLocaleDateString()); */
          setNewDateEntr(this.state.daily, amountByDate);
        }
      })
    });
  }
  render() {
    const {added} = this.state;
    const {num, moutilyEntrings} = this.props;
    let style =added? {display: "block"}:{display:"none"};

    return (

      <div style={{display: "grid", gridTemplateColumns: "200px 300px"}}>
      <div>
      {moutilyEntrings}
      {this.state.daily.date.toLocaleDateString()}
      <p>{!added ? "plase add the "+num+" daily entring":"You allrdy added the daily entrigns"}</p>
      <div style={{display:"none"}}>
      <Button children="pay daily"/>
      </div>
      </div>
      
        <Shorthand></Shorthand>

      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  num: state.entringsNum,
  moutilyEntrings: state.moutilyEntrings
})
export default connect(mapStateToProps)(DailyEntrings)