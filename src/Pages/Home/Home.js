import React from 'react';
// import useData from '../../hooks/useData';
import Banner from "../Banner/Banner";
import Insurance from '../Insurance/Insurance';
import Mission from '../Mission/Mission';
import Service from "../Service/Service";

const Home = () => {
//   const { data } = useData();
  return (
    <div>
      <Banner />
      <Service></Service>
      <Mission></Mission>
      <Insurance></Insurance>
    </div>
  );
};

export default Home;