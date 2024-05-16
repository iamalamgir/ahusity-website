import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Programs from "./components/programs/Programs";
import Title from './components/title/Title';
import About from './components/about/About';
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' Title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' Title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' Title='What Student Says' />
        <Testimonials />
      </div>
      
    </div>
  )
}

export default App
