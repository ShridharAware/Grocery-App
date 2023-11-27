type CardProps = {
  id: number;
  quantity: number;
};
const CartItem: React.FC<CardProps> = ({ ...data }) => {
  return (
    <>
      <li>{data.id}</li>
      <li>{data.quantity}</li>
    </>
  );
};

export default CartItem;
