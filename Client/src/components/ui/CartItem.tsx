import { FruitsData } from "../Categories/Fruits/Fruits";
import { useShoppingContext } from "../../context/ShopCartContext";
import { Button, Card, Stack } from "react-bootstrap";
type CardProps = {
  id: number;
  quantity: number;
};
const CartItem: React.FC<CardProps> = ({ id, quantity }: CardProps) => {
  const totalPrice = (a: number, b: number) => {
    return a * b;
  };
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingContext();
  const item = FruitsData.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <Card className="mx-auto mt-3" style={{ width: "90%" }}>
        <Stack
          direction="horizontal"
          gap={2}
          className="d-flex align-items-center"
        >
          <img
            src={item.image}
            alt="image"
            style={{ width: "200px", height: "130px", objectFit: "cover" }}
          />
          <div className="me-auto">
            <div>
              {item.name} &nbsp;
              {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                  x {quantity}
                </span>
              )}
            </div>
            <div className="text-muted" style={{ fontSize: "0.75rem" }}>
              {item.price}
            </div>
            <div>
              Rs {item.price && totalPrice(Number(item.price), quantity)}
            </div>
          </div>
          <Button
            style={{ marginRight: "20px" }}
            variant="outline-success"
            size="sm"
            onClick={() => increaseCartQuantity(item.id)}
          >
            Increase qty
          </Button>
          <Button
            style={{ marginRight: "20px" }}
            variant="outline-warning"
            size="sm"
            onClick={() => decreaseCartQuantity(item.id)}
          >
            Decrease qty
          </Button>
          <Button
            style={{ marginRight: "20px" }}
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default CartItem;
