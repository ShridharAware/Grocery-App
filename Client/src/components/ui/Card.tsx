import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Logo from "../../assets/react.svg";

interface CardProps {
  data: {
    id: number;
    name: string;
    price: number;
  }[];
}

const CardAbstract: React.FC<CardProps> = ({ data }) => {
  return (
    <Container>
      <Row>
        {data.map((data) => (
          <Col key={data.id}>
            <Card
              className="p-1 mb-3 ml-3"
              style={{ width: "12rem", height: "18rem" }}
            >
              <Card.Img variant="top" src={Logo} />
              <Card.Title className="text-center">{data.name}</Card.Title>
              <Card.Body>{data.price}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardAbstract;
