import React, { Component } from 'react'

import DayPickerInput from 'react-day-picker/DayPickerInput';
import "./date.input.style.css";

import 'react-day-picker/lib/style.css';

export default class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: new Date(),
      isEmpty: true,
      isNotVaild: false
    }
     this.onChengeDay = this.onChengeDay.bind(this);
  }
  onChengeDay(selectedDay, modifiers,dayPickerInput) {
      this.setState({selectedDay})
      let input = dayPickerInput.getInput();
      console.log(!input.value.trim());
      
      this.setState({isEmpty: !input.value.trim()})
  }
  render() {
    const {selectedDay} = this.state;
    console.log(selectedDay);
    
    return (
      <div>
 {/*      <p>{this.state.isNotVaild && "not vaild"}</p>
      <p>{this.state.isEmpty && "set new date"}</p> */}
        <DayPickerInput
            
        value={selectedDay}
        onDayChange={(selectedDay, modifiers,dayPickerInput)=>{
           
            this.setState({selectedDay})
            let input = dayPickerInput.getInput();
            console.log(!input.value.trim());
            this.setState({isEmpty: !input.value.trim()});
            this.props.onChangeValue(selectedDay, "date")
        }}
      

        onChange={
          ()=>{
            this.setState({isNotVaild: true})
            console.log("books")
          }
        }

        modifiers={{
          foo: new Date(),
        }}
        initialMonth= {new Date()}
        dayPickerProps={
          {selectedDays: selectedDay}
        }
        ></DayPickerInput>
      </div>
    )
  }
}
