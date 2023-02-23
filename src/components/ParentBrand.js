import React, { useEffect, useState } from "react";
import axios from "axios";
import BrandCard from "./BrandCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function ParentBrand() {

    const [brands, setBrands] = useState([]);

    const url = 'http://localhost:3001/api/brands';

    useEffect(() => {
        getAllBrands();
    }, []);

    console.log(brands);
    const getAllBrands = () => {
        axios.get(url)
            .then((response) => {
                if (response.data.success) {
                    const allBrands = response.data.data;
                    setBrands(allBrands);
                } else {
                    console.error("response failed");
                }
            })
            .catch(error => console.error(`Error: $(error)`));
    }



    return (
        <section class="container-fluid brands-display">
            <div class="featured-brands-header">
                <h2 class="featured-brands-text">
                    Featured Brands
                </h2>
            </div>
            <div class="featured-brand-cards" >
                <Row xs={1} md={2} lg={4}>
                    {
                        brands.map((brand, index) => {

                            return <BrandCard brand={brand} />
                        })
                    }
                </Row>

            </div>
        </section>
    )
}

