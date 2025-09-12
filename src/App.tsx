import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Programs';
import Rentals from './components/Rentals';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lookbook from './components/Lookbook';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Services />
              <Rentals />
              <Gallery />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;