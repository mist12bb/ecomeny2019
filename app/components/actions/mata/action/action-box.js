import React from "react";
import {  Feed, Icon } from 'semantic-ui-react'
import { withState } from "recompose";

/* me */
import "./act.style.css"
import ActionInited from "./mata/init.front";
import ActionPutInit from "./mata/init.back";
import removeConfirmModal from "./mata/remove-confirm.modal";
/* me */


 const Action = ({onClickDel, onClickSave, i, action, onInit, init, onInilze, category, setActions}) =>  {
  return (
    <Feed.Event key={i} >
             <Feed.Label
              className={"amount-lable"}
              >
              <p
             className={"amount-lable__text"}
              children={action? action.amount:33}
             />
             </Feed.Label>
             <Feed.Content>
                <Feed.Date content={new Date (action.date).toLocaleDateString()}/>
                <Feed.Summary>
                <p>{action? action.info:'descripton gose here...'}</p>
                </Feed.Summary>
                <Feed.Event >
                {/* < Checkbox label="add to initlze"   checked={  init}   onChange={(e)=>{
                  console.log(init, action.init, "action init")
                  onInit(!init);
                  onInilze(action.id, init, action);

                }}></ Checkbox> */}
               <ActionInited init={action.init}/>
                </Feed.Event>
             </Feed.Content>
             <Feed.Meta>
                <ActionPutInit action={action} category={category} setActionsOnInitAction={(data)=>{
                  setActions(data)
                }}/>
             <removeConfirmModal className={"action-box__rem-btn"} onDeleteAction={()=>{onClickDel(i)}}>
             {/* <Icon name="remove circle"/> */}
             </removeConfirmModal>
             <button style={{all: "unset", cursor:"pointer"}}
             onClick={(e)=>{
               onClickSave(action)
             }}
             >
             <Icon name="save" />
             </button>
             </Feed.Meta>
            </Feed.Event>

  )
}



export default withState("init", "onInit", false)(Action);