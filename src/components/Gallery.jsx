import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component {
  
  render() {
   
    return (
      <Container>
        <Row>
        {this.props.beastData.map((data) => (
          <Col key={data._id}>
            <HornedBeast
            image_url={data.image_url}
            title={data.title}
            description={data.description}
            keyword={data.keyword}
            horns={data.horns}/>
          </Col>
          ))}
        </Row>
      </Container>
    );
  }
  }

export default Gallery;