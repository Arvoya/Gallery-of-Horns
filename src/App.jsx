import React from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import hornedbeastsData from "./assets/hornedbeastsData.json"

class App extends React.Component {

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
