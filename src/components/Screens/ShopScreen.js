import React from 'react'
import NavBar from '../NavBar/Navbar'
import Breadcrumb from '../Standards/Breadcrumb'
import Items from '../Standards/Items'
import Footer from '../Standards/Footer'

function ShopScreen() {
    return (
        <div>
            <NavBar />
            <Breadcrumb type="Buy Now" />
            <Items />
            <Footer />
        </div>
    )
}

export default ShopScreen