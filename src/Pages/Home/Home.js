import React from 'react';
// import useData from '../../hooks/useData';
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
//   const { data } = useData();
  return (
    <div>
      <Banner />
      <Service></Service>
    </div>
  );
};

export default Home;