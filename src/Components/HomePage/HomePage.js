import React from 'react';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Service from '../Service/Service';
import Blog from '../Blog/Blog';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <AboutUs/>
            <Service/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default HomePage;