import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import serviceOne from './../../assets/Service image/conversation 1.png';
import serviceTwo from './../../assets/Service image/podiatry 1.png';
import serviceThree from './../../assets/Service image/diet 1.png';
import serviceFour from './../../assets/Service image/social-media 1.png';
import serviceFive from './../../assets/Service image/physiotherapy 1.png';
import './Service.css';
const Service = () => {
    return (
        <Container>
            <div style={{marginTop:'100px'}} className='serviceText'>
                <h3>Services We Offer</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu viverra et quam tellus id posuere <br /> elementum augue ullamcorper ac egestas blandit.</h6>
                <Row xs={1} md={3} className="g-4">
            <Col>
             <Card className='allCards'>
              <img src={serviceOne} alt="" className='serviceImg'/>
               <Card.Body>
                <Card.Title className='cardTitle'>Consulting</Card.Title>
                 <Card.Text className='cardDesc'>
                 Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eu viverra et quam tellus id posuere elementum
                 </Card.Text>
                 <Button variant="light" style={{color:'#fe5266'}}>Learn More</Button>
               </Card.Body>
             </Card>
            </Col>
            <Col>
             <Card className='allCards'>
             <img src={serviceTwo} alt="" className='serviceImg'/>
               <Card.Body>
                <Card.Title className='cardTitle'>Podiatary</Card.Title>
                 <Card.Text className='cardDesc'>
                 Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eu viverra et quam tellus id posuere elementum
                 </Card.Text>
                 <Button variant="light" style={{color:'#fe5266'}}>Learn More</Button>
               </Card.Body>
             </Card>
            </Col>
            <Col>
             <Card className='allCards'>
             <img src={serviceThree} alt="" className='serviceImg'/>
               <Card.Body>
                <Card.Title className='cardTitle'>Nutriation</Card.Title>
                 <Card.Text className='cardDesc'>
                 Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eu viverra et quam tellus id posuere elementum
                 </Card.Text>
                 <Button variant="light" style={{color:'#fe5266'}}>Learn More</Button>
               </Card.Body>
             </Card>
            </Col>
              <Col>
                  <Card
                    style={{
                      marginLeft: '30vh',
                      width: '100%'
                    }} className='allCards' id='specificCard'>
                     <img src={serviceFour} alt="" className='serviceImg'/>
               <Card.Body>
                <Card.Title className='cardTitle'>Marketing</Card.Title>
                 <Card.Text className='cardDesc'>
                 Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eu viverra et quam tellus id posuere elementum
                 </Card.Text>
                 <Button variant="light" style={{color:'#fe5266'}}>Learn More</Button>
               </Card.Body>
             </Card>
            </Col>
            <Col>
             <Card style={{marginLeft:'30vh',width:'100%'}}  className='allCards' id='specificCard'>
             <img src={serviceFive} alt="" className='serviceImg'/>
               <Card.Body>
                <Card.Title className='cardTitle'>Physiotherapy</Card.Title>
                 <Card.Text className='cardDesc'>
                 Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eu viverra et quam tellus id posuere elementum
                 </Card.Text>
                 <Button variant="light" style={{color:'#fe5266'}}>Learn More</Button>
               </Card.Body>
             </Card>
            </Col>
           </Row>
          </div>
        </Container>    
    );
};

export default Service;