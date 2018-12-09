import React from 'react';
import { withState } from 'recompose';
import "../../../../util/style/actions.style/actions-category-menu.style.css"
const ActionsCateogry = ({activeItem, onActiveItem , handleSelectCategory}) => {
  return (
    <div className={"actions-category-menu"}>
    <div className={"actions-category-menu__"}>
    <div>
    <Segment inverted >
    <Menu inverted secondary>
        <Menu.Item name="expenses" active={activeItem === "expenses"}
                    onClick={(({name})=>{handleSelectCategory(name); onActiveItem(name)})}/>
        <Menu.Item name="enterings" active={activeItem === "enterings"} onClick={this.handleItemClick}
                    onClick={(({name})=>{handleSelectCategory(name); onActiveItem(name)})}/>
        <Menu.Item name="debts" active={activeItem === "debts"} onClick={this.handleItemClick}
                    onClick={(({name})=>{handleSelectCategory(name); onActiveItem(name)})}/>
        <Menu.Item name="loans"active={activeItem === "loans"} onClick={this.handleItemClick}
                    onClick={(({name})=>{handleSelectCategory(name); onActiveItem(name)})}/>
    </Menu>
    </Segment>
  </div>
    </div>
    </div>
  );
};

export default withState("activeItem", "onActiveItem", "debts")( ActionsCateogry );