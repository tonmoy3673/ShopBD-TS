import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItems from "./CartItems";
import FormatCurrency from "../utilities/FormatCurrency";
import storedItems from "../data/items.json";
type ShoppingCartProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  console.log(cartItems);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item}/>
          ))}

          {/* =============== Get Total ============ */}
          {/* ============== Get Total ============ */}
      <div className="ms-auto fw-bold fs-6">
          Total : {
            FormatCurrency(
                cartItems.reduce((total,cartItem)=>{
                    const item = storedItems.find((i)=>i.id ===cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                },0)
            )
          }
      </div>
        </Stack>
      </Offcanvas.Body>j    </Offcanvas>
  );
};

export default ShoppingCart;
