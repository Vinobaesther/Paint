import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Paints from "./Paints";
import PaintHome from "./PaintHome";
import Products from "./Products";
import Newarrivals from "./Newarrivals";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./Loginpage";
import Getquote from "./Getquote";
import Getstarted from "./Getstarted";
import Viewproduct from "./Viewproduct";

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={

                    <>
                        <PaintHome />
                        <Home />
                        <Hero />
                        <Paints />
                        <Products />
                        <Newarrivals />
                        {/* <Shop/> */}
                        <Contact />
                        <Footer />
                    </>
                } />

                <Route path="loginpage" element={<Loginpage/>}/>
                <Route path="getquote" element={<Getquote/>}/>
                <Route path="getstarted" element={<Getstarted/>}/>
                <Route path="viewproduct" element={<Viewproduct/>}/>

                <Route path="painthome" element={<PaintHome />} />
                <Route path="products" element={<Products />} />
                <Route path="paints" element={<Paints />} />
                <Route path="newarrivals" element={<Newarrivals />} />
                <Route path="contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;