import React from 'react';
import NavBar from '../NavBar/Navbar';
import Breadcrumb from '../Standards/Breadcrumb';
import Items from '../Standards/Items';
import Footer from '../Standards/Footer'
import ChatBot from '../ChatBot/ChatBot';
function SwapScreen() {
    return (
        <div>
            <NavBar />
            <Breadcrumb type="Swap" />
            <Items />
            <ChatBot />
            <Footer />
        </div>
    )
}

export default SwapScreen