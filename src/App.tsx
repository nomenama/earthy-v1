import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about-us"
                    element={<About />}
                />

                <Route
                    path="/what-we-do"
                    element={<WhatWeDo />}
                />

                <Route
                    path="/media"
                    element={<Media />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
