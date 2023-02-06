import './App.css';
import Carousel from './components/Carousel';
import BrandCard from './components/BrandCard';
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (<Carousel />, <BrandCard />);
    }
}

export default App;
