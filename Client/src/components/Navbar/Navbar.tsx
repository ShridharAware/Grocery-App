import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Form, Row, Col, Button } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { useShoppingContext } from "../../context/ShopCartContext";

function NavbarApp() {
  const { cartQuantity } = useShoppingContext();
  return (
    <>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Navbar.Brand as={Link} to="/" className="text-center mx-auto">
          Grocery Application
        </Navbar.Brand>
      </Navbar>
      <Navbar bg="light" expand="sm" data-bs-theme="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutus">
              About Us
            </Nav.Link>

            <Form className="form-inline">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Search</Button>
                </Col>
              </Row>
            </Form>

            <Nav.Link as={NavLink} to="/contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq">
              FAQs
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/cart">
              <BsCart
                style={{
                  marginRight: "10px",
                  height: "1.5em",
                  width: "1.5em",
                }}
              />
              <span
                className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: "30px",
                  right: "68px",
                  transform: "translate(1%,1%)",
                }}
              >
                {cartQuantity}
              </span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              <span
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  width: "5em",
                  backgroundColor: "green",
                  textAlign: "center",
                  color: "whitesmoke",
                }}
              >
                Login
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarApp;
