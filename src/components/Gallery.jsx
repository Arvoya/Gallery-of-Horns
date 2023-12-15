import React from "react";
import HornedBeast from "./HornedBeast";
import hornedbeastsData from "../assets/hornedbeastsData.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component {
  
  render() {
    const firstCol = [];
    const secondCol = [];
    const thirdCol = [];

    hornedbeastsData.map((data, index) => {
      const beastComponent = (
        <HornedBeast
          key={data._id}
          image_url={data.image_url}
          title={data.title}
          description={data.description}
          keyword={data.keyword}
          horns={data.horns}
        />
      );

      if (index % 3 === 0) {
        firstCol.push(beastComponent);
      } else if (index % 3 === 1) {
        secondCol.push(beastComponent);
      } else {
        thirdCol.push(beastComponent);
      }

      return beastComponent;
    });

    return (
      <Container>
        <Row>
          <Col>{firstCol}</Col>
          <Col>{secondCol}</Col>
          <Col>{thirdCol}</Col>
        </Row>
      </Container>
    );
  }
}

export default Gallery;