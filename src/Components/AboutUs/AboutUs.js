import React from 'react';
import img from "./../../assets/football-website-image/AboutUs.jpg"

const AboutUs = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div>
            <img className='about-img' src={img} alt="Paris" width="500" height="300"/>
            </div>
            <div className='aboutUs-text'>
                <h4>About Us</h4>
                <h1>We are the best Football Agency</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nam tortor, scelerisque sed diam sodales neque facilisi. Pretium, lorem massa cras duis sollicitudin auctor. Neque viverra rhoncus vitae, quis sit egestas non tortor, ac. Nulla risus, orci congue interdum accumsan condimentum sem. Vulputate consequat orci, dui cum sagittis. Sit sed aenean mauris sodales faucibus vel eu nunc ipsum. Turpis est in mi, pulvinar felis etiam. Ut habitasse ipsum mattis ultrices congue eget sed nec bibendum. Orci nunc, congue amet nisi, magna rhoncus augue tincidunt egestas.
                </p>
                <button>Learn More</button>
            </div>

        </div>
    );
};

export default AboutUs;