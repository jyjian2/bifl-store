import React, { useEffect, useState } from "react";
import axios from "axios";
import ByCategoryCard from "./ByCategoryCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
    useParams,
  } from "react-router-dom";


export default function ParentByCategory(props) {

    const [products, setProducts] = useState([]);
    let category = useParams().category;
    

    const url = 'http://localhost:3001/api/products';

    useEffect((category) => {
        getAllProducts(category);
    }, []);


    
    const getAllProducts = () => {
        axios.get(url+`/${category}`)
            .then((response) => {
                console.log(response)
                console.log(category)
                if (response.data.success) {
                    const allProducts = response.data.data;
                    setProducts(allProducts);
                } else {
                    console.error("response failed");
                }
            })
            .catch(error => console.error(`Error: $(error)`));
    }



    return (
        <section class="container-fluid products-display">
            <div class="featured-products-header">
                <h2 class="featured-products-text">
                    {`${category} Product`}
                </h2>
            </div>
            <div class="featured-product-cards" >
                <Row xs={1} md={2} lg={4}>
                    {
                        products.map((product, index) => {

                            return <ByCategoryCard product={product} />
                        })
                    }
                </Row>

            </div>
        </section>
    )
}

