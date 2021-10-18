import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            
            <MenuBar></MenuBar>
            <h2 className="bg-danger">This is home section</h2>
            <Banner/>
            <Footer></Footer>
        </div>
    );
};

export default Home;