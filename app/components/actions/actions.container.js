import React, { Component } from 'react'
import { bindActionCreators } from "redux";

import { on_fetch_actions } from '../../redux/ecomeny.redux/actions';
import jsonServer from '../../util/api/json-server';
import Actions from './actions.compoent';
import { actionsListRender } from './mata/actions.util/functions/render.function';


export default class ActionsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {actions: [], CATEGORY_TYPE: ""};
  };
  
  componentDidMount() {

    const {onFetchActions} = this.props;

    jsonServer("debts").then(({data})=>{
      onFetchActions(data);
    })
  };

  renderActions() {

    let {actions, CATEGORY_TYPE} = this.state;

      actionsListRender(actions, this.onActionFunc, CATEGORY_TYPE);
  }
  onActionFunc = () => {
      const onDelAction = (i)=>{
        let actions = [...this.state.actions];
        actions.filter((action, j)=>{
          return i != j;
        })

        this.setState({actions})
      };
      const onSaveActionApi = ()=>{};
      const onDelActionApi = ()=>{};
      const onSaveAction = ()=>{};
      return {
        onSave: onSaveAction, 
        onSaveApi: onSaveActionApi,
        onDel: onDelAction,
        onDelApi: onDelActionApi,
      }
  }
  handleCategory = (cat_name)  => {

    this.setState({CATEGORY_TYPE: cat_name});

  }

  render() {
    actionsListRender
    return (
      <div>
        <Actions actionsToRnder={this.renderActions.bind(this)} handleCategory={this.handleCategory}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  actions: state.actions
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onFetchActions:  on_fetch_actions
  })
)
export default connect(mapStateToProps, mapDispatchToProps)(ActionsIndex);
