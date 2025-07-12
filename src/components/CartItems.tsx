import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storedItems from "../data/items.json";
import FormatCurrency from "../utilities/FormatCurrency";
interface CartItemProps {
  id: number;
  quantity: number;
}

interface ItemCartGetData {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const CartItems = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item: ItemCartGetData | undefined = storedItems.find(
    (i) => i.id === id
  );
  if (!item) {
    return null;
  }

  console.log(item);
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src={item.imgUrl}
        style={{
          width: "125px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{ fontSize: "0.75rem", marginLeft: "3px" }}
            >
              X {quantity}
            </span>
          )}
        </div>
        <div
          className="text-muted"
          style={{ fontSize: "0.75rem", marginLeft: "3px" }}
        >
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >&times;</Button>
    </Stack>
  );
};

export default CartItems;
