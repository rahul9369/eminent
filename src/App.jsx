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
import Auditorius from "./components/solutions/Auditorium";
import Conference from "./components/solutions/ConferenceRoom";
import Gym from "./components/solutions/GymFitness";
import Homehifi from "./components/solutions/HomeHifi";
import Live from "./components/solutions/LiveEvents";
import Night from "./components/solutions/Nightclub";
import Resturant from "./components/solutions/Restaurants";
import Retail from "./components/solutions/RetailOutlet";
import Smart from "./components/solutions/SmartClassroom";

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
        <Route path="/solutions/auditoriums" element={<Auditorius />} />
        <Route path="/solutions/conference-room" element={<Conference />} />
        <Route path="/solutions/gym-fitness" element={<Gym />} />
        <Route path="/solutions/home-hifi" element={<Homehifi />} />
        <Route path="/solutions/live-events" element={<Live />} />
        <Route path="/solutions/night-clubs" element={<Night />} />
        <Route path="/solutions/restaurants-cafes" element={<Resturant />} />
        <Route path="/solutions/retail-outlet" element={<Retail />} />
        <Route path="/solutions/smart-classroom" element={<Smart />} />
        {/* <Route path="/solutions/auditoriums" element={<Auditorius />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
