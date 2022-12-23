import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
//reactstrap ekleme
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//reactstrap bitiş
import React, { Component } from "react";

export default class App extends Component {
  state = {
    currentCategory: "",
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.type });
  };
  render() {
    let productInfo = {
      title: "Product List",
      subtitle: "Bünyemizde ki araç kategorileri aşağıdaki gibidir   ",
    };
    let categoryInfo = {
      title: "Category List",
      subtitle: "Bünyemizdeki araçların listesi",
    };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>

          <Row>
            <Col xs="6">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="6">
              <ProductList
                currentCategory={this.state.currentCategory}
                info={productInfo}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
