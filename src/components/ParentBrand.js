import React, {useEffect, useState} from "react";
import axios from "axios";
import BrandCard from "./BrandCard";


export default function ParentBrand() {

    const [brands, getBrands] = useState('');

    const url = 'http://localhost:3001/api/brands';

    useEffect(() => {
        getAllBrands();
    }, []);

    const getAllBrands = () => {
        axios.get(`$(url)`)
        .then((response) => {
            const allBrands = response.data;
            getBrands(allBrands);
        })
        .catch(error => console.error(`error: $(error)`));
    }

    return (
        <section class="container-fluid brands-display">
            <div class="featured-brands-header">
                <h2 class="featured-brands-text">
                    Featured Brands
                </h2>
            </div>
            <div class="featured-brand-cards" >

            </div>
        </section>
    )
}

