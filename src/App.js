import './App.css';
import Carousel from './components/Carousel';
import BrandCard from './components/BrandCard';
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Carousel />
            <section class="container-fluid brands-display">
                <div class="featured-brands-header">
                    <h2 class="featured-brands-text">
                        Featured Brands
                    </h2>
                </div>
                <div class="featured-brand-cards">
                <BrandCard />
                </div>
            </section>
            </React.Fragment>
            );
    }
}

export default App;
