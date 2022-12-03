import React from 'react';
import NavBar from '../NavBar/Navbar';
import Breadcrumb from '../Standards/Breadcrumb';
import Items from '../Standards/Items';
import Footer from '../Standards/Footer'
function SwapScreen() {
    return (
        <div>
            <NavBar />
            <Breadcrumb type="Swap" />
            <Items productType="Swap" />
            <Footer />
        </div>
    )
}

export default SwapScreen