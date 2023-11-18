import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/react.svg";
const Categories: React.FC = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Categories</Card.Title>
        </Card.Body>
        <Container>
          <Row>
            <Col>
              <Link className="text-decoration-none" to="/fruits">
                <Card
                  className="p-1 mb-3 ml-3"
                  style={{ width: "10rem", height: "15rem" }}
                >
                  <Card.Img variant="top" src={Logo} />
                  <Card.Body>
                    <Card.Title>Fruits</Card.Title>
                    <Card.Text>Demo description</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col>
              <Link className="text-decoration-none" to="/vegetables">
                <Card
                  className="p-1 mb-3 ml-3"
                  style={{ width: "10rem", height: "15rem" }}
                >
                  <Card.Img variant="top" src={Logo} />
                  <Card.Body>
                    <Card.Title>Vegetables</Card.Title>
                    <Card.Text>Demo description</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className="text-decoration-none" to="/staples">
                <Card
                  className="p-1 mb-3 ml-3"
                  style={{ width: "10rem", height: "15rem" }}
                >
                  <Card.Img variant="top" src={Logo} />
                  <Card.Body>
                    <Card.Title>Staples</Card.Title>
                    <Card.Text>Demo description</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className="text-decoration-none" to="/snacks">
                <Card
                  className="p-1 mb-3 ml-3"
                  style={{ width: "10rem", height: "15rem" }}
                >
                  <Card.Img variant="top" src={Logo} />
                  <Card.Body>
                    <Card.Title>Snacks</Card.Title>
                    <Card.Text>Demo description</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className="text-decoration-none" to="/beverages">
                <Card
                  className="p-1 mb-3 ml-3"
                  style={{ width: "10rem", height: "15rem" }}
                >
                  <Card.Img variant="top" src={Logo} />
                  <Card.Body>
                    <Card.Title>Beverages</Card.Title>
                    <Card.Text>Demo description</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className="text-decoration-none" to="/homecare">
                <Card
                  className="p-1 mb-3 ml-3"
                  style={{ width: "10rem", height: "15rem" }}
                >
                  <Card.Img variant="top" src={Logo} />
                  <Card.Body>
                    <Card.Title>Home Care</Card.Title>
                    <Card.Text>Demo description</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Categories;
