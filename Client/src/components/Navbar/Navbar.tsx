import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Form, Row, Col, Button } from "react-bootstrap";

function NavbarApp() {
  return (
    <>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Navbar.Brand as={Link} to="/" className="text-center mx-auto">
          Brand link
        </Navbar.Brand>
      </Navbar>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
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
                  <Button type="submit">Submit</Button>
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
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarApp;
