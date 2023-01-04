import React, { Component } from "react";
import { Table } from "reactstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.info.title}</h1>
        <h3> {this.props.info.subtitle}</h3>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity per Unit</th>
              <th>Units in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;
