import React from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import hornedbeastsData from "./assets/hornedbeastsData.json"
import SelectedBeast from './components/SelectedBeasts.jsx';

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




export default App
