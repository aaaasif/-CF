import React from 'react';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Service from '../Service/Service';
import Blog from '../Blog/Blog';
import Registration from '../Registration/Registration';
import Update from '../../Update/Update';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <AboutUs/>
            <Service/>
            <Blog/>
            <br/>
            <br/>
            <Registration/>
            <Update/>
            <Footer/>
        </div>
    );
};

export default HomePage;