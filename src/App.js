import './App.css';
import Carousel from './components/Carousel';
import BrandCard from './components/BrandCard';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ParentBrand from './components/ParentBrand';
import Footer from './components/Footer';

class App extends Component {
    
    render() {

        return (

                <React.Fragment>
                <Carousel />
                <ParentBrand />
                <Footer />
                </React.Fragment>
            );
    }
}

export default App;
