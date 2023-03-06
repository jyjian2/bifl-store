import React from "react";
import { Card } from "react-bootstrap";


export default function(props) {
    const kitchenProduct = props.product;
    return (
        <Card style={{ width: '18rem' }} className="my-3 mx-auto" key={kitchenProduct._id}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{kitchenProduct.name}</Card.Title>
                <Card.Text>{kitchenProduct.description} {kitchenProduct.price}</Card.Text>
                <Card.Link href='#'>Product Deatil</Card.Link>
                <Card.Link href='#'>Add to Cart</Card.Link>
                <Card.Footer className="text-muted">${kitchenProduct.price}</Card.Footer>
            </Card.Body>
        </Card>
    )
}