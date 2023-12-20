import React from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import hornedbeastsData from "./assets/hornedbeastsData.json"

/*
TODO: Send a function into your Gallery component that allows the user to update state in the App
TODO: create state in constructor to take in beastID value.
TODO: pass the function to update the beastID value as a prop to the Gallery component
TODO: create a button in Gallery component to use the function to share the beastID value
TODO: use the onClick attribute within the button to use the function.
TODO: Create SelectedBeast component and include it your App
TODO: Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap
*/

class App extends React.Component {

  constructor() {
    super();
    this.state {
      
    }
  }

  render() {

    return (
      <>
      <Header />
      <Gallery beastData={hornedbeastsData}/>
      <Footer />
    </>
  )
  }
}

export default App
