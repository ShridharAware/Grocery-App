import CartItem from "../../components/ui/CartItem";
import { useShoppingContext } from "../../context/ShopCartContext";

const Cart: React.FC = () => {
  const { cartItems } = useShoppingContext();

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem {...item} />;
      })}
    </>
  );
};

export default Cart;
