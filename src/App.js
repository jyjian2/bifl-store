import './App.css';
import Carousel from './components/Carousel';
import BrandCard from './components/BrandCard';
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Carousel />
            <BrandCard />
            </React.Fragment>
            );
    }
}

export default App;
