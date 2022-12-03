import React from 'react'
import NavBar from '../NavBar/Navbar'
import BreadCrumb from '../Standards/Breadcrumb';
import Footer from '../Standards/Footer'
function ContactUs() {
    return (
        <div>
            <NavBar />
            <BreadCrumb type="Contact Us" />
            <div style={{ height: '200px' }}></div>
            <Footer />
        </div>
    )
}

export default ContactUs