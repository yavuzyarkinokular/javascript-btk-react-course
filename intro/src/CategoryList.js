import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  //State Yapısı ile Tutulan Değerin Çekilmesi
  constructor(props) {
    super(props);
    this.state = {
      aracsegmentleri: [
        { id: 1, aracsegmenti: "Manuel Benzin" },
        { id: 2, aracsegmenti: "Manuel Dizel" },
        { id: 3, aracsegmenti: "Otomatik Benzin" },
        { id: 4, aracsegmenti: "Otomatik Dizel" },
        { id: 5, aracsegmenti: "Ticari" },
      ],
    };
  }
  render() {
    return (
      <div>
        <ListGroup>
          <h1> {this.props.info.title}</h1>
          <h3> {this.props.info.subtitle}</h3>
          <h3> Müsaitlik Durumu: {this.state.sayac}</h3>
          {this.state.aracsegmentleri.map((aracsegmentleri) => (
            <ListGroupItem active>{aracsegmentleri.aracsegmenti}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default CategoryList;
