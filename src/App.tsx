import React from 'react';
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import './App.css';
import Navbar from './components/Navigation';
import BrandsSection from './components/BrandsSection'; 
import ProjectSection from './components/ProjectSection';
import Technology from './components/Tech';
import StylishReviewSlider from './components/StylishReviewSlider';

function App() {
  return (
    <Layout>
      <Navbar/>
      <Hero />
      <Services />
    <ProjectSection/> 
      <Technology />
      <StylishReviewSlider/>
    {/* <BrandsSection/> */}
      {/* <About /> */}
      <Contact />
    </Layout>
  );
}

export default App;



