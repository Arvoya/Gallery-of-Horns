import React from "react";
import heart from "../assets/heart3.png"

class HornedBeast extends React.Component {

  constructor () {
    super();
    this.state = {
      count: 0,
    }
  }


  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count +1
    }))
  }

  
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.image_url} width="300px" alt={this.props.description} onClick={this.handleClick} />
      <section><img src={heart} alt="" width="20px"/>{this.state.count}</section>
      </>
    )
  }
}

export default HornedBeast;