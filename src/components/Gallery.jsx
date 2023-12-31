import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Gallery extends React.Component {
  
  
  render() {

    if (this.props.searchedBeast === undefined) {
      return (
        <Container >
          <Row>
          {this.props.beastData.map((data) => (
            <Col key={data._id}>
              <HornedBeast
              image_url={data.image_url}
              title={data.title}
              description={data.description}
              keyword={data.keyword}
              horns={data.horns}/>
              <button onClick={() => {this.props.updateBeastID(data._id); this.props.userClick();}}>More Info</button>
            </Col>
            ))}
          </Row>
        </Container>)
        } else if (this.props.searchedBeast > 0) { 
            let newBeastData = this.props.beastData.filter((data) => data.horns === this.props.searchedBeast)
            
            return (
              <Container>
                <Row>
                {newBeastData.map((data) => (
                  <Col key={data._id}>
                    <HornedBeast
                    image_url={data.image_url}
                    title={data.title}
                    description={data.description}
                    keyword={data.keyword}
                    horns={data.horns}/>
                    <button onClick={() => {this.props.updateBeastID(data._id); this.props.userClick();}}>More Info</button>
                  </Col>
                  ))}
                </Row>
              </Container>)
        }
        }
    
    }
  

export default Gallery;