import './App.css';
import Carousel from './components/Carousel';
import React, { Component } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import ParentBrand from './components/ParentBrand';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import Header from './components/Header';
import Products from './pages/Products';


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
                    <Route path="products" element={<Products />}/>
                </Routes>
                <Footer />
                </React.Fragment>

        );
    }
}

export default App;
