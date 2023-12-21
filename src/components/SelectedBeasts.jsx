import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  
  render(){

    
    return (
      <>

      <Modal show={this.props.showModal} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.currentBeast.title}</Modal.Title>
        </Modal.Header>
          <img src={this.props.currentBeast.image_url} alt={this.props.currentBeast.description} width="100%" />
        <Modal.Body>{this.props.currentBeast.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default SelectedBeast