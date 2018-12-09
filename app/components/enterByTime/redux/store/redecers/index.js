import { combineReducers } from "redux";

function dailyEntringAdd(state=false, action) {
  switch(action.type) {
    case "DAILY_ADDED":
      return action.bool; 
      break
  }
  return state;
}
function dailyEntringNum(state=0, action) {
  switch(action.type) {
    case "DAILY_ENTER":
      return action.num;
      break
  }
  return state;
}
function moutilyEntringsNum(state=0, action) {
  switch(action.type) {
    case "MOUNTLY_ENTRINGS":
      return action.num
      break
  }
  return state;
}
export default combineReducers({
  entringsNum: dailyEntringNum,
  moutilyEntrings: moutilyEntringsNum,
  added: dailyEntringAdd
})