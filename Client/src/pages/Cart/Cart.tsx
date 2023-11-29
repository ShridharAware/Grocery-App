import { Button, Card } from "react-bootstrap";
import CartItem from "../../components/ui/CartItem";
import { useShoppingContext } from "../../context/ShopCartContext";
import { FruitsData } from "../../components/Categories/Fruits/Fruits";
import { useState } from "react";
const Cart: React.FC = () => {
  const [check, setCheck] = useState(false);
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

  function success(position: { coords: { latitude: any; longitude: any } }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
  }
  function error() {
    console.log("Unable to retrieve your location");
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  };

  const { cartItems, clearCart, cartQuantity } = useShoppingContext();
  const checkout = () => {
    setCheck(!check);
  };

  return (
    <>
      {cartItems.length > 0 && (
        <Button
          className="mt-3"
          style={{ marginLeft: "89%" }}
          variant="danger"
          onClick={() => clearCart()}
          size="sm"
        >
          Clear cart
        </Button>
      )}
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <Card className="mx-auto mt-3" style={{ width: "90%" }}>
        <Card.Body className="d-flex align-items-center">
          <div className="amount me-auto">
            <span className="h6">Subtotal</span> ({cartQuantity}&nbsp;
            {cartItems.length > 1 ? "items" : "item"}) : Rs &nbsp;
            {cartItems.reduce((total, cartItem) => {
              const item = FruitsData.find((i) => i.id === cartItem.id);
              return total + (Number(item?.price) || 0) * cartItem.quantity;
            }, 0)}
          </div>
          <div className="payment-button">
            {cartQuantity > 0 ? (
              <Button className="rounded-pill" onClick={checkout}>
                Checkout
              </Button>
            ) : (
              "Cart is empty"
            )}
          </div>
        </Card.Body>
      </Card>
      <div className="">
        {check && (
          <Card
            style={{
              width: "25rem",
              height: "20rem",
              position: "absolute",
              margin: "-20% 35%",
            }}
          >
            <Card.Header className="text-center d-flex">
              <div className="me-auto">Cash on delivery</div>
              <Button variant="outline-danger" size="sm" onClick={checkout}>
                &times;
              </Button>
            </Card.Header>
            <Card.Body>
              <label htmlFor="address">Enter address : </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
              ></textarea>
              or &nbsp;&nbsp;
              <Button onClick={getLocation} className="mt-2" size="sm">
                Get location
              </Button>
              {location.latitude && (
                <>
                  <div>Latitude : {location.latitude}</div>
                  <div>Longitude : {location.longitude}</div>
                </>
              )}
              <Button
                className="mt-2"
                variant="success"
                style={{ width: "100%" }}
              >
                Submit and order
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};

export default Cart;
