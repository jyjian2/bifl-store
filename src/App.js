import './App.css';
import Carousel from './components/Carousel';
import BrandCard from './components/BrandCard';
import React, { Component } from 'react';
import {
    Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import ParentBrand from './components/ParentBrand';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import Header from './components/Header';

class App extends Component {

    render() {

        return (
                <React.Fragment>
                <Header />
                <Routes>
                    <Route path="ourstory" element={<OurStory />}/>
                    <Route path="home" element={
                        <div>
                            <Carousel />
                            <ParentBrand />
                        </div>
                    }/>
                </Routes>
                <Footer />
                </React.Fragment>

        );
    }
}

export default App;
