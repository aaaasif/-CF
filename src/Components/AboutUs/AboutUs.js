import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutLogo from "./../../assets/football-website-image/logo.png"
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <Container style={{marginTop:'80px'}}>
         <Row className='d-flex justify-content-evenly'>
            <Col className='aboutImage' xs={12} md={7}>
                    <img className='d-flex align-items-center justify-content-center aboutLogo' src={aboutLogo} alt="" />
            </Col>
            <Col xs={12} md={5}>
                    <div className='aboutText'>
                    <h6>About Us</h6>
                    <h4>We are the best Football <br /> Agency</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nam tortor, scelerisque sed diam sodales neque facilisi. Pretium, lorem massa cras duis sollicitudin auctor. Neque viverra rhoncus vitae, quis sit egestas non tortor, ac. Nulla risus, orci congue interdum accumsan condimentum sem. Vulputate consequat orci, dui cum sagittis. Sit sed aenean mauris sodales faucibus vel eu nunc ipsum. Turpis est in mi, pulvinar felis etiam. Ut habitasse ipsum mattis ultrices congue eget sed nec bibendum. Orci nunc, congue amet nisi, magna rhoncus augue tincidunt egestas.</p>
                        <button className='learnMoreBtn'>Learn More</button>
                    </div>
            </Col>
         </Row>
        </Container>
    );
};

export default AboutUs;