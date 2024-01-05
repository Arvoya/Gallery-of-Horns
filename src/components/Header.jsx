import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';


class Header extends React.Component  {


  handleChange = (event) => {
    this.props.searchedBeast(event.target.value);
  }

  

  render() {

        
    let cycle = (data) => {

      let arr = [];

      data.forEach(element => {

        if (!arr.includes(element.horns)){
          arr.push(element.horns);
        }
      });
      return arr;
    }

    let hornsArr = cycle(this.props.beastData);
    
    return (
      <div>
        <header>
          <h1>Horned Beasts</h1>
          <br />
            <div>
              <InputGroup size="sm" className="mb-3" >
                <InputGroup.Text id="basic-addon1">Search By:</InputGroup.Text>
                  <select name="type" id="" onChange={this.handleChange}>
                    {hornsArr.map((element) => {
                      return <option key={element} value={element}>
                        {element} {element > 1 ? 'Horns' : 'Horn'}
                        </option>;
                    })}
                  </select>
              </InputGroup>
            </div>
        </header>
        <br />
      </div>
    )
  }
}

export default Header;
