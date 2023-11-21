import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Logo from "../../assets/react.svg";
import { BsPlus, BsDash } from "react-icons/bs";
import { ShopContext } from "../../context/GroceryContext";
interface CardProps {
  data: {
    id: number;
    name: string;
    price: number;
  }[];
}

const CardAbstract: React.FC<CardProps> = ({ data }) => {
  const { count, setCount } = useContext(ShopContext);
  return (
    <Container>
      <Row>
        {data.map((data) => (
          <Col key={data.id}>
            <Card
              className="p-2 mb-3 ml-3"
              style={{ width: "12rem", height: "17rem" }}
            >
              <Card.Img variant="top" src={Logo} />
              <Card.Title className="text-center">{data.name}</Card.Title>
              <Card.Body>
                <Row>
                  <Col>{data.price}</Col>
                </Row>
                <Row>
                  <Col>
                    <span
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        setCount(count - 1);
                      }}
                    >
                      <BsDash />
                    </span>
                  </Col>
                  <Col className="text-center">{count}</Col>
                  <Col>
                    <span
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      <BsPlus />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardAbstract;
