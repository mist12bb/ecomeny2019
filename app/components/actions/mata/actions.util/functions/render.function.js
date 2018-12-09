import React from "react";
import Action from "../../action/action-box";

export const actionsListRender = (actions,onMataFunc, category) => {
  const {onDel, onSave, onSaveApi, onDelApi} = onMataFunc;
  const onMataFuncPassed = [ onDel, onSave, onSaveApi, onDelApi];
  return actions.map((action, key)=>{
    return actionBoxRneder(action , onMataFunc, key, category);
      
  })
}

export const actionBoxRneder = (action, onMataFunc, key, category) => {
  return <Action action={action} onMataFunc={onMataFunc} key={key} category={category} />;
};