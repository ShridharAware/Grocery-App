import { Container, Row, Col } from "react-bootstrap";
import CardAbstract from "../../ui/Card";
import { faker } from "@faker-js/faker";
const SnacksData = [...Array(20)].map(() => ({
  id: Number(faker.string.numeric(5)),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.urlPicsumPhotos(),
  qty: faker.number.int({ min: 0, max: 15 }),
}));

const Snacks: React.FC = () => {
  return (
    <Container>
      <h4 className="m-4">Snacks</h4>

      <Row className="d-flex justify-content-between">
        {SnacksData.map((item) => (
          <Col>
            <CardAbstract {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Snacks;
