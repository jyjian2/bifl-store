import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import faribaultImg from '../images/faribault.jpeg';
import './BrandCard.css';

function BrandCard() {
    return (
                <section class="container-fluid brands-display">
                    <div class="featured-brands-header">
                        <h2 class="featured-brands-text">
                            Featured Brands
                        </h2>
                    </div>
                    <div class="featured-brand-cards" >
                    <Row xs={1} md={2} lg={4}>
                    {Array.from({ length:4 }).map((_, idx) => (
                        <Col>
                            <Card style={{width: '18rem'}} className="my-3 mx-auto" >
                                <Card.Img variant="top" src={faribaultImg} />
                                <Card.Body>
                                    <Card.Title>Faribault Wool Blanket</Card.Title>
                                    <Card.Text>Faribault Mill is a living testament to American craftsmanship.
                                            From providing woolen blankets for pioneers heading west to comforting our
                                            troops through two world wars, Faribault Mill is woven into American history.
                                    </Card.Text>
                                    <Button variant="primary">See porducts from this brand</Button>            
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                    </div>
                </section>

        
    )
}

export default BrandCard;