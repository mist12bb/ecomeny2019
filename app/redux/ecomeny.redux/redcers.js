import { combineReducers } from "redux";
const actionsFetchReducers = (state = [], action)=>
  {switch(action.type){
    case "FETCH_ACTIONS":
      return action.actions;
      break;
  }
  return state;
};

export default combineReducers({
  actions: actionsFetchReducers
})