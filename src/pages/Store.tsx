import { Col, Row } from "react-bootstrap";
import storedData from '../data/items.json';
import Items from "../components/Items";

const Store = () => {
    return (
        <div>
            <Row xs={2} md={3} lg={4} className="g-3">
                {
                    storedData.map((item)=>
                        <Col key={item.id}>
                        <Items {...item} />
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Store;