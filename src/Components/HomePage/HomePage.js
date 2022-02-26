import React from 'react';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Service from '../Service/Service';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <AboutUs/>
            <Service/>
            <Footer/>
        </div>
    );
};

export default HomePage;