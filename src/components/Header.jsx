import React from 'react';
import './Header.css';
import {
    Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <header class="constainer-fluid top-section">Sign up Account to Get Exclusive Discount | Free shipping on $100+
            </header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">
                        <nav class="navbar py-5 ml-4 navbar-expand-lg navbar-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                    <div class="col-2">
                        <div class="search-block py-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search"
                                viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-4">
                        <a href="#" class="navbar brand d-flex justify-content-center">
                            <img class="logo"
                                src="https://images.unsplash.com/photo-1611250282006-4484dd3fba6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="logo image" width="30%" height="30%" />
                        </a>
                    </div>
                    <div class="col-4">
                        <div class="user-account py-5 ml-3 d-flex justify-content-end">
                            <svg class="mr-5 bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                            <svg class="mr-5 bi bi-cart4" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg">
                        <div id="navbarNav" class="collapse navbar-collapse my-2">
                            <ul class="navbar-nav nav-fill w-100">
                                <li class="nav-item">
                                    <a href="/home" class="nav-link">Home</a>
                                </li>
                                <li class="nav-item">
                                    <Link to="products">All Products</Link>
                                </li>
                                <li class="nav-item">
                                    <a href="/kitchen" class="nav-link">Kitchen</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/living" class="nav-link">Living</a>
                                </li>
                                <li class="nav-item">
                                    <a href="items" class="nav-link">Items on Sale</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        </>

    )
}