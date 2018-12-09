import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { withState } from 'recompose';


const RemoveModal = ({openModal, onOpenModal, onDeleteAction}) => (
  <Modal
   open={openModal}
    trigger = { <Button
                       style={{all: 'unset', cursor: 'pointer'}}
                        className={'action-box__rem-btn'}
                         onClick={()=>{onOpenModal(true)}}
                         >
                              <Icon name="delete"/>
              </Button>}
     basic
     size='small'>
    <Header icon='archive'  content='deleteing an actions' />
    <Modal.Content>
      <p>
        are you sure that you what to delete this action?
      </p>
    </Modal.Content>
    <Modal.Actions>

      <Button 
      basic
       color='red'
        inverted = {false}
        onClick={() => {
            onOpenModal(false)
           {/*  toBeDeleteFunc(false) */}
        }}>
            <Icon name='remove' />
            No
      </Button>

      <Button
      onClick={() => {
        onOpenModal(false);
        onDeleteAction()
{/*         toBeDeleteFunc(true)
 */}    }}
       color='green'
        inverted

        >
          <Icon name='checkmark' />
           Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default withState("openModal", "onOpenModal", false)(RemoveModal)
