import React from "react";
import HomeScreen from './components/Screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SwapScreen from "./components/Screens/SwapScreen";
import ShopScreen from "./components/Screens/ShopScreen";
import AboutUs from "./components/Screens/AboutUs";
import ContactUs from "./components/Screens/ContactUs";
import ProductDetails from "./components/Screens/ProductDetails";
import SignIn from "./components/Screens/SignIn";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/swap" element={<SwapScreen />} />
                    <Route path="/buy" element={<ShopScreen />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/product/:slug" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;