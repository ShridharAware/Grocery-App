import { Card, Container, Row } from "react-bootstrap";
import { categoriesData } from "../../assets/categories";
import CategoriesItem from "../ui/CategoriesItem";
const Categories: React.FC = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Categories</Card.Title>
        </Card.Body>
        <Container>
          <Row>
            {categoriesData.map((item) => {
              return <CategoriesItem key={item.url} {...item} />;
            })}
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Categories;
