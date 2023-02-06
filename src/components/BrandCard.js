import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                    <div class="featured-brand-cards">
                    <Card style={{width: '18rem'}}>
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
                    </div>
                </section>

        
    )
}

export default BrandCard;