import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Brands from "./pages/Brands";
import CaseStudy from "./pages/Casestudy";
import Solution from "./pages/Solution";
import SolutionDetails from "./pages/Solutiondetails";
import CaseStudyDetails from "./pages/CaseStudydetails";
import BrandProducts from "./pages/BrandsDetails";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/solutions/:id" element={<SolutionDetails />} />
        <Route path="/case-study/:id" element={<CaseStudyDetails />} />
        <Route path="/brands/:id" element={<BrandProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
