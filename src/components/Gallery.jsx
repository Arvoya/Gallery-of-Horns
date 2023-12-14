import React from "react";
import HornedBeast from "./HornedBeast";
import hornedbeastsData from "../assets/hornedbeastsData.json"

class Gallery extends React.Component {

  constructor (props) {
    super(props);
    
  }
  
  render () {
    let hornedBeasts = []
    
    {hornedBeasts = hornedbeastsData.map( (data) => 
      <HornedBeast
        key={data._id}
        image_url={data.image_url}
        title={data.title}
        description={data.description}
        keyword={data.keyword}
        horns={data.horns}
      />
    )
    }

    return (
      <>
      {hornedBeasts}
      </>
    )
    
  }


  }

export default Gallery;