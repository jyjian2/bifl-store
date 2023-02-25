import react, { component } from "react";
import './Footer.css';
import OurStory from "../pages/OurStory";
import {
    Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default function Footer() {
    return (
       <>
       <div class="footer container-fluid">
                <div class="footer-inner container-fluid">
                    <form class="footer-text footer-subscription">
                        <div class="row">
                            <div class="col-md-3 my-2 footer-content">
                                Sign up our email list to get exclusive updates.
                            </div>
                            <div class="col-md-6 my-2 footer-content">
                                <label class="sr-only" for="inlineFormInputEmail">Email</label>
                                <input type="text" class="form-control" id="inlineFormInputEmail"
                                    placeholder="Here to Enter your email adress" />
                            </div>
                            <div class="col-md-3 my-2 footer-content">
                                <button type="submit" class="btn btn-outline-light">Sign up</button>
                            </div>
                        </div>
                    </form>
                    <div class="footer-text footer-company-info">
                        <div class="row">
                            <div class="col-md-1 footer-content">
                                <Link to="/ourstory">Our Story</Link>
                            </div>
                            <div class="col-md-1 footer-content">
                                Return & Shipping
                            </div>
                            <div class="col-md-1 footer-content">
                                Contact us
                            </div>
                            <div class="col-md-6 footer-content">
                            </div>
                            <div class="col-md-3 footer-content">
                                Follow us
                            </div>
                        </div>
                    </div>
                    <div class="footer-text footer-copyright footer-content">
                        Copytight @ 2023 Jasper's home
                    </div>
                </div>
            </div>
            
        
       </>
            

    )
}