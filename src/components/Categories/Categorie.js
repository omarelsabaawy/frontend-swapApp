import React from "react";

import { Link } from "react-router-dom"

import image4 from './baner-right-image-04.jpg'
import ps from './baner-right-image-04.jpg';

function Categrie() {
    return (
        <div>
            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content" style={{ marginBottom: 20 }}>
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>SWAP.IT now</h4>
                                        <span>Swap the needless item with a needed item now</span>
                                        <div class="main-border-button">
                                            <Link to="#">Swap Now!</Link>
                                        </div>
                                    </div>
                                    <img src={image4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Playstation Games</h4>
                                                    <span>Swap your game with another</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Playstation Games</h4>
                                                        <p>Make sure your old game is working well before swapping it.
                                                        </p>
                                                        <div class="main-border-button">
                                                            <Link to="#">Discover More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={ps} alt="image1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Furniture</h4>
                                                    <span>Swap your Furniture here</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Furniture</h4>
                                                        <p>Swap your Furniture if you can't afford its transportation.</p>
                                                        <div class="main-border-button">
                                                            <Link to="#">Discover More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={image4} alt="image2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Shop Now!</h4>
                                                    <span>Don't like Swapping?</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Shop Now</h4>
                                                        <p>you now can buy the product you want if you don't like swapping a product with another.</p>
                                                        <div class="main-border-button">
                                                            <Link to="#">Shop Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={image4} alt="image4" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categrie;