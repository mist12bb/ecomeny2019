import React from 'react';
import _ from "lodash";

import { Accordion, Label, Message, Card } from 'semantic-ui-react'
import {messeags, colors} from "./util"

const panels = _.times(3, i => ({
  key: `panel-${i}`,
  title: {
    content: <Label color={colors[i]} content={'!!!important'} />,
  },
  content: {
    content: <Message info header={'important messages!'} content={messeags[i]} />,
  },
}))


const Shorthand = () => {
  return (
    <div>
    <Card>
    <Card.Content>
    <Accordion defaultActiveIndex={1} panels={panels}/>
    </Card.Content>
    </Card>
    </div>
  );
};

export default Shorthand;