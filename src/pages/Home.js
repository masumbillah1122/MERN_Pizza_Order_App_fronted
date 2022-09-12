import React from 'react'
import Filter from '../components/filter/Filter';
import Navbar from '../components/navbar/Navbar';
import Pizzas from '../components/pizzas/Pizzas';

const Home = () => {
  return (
    <>
      <Navbar />
      <Filter/>
      <Pizzas />
    </>
  );
}

export default Home
