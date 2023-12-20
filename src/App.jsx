import React from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import hornedbeastsData from "./assets/hornedbeastsData.json"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      beastID: null,
      showModal: false,
      foundBeast: {},
    }
  }

  updateBeastID = (beastNum) => {
    this.setState({
      beastID: beastNum
    })
    this.findBeast(beastNum)
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  findBeast = (beastNum) => {
    hornedbeastsData.forEach(element => {
      if (element._id === beastNum) {
        this.setState({
          foundBeast: element
        })
      }
    })
  }

  render() {

    return (
      <>
      <Header />
      <Gallery beastData={hornedbeastsData} updateBeastID={this.updateBeastID} userClick={this.toggleModal}/>
      <SelectedBeast showModal={this.state.showModal} toggleModal={this.toggleModal} currentBeast={this.state.foundBeast}/>
      <Footer />
    </>
  )
  }
}

class SelectedBeast extends React.Component {

  
  render(){

    
    return (
      <>

      <Modal show={this.props.showModal} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.currentBeast.title}</Modal.Title>
        </Modal.Header>
          <img src={this.props.currentBeast.image_url} alt={this.props.currentBeast.description} width="500px" />
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




export default App
