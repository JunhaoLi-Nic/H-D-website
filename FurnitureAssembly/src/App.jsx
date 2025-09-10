import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Quote from './Pages/Quote';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Reviews from './Pages/Reviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout currentPageName="Home">
            <Home />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout currentPageName="Services">
            <Services />
          </Layout>
        } />
        <Route path="/quote" element={
          <Layout currentPageName="Quote">
            <Quote />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout currentPageName="About">
            <About />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout currentPageName="Contact">
            <Contact />
          </Layout>
        } />
        <Route path="/reviews" element={
          <Layout currentPageName="Reviews">
            <Reviews />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
