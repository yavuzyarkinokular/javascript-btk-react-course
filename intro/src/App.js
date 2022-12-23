import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
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
            <CategoryList info={productInfo}></CategoryList>
          </Col>
          <Col xs="6">
            <ProductList info={categoryInfo}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
