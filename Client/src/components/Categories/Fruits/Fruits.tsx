import { Row, Col, Container } from "react-bootstrap";
import { faker } from "@faker-js/faker";
import CardAbstract from "../../ui/Card";
export const FruitsData = [...Array(20)].map(() => ({
  id: Number(faker.string.numeric(5)),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.urlPicsumPhotos(),
  qty: faker.number.int({ min: 0, max: 15 }),
}));

const Fruits: React.FC = () => {
  return (
    <Container>
      <h4 className="m-4">Fruits</h4>

      <Row className="d-flex justify-content-between">
        {FruitsData.map((item) => (
          <Col key={item.id}>
            <CardAbstract {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Fruits;
