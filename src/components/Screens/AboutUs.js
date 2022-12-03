import React from 'react'
import NavBar from '../NavBar/Navbar'
import BreadCrumb from '../Standards/Breadcrumb'
import Footer from '../Standards/Footer'


function AboutUs() {
    return (
        <div>
            <NavBar />
            <BreadCrumb type="About Us" />
            <div style={{ height: '200px' }}></div>
            <Footer />
        </div>
    )
}

export default AboutUs