
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
                    <div id="home">
                        <PaintHome />
                        </div>

                        <div id="about">
                        <Home />
                        </div>

                        <div id="hero">
                        <Hero />
                        </div>

                        <div id="colors">
                        <Paints />
                        </div>

                        <div id="products">
                        <Products />
                        </div>

                        <div id="newarrivals">
                        <Newarrivals />
                        </div>
                        {/* <Shop/> */}

                        <div id="contact">
                        <Contact />
                        </div>

                        <Footer />
                    </>
                } />

                <Route path="loginpage" element={<Loginpage/>}/>
                <Route path="getquote" element={<Getquote/>}/>
                <Route path="getstarted" element={<Getstarted/>}/>
                <Route path="viewproduct" element={<Viewproduct/>}/>

                {/* <Route path="painthome" element={<PaintHome />} />
                <Route path="products" element={<Products />} />
                <Route path="paints" element={<Paints />} />
                <Route path="newarrivals" element={<Newarrivals />} />
                <Route path="contact" element={<Contact />} /> */}

            </Routes>
        </BrowserRouter>
    )
}

export default App;