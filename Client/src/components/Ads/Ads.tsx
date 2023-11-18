import { Carousel } from "react-bootstrap";
import CardImage from "../../assets/carousel.webp";

function Ads() {
  return (
    // Advertisements and other brandings
    <Carousel>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={CardImage} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={CardImage} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={CardImage} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Ads;
