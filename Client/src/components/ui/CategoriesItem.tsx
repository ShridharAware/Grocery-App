import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type CategoriesItemProps = {
  name: string;
  url: string;
  description: string;
  link: string;
};

const CategoriesItem = ({
  name,
  url,
  description,
  link,
}: CategoriesItemProps) => {
  return (
    <>
      <Col>
        <Link className="text-decoration-none" to={link}>
          <Card
            className="p-1 mb-3 ml-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <Card.Img variant="top" src={url} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default CategoriesItem;
