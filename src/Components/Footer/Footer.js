import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import logo from "./../../assets/football-website-image/logo.png"
import "./Footer.css"

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
                            <span className='logo-name mt-3'>#CF</span>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                            </div>
                            <div>
                            <h5 className="text-muted mt-4">Follow us on</h5>
                            <div className=''>
                              <ul className="social-icons d-flex justify-content-start">
                                <li>
                                  <a href="/d">
                                    <i className="fab fa-youtube"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/d">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/d">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/d">
                                    <i className="fab fa-twitter-square"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            </div>
                      </Col>
                
                      <Col sm={12} md={6} lg={3}>
                          <h4 className="col-title">CUSTOMER SERVICE</h4>
                          <ul className="Quick Links information">
                            <li>
                              <a href="/home">Portfolio</a>
                            </li>
                            <li>
                              <a href="/home">Blogs</a>
                            </li>
                            <li>
                              <a href="/home">About</a>
                            </li>
                            <li>
                              <a href="/home">Press</a>
                            </li>
                            <li>
                              <a href="/home">Contact Info</a>
                            </li>
                            <li>
                              <a href="/home">Careers</a>
                            </li>
                          </ul>
                      </Col>
                      <Col sm={12} md={6} lg={3}>
                          <h4 className="col-title">Services</h4>
                          <ul className="information contact-info">
                          <li>
                              <a href="/home">UX/UI Design</a>
                            </li>
                            <li>
                              <a href="/home">App Development</a>
                            </li>
                            <li>
                              <a href="/home">Web Development</a>
                            </li>
                            <li>
                              <a href="/home">Quality Assurance</a>
                            </li>
                            <li>
                              <a href="/home">Machine Learning</a>
                            </li>
                          </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="footer">
                  <p className="copyright">Copyright &copy; All reserved</p>
                </div>
        </>
    );
};

export default Footer;