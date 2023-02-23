import './App.css';
import Carousel from './components/Carousel';
import BrandCard from './components/BrandCard';
import React, {Component} from 'react';
import ParentBrand from './components/ParentBrand';

class App extends Component {
    
    render() {

        return (

                <React.Fragment>
                <Carousel />
                <ParentBrand />
                </React.Fragment>
            );
    }
}

export default App;
