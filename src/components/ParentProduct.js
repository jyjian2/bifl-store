import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDataLoader } from 'react-router-dom';


export default function ParentProduct() {
    //Use dataloader to get data that loader has returned
    const products = useDataLoader();

    return (
        <section class="container-fluid products-display">
            <div class="featured-products-header">
                <h2 class="featured-products-text">
                    All Products
                </h2>
            </div>
            <div class="featured-product-cards" >
                <Row xs={1} md={2} lg={4}>
                    {
                        products.map((product, index) => {

                            return <ProductCard product={product} />
                        })
                    }
                </Row>

            </div>
        </section>
    )
}

