import React from 'react'
import { Button, Modal } from 'semantic-ui-react';
// import 'semantic-ui-css'
import '../App.css';
import Form from '../components/Form'

export default class Background extends React.Component {
    
  state = { open: false }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  componentWillMount(){
  this.setState({ open: true })
  }
    render() {
        const { open } = this.state;
        const divStyle = { background : 'red'}
        return (
            <div>
            <Button onClick={this.show('blurring')}>Ödeme Yap</Button>
            <Modal style={divStyle}  dimmer={'blurring'} open={open} onClose={this.close}>
          <Modal.Header>Eticsoft</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form/>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              İPTAL ET
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="DEVAM ET"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
            </div>
        )
    }
}
