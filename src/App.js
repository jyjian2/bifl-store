import './App.css';
import Carousel from './components/Carousel';
import React, { Component } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import ParentBrand from './components/ParentBrand';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import Header from './components/Header';
import ParentByCategory from './components/ParentByCategory';
import ParentProduct from './components/ParentProduct';
import SingleProduct from './components/SingleProduct';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            }
        >
            <Route
                element=<ParentProduct />
                path="products"
                loader={async () => {
                    return fetch(
                        "http://localhost:3001/api/products"
                    )
                }}
                errorElement={<ErrorBoundary />}
            />
            <Route
                element=<SingleProduct />
                path="products/:productId"
                loader={async ({ request, params }) => {
                    return fetch(
                        console.log(params.productId)
                        `http://localhost:3001/api/products/${params.productId}`,
                        { name: request.name },
                        { description: request.destination },
                        { category: request.category },
                        { brand: request.brand },
                        { price: request.price },
                        { onSale: request.onSale }
                    );
                }}
                errorElement={<ErrorBoundary />}
            />
        </Route>
    )
);
