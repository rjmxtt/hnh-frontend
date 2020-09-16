import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
// import Connect from './Connect';
import Entrys from './Entrys';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Hero/>
      {/* <Connect show={false}/> */}
      <Entrys/> 
      <Footer/>

    </div>
  );
}

export default App;
