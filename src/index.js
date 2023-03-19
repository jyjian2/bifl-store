import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ParentProduct from './components/ParentProduct';
import SingleProduct from './components/SingleProduct';
import Carousel from './components/Carousel';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"

            element={
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            }
        >
            <Route 
                element=<Carousel />
                path="/"
            />
            <Route
                element=<ParentProduct />
                path="products"
                loader={async () => {
                    const response = await axios.get("http://localhost:3001/api/products")

                    console.log(response);
                    if (response.status === 200) {
                        return response.data.data
                    } else {
                        return []
                    }
                }}
            />
            <Route
                element=<SingleProduct />
                path="products/:productId"
                loader={async ({ _, params }) => {

                    const response = await axios.get(`http://localhost:3001/api/products/${params.productId}`)

                    console.log(response);
                    if (response.status === 200) {
                        return response.data.data
                    } else {
                        return null
                    }
                }}
                
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);