import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        { carId: 1, carBrand: "Clio vb" },
        { carId: 2, carBrand: "Courier vb" },
        { carId: 3, carBrand: "City ve megane vb" },
        { carId: 4, carBrand: "Egea" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1> {this.props.info.title}</h1>
        <h3> {this.props.info.subtitle}</h3>
        {this.state.cars.map((cars) => (
          <ListGroup>
            <ListGroupItem active>{cars.carBrand}</ListGroupItem>
          </ListGroup>
        ))}
      </div>
    );
  }
}

export default ProductList;
