import React from 'react';
import { Feed, Card } from 'semantic-ui-react';
import ActionsCategory from './mata/select-acts-cat/actions-category.menu';

const Actions = ({actions, actionsRender, category, handleCategory}) => {


  return (
    <div className="actions-compoentent">
    <div className={"select-cateogry__menu"}>
    <ActionsCategory handleSelectCategory={handleCategory}/>
    </div>
      <div className="actions-compoentent__card">
          <Card>
            <Card.Content>

              <Card.Hader>
              {category}
              </Card.Hader>

            </Card.Content>

            <Card.Content>
              <Feed>
                  {actionsRender()}
              </Feed>
            </Card.Content>

          </Card>
      </div>
    </div>
  );
};

export default Actions;