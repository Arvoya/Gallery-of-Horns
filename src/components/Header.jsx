import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


class Header extends React.Component  {


  handleChange = (event) => {
    this.props.searchedBeast(event.target.value);
  }

  render() {

    return (
      <div>
        <header>
        <h1>Horned Beasts</h1>
        <br />
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search By:</InputGroup.Text>
        <select name="type" id="">
          <option value="horns">Number of Horns</option>
        </select>
        <Form.Control
          placeholder="Input"
          aria-label="Input"
          aria-describedby="basic-addon1"
          type = "number"
          name = "hornAmount"
          onChange={this.handleChange}
        />
      </InputGroup>
        </header>
        <br />
      </div>
    )
  }
}

export default Header;
