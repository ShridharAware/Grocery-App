import { Card, Button } from "react-bootstrap";
import { useShoppingContext } from "../../context/ShopCartContext";
type CardProps = {
  id: number;
  name: string;
  price: string;
  image: string;
  qty: number;
};

const CardAbstract: React.FC<CardProps> = ({ ...data }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingContext();
  const quantity = getItemQuantity(data.id);
  return (
    <Card
      key={data.id}
      className="p-2 mb-3 ml-3"
      style={{ width: "16rem", height: "23rem" }}
    >
      <Card.Img variant="top" src={data.image} style={{ objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{data.name}</span>
          <span>{data.price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(data.id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(data.id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(data.id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(data.id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardAbstract;
