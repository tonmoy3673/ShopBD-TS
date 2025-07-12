import { Button, Card, CardBody, CardImg } from "react-bootstrap";
import FormatCurrency from "../utilities/FormatCurrency";

interface ItemData {
  id?: number;
  name: string;
  price: number;
  imgUrl: string;
}
const Items = (item: ItemData) => {
  const { name, price, imgUrl } = item;

  const quantity: number = 1;

  return (
    <Card className="h-100">
      {/* =========== Image ========== */}
      <CardImg
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      {/* ============= Card Body ============ */}
      <CardBody className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5 ">{name}</span>
          <span className="text-secondary fs-6">{FormatCurrency(price)}</span>
        </Card.Title>

        {/* ===================== Quantity ============ */}
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                {/* =============== Increase Button ============ */}
                <Button>+</Button>
                <div>
                    <span className="fs-5">{quantity}</span> in Cart
                </div>

                {/* ================= Decrease Button =========== */}
                <Button>-</Button>
              </div>
              <Button variant="danger" size="sm" className="mt-1">Remove</Button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Items;
