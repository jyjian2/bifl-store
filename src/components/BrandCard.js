import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import faribaultImg from '../images/faribault.jpeg';
import './BrandCard.css';

export default function BrandCard(props) {

    const displayBrands = (props) => {
        const {brands} = props;

        if(brands.length > 0) {
            return(
                brands.map((brand, index) => {
                    console.log(brand);
                    return(
                        <div class="featured-brand-cards" >
                            <Row xs={1} md={2} lg={4}>
                            <Col>
                                    <Card style={{width: '18rem'}} className="my-3 mx-auto" key={brand._id}>
                                        <Card.Img variant="top" src={faribaultImg} />
                                        <Card.Body>
                                            <Card.Title>{brand.name}</Card.Title>
                                            <Card.Text>{brand.description}</Card.Text>
                                            <Button variant="primary">See porducts from this brand</Button>            
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                })
            )
        } else {
            return (<h3>No brands yet</h3>)
        }


    }

    return(
        <>
            {displayBrands(props)}
        </>
    )
}