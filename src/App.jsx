import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <Cards/>
    </main>
  )
};

export default App;