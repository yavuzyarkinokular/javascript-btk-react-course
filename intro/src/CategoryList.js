import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    aracsegmentleri: [
      { id: 1, type: "Manuel Benzin" },
      { id: 2, type: "Manuel Dizel" },
      { id: 3, type: "Otomatik Benzin" },
      { id: 4, type: "Otomatik Dizel" },
      { id: 5, type: "Ticari" },
    ],
  };

  render() {
    return (
      <div>
        <ListGroup>
          <h1> {this.props.info.title}</h1>
          <h3> {this.props.info.subtitle}</h3>
          {this.state.aracsegmentleri.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.type}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
