import './App.css';
import Carousel from './components/Carousel';
import React, { Component } from 'react';
import {
    Routes,
    Route,
    useParams,
  } from "react-router-dom";
import ParentBrand from './components/ParentBrand';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import Header from './components/Header';
import ParentByCategory from './components/ParentByCategory';
import ParentProduct from './components/ParentProduct';


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
                    <Route path="products" element={<ParentProduct />}/>
                    <Route path="products/:category" element={
                    <ParentByCategory />
                    }/>
                </Routes>
                <Footer />
                </React.Fragment>

        );
    }
}

export default App;
