import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.info.title}</h1>
        <h3> {this.props.info.subtitle}</h3>
        <ListGroup>
          <ListGroupItem>{this.props.currentCategory}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default ProductList;
