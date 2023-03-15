import Card from 'react-bootstrap/Card';
import './ProductCard.css';
import {useState} from 'react';

export default function ProductCard(props) {
    const product = props.product
    return (

        <Card style={{ width: '18rem' }} className="my-3 mx-auto" key={product._id}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description} {product.price}</Card.Text>
                <Card.Link href='#'><button onclick="">Product Detail</button></Card.Link>
                <Card.Link href='#'>Add to Cart</Card.Link>
                <Card.Footer className="text-muted">${product.price}</Card.Footer>
            </Card.Body>
        </Card>
    )
}