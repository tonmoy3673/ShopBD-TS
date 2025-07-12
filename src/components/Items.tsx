import { Card, CardBody, CardImg } from "react-bootstrap";

interface ItemData{
    id?: number,
    name: string,
    price: number,
    imgUrl: string,

}
const Items = (item:ItemData) => {
const {name,price,imgUrl} = item;




    return (
        <Card>
            {/* =========== Image ========== */}
            <CardImg 
            variant="top"
            src={imgUrl}
            height='200px'
            style={{objectFit:'cover',}}
            />

        {/* ============= Card Body ============ */}
        <CardBody className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-5 ">{name}</span>
             <span className="text-secondary fs-6">{price}</span>
        </Card.Title>
        </CardBody>
           
        </Card>
    );
};

export default Items;