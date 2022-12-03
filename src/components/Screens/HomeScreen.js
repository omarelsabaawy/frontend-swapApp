import React from 'react'
import Categorie from '../Categories/Categorie';
import NavBar from '../NavBar/Navbar';
import HomeItems from '../Standards/HomeItems';
import WhySwappha from '../Standards/WhySwappha';
import HorzLine from '../Standards/HorzLine';
import Subscriptions from '../Standards/Subscriptions';
import Footer from '../Standards/Footer'
import { Helmet } from 'react-helmet-async';

function HomeScreen() {
    return (
        <div>

            <Helmet>
                <title>Home</title>
            </Helmet>

            <NavBar />
            <Categorie />
            <h3 className='homePageH3' >Products to be Swapped</h3>
            <HomeItems />

            <HorzLine />

            <h3 className='homePageH3' >Why SWAPPHA?</h3>
            <WhySwappha />


            <div style={{ padding: 100, backgroundColor: '#255459' }}>
                <Subscriptions />
            </div>

            <div style={{ height: '250px' }}>
                <h2 style={{ marginTop: '250px', textAlign: 'center' }}>Google Map</h2>
            </div>

            <Footer />

        </div>
    )
}

export default HomeScreen;