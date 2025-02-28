import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Banner2 from './components/Banner/Banner2';
import Email from './components/Email/Email';
import Services2 from './components/Services/Services2';


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <Cards/>
      <Banner2/>
      <Services2/>
      <Email/>
    </main>
  )
};

export default App;