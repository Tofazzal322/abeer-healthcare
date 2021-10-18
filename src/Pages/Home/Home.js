import React from 'react';
import useData from '../../hooks/useData';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Service from '../Service/Service';

const Home = () => {

    const { data } = useData()
    console.log(data.length);
    return (
        <div>
            
            {/* <MenuBar></MenuBar> */}
            
            <Banner />
            <Service></Service>

            {/* <Login/> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;