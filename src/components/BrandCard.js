import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import faribaultImg from '../images/faribault.jpeg';
import './BrandCard.css';

export default function BrandCard(props) {
    const brand = props.brand
    return (

        <Card style={{ width: '18rem' }} className="my-3 mx-auto" key={brand._id}>
            <Card.Img variant="top" src={faribaultImg} />
            <Card.Body>
                <Card.Title>{brand.name}</Card.Title>
                <Card.Text>{brand.description}</Card.Text>
                <Button variant="primary">See porducts from this brand</Button>
            </Card.Body>
        </Card>
    )
}