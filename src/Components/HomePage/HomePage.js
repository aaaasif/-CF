import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
// import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            {/* <Banner/> */}
            <AboutUs/>
        </div>
    );
};

export default HomePage;