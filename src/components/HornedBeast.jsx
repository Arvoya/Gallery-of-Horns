import React from "react";

class HornedBeast extends React.Component {

  
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.image_url} width="700px" alt={this.props.description} />
      </>
    )
  }
}

export default HornedBeast;