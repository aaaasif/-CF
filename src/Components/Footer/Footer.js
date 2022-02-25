import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import logo from "./../../assets/football-website-image/logo.png"

const Footer = () => {
    return (
        <>
            <div className="footer-top pb-4">
                  <Container>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                          <div>
                          <img
                            src={logo}
                            width="49.87px"
                            height="48.6px"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                            <span className='logo-name'>#CF</span>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                            </div>
                            <div>
                            <h5 className="text-muted mt-4">Follow us on</h5>
                            <div>
                              <ul className="social-icons">
                                <li>
                                  <a href="/d">
                                    <i class="fab fa-youtube"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/d">
                                    <i class="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/d">
                                    <i class="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/d">
                                    <i class="fab fa-twitter-square"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            </div>
                      </Col>
                
                      <Col sm={12} md={6} lg={3}>
                          <h4 className="col-title">CUSTOMER SERVICE</h4>
                          <ul className="information">
                            <li>
                              <a href="/home">FAQs</a>
                            </li>
                            <li>
                              <a href="/home">MyBata</a>
                            </li>
                            <li>
                              <a href="/home">Store Locator</a>
                            </li>
                            <li>
                              <a href="/home">All About Feet</a>
                            </li>
                            <li>
                              <a href="/home">Contact Info</a>
                            </li>
                            <li>
                              <a href="/home">Delivery</a>
                            </li>
                          </ul>
                      </Col>
                      <Col sm={12} md={6} lg={3}>
                          <h4 className="col-title">Reach us</h4>
                          <ul className="information contact-info">
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              Naogaon, Dhaka, Bangladesh
                            </li>
                            <li>
                              <i className="fas fa-envelope"></i>
                              Official: bata@gmail.com
                            </li>
                            <li>
                              <i className="fas fa-phone"></i>
                              Helpline: +8801763-251119
                            </li>
                          </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="footer">
                  <p className="text-center">Copyright &copy; All reserved</p>
                </div>
        </>
    );
};

export default Footer;