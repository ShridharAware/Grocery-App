import { Card, Container, Col, Row } from "react-bootstrap";
import Onion from "../../assets/recents.webp";

const Recents: React.FC = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Recently added</Card.Title>
        </Card.Body>
        <Container>
          <Row>
            <Col>
              <Card
                className="p-2 mb-3 ml-3"
                style={{ width: "10rem", height: "15rem" }}
              >
                <Card.Img variant="top" src={Onion} />
                <Card.Body>
                  <Card.Title>Onion</Card.Title>
                  <Card.Text>Rs. 200</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="p-1 mb-3 ml-3"
                style={{ width: "10rem", height: "15rem" }}
              >
                <Card.Img variant="top" src={Onion} />
                <Card.Body>
                  <Card.Title>Onion</Card.Title>
                  <Card.Text>Rs. 200</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="p-1 mb-3 ml-3"
                style={{ width: "10rem", height: "15rem" }}
              >
                <Card.Img variant="top" src={Onion} />
                <Card.Body>
                  <Card.Title>Onion</Card.Title>
                  <Card.Text>Rs. 200</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="p-2 mb-3 ml-3"
                style={{ width: "10rem", height: "15rem" }}
              >
                <Card.Img variant="top" src={Onion} />
                <Card.Body>
                  <Card.Title>Onion</Card.Title>
                  <Card.Text>Rs. 200</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="p-2 mb-3 ml-3"
                style={{ width: "10rem", height: "15rem" }}
              >
                <Card.Img variant="top" src={Onion} />
                <Card.Body>
                  <Card.Title>Onion</Card.Title>
                  <Card.Text>Rs. 200</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="p-2 mb-3 ml-3"
                style={{ width: "10rem", height: "15rem" }}
              >
                <Card.Img variant="top" src={Onion} />
                <Card.Body>
                  <Card.Title>Onion</Card.Title>
                  <Card.Text>Rs. 200</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Recents;
