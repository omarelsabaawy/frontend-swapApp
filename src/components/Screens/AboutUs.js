import React from 'react'
import NavBar from '../NavBar/Navbar'
import BreadCrumb from '../Standards/Breadcrumb'
import Footer from '../Standards/Footer'
import ChatBot from "../ChatBot/ChatBot";


function AboutUs() {
    return (
        <div>
            <NavBar />
            <BreadCrumb type="About Us" />
            <div style={{ height: '200px' }}></div>
            <ChatBot />
            <Footer />
        </div>
    )
}

export default AboutUs