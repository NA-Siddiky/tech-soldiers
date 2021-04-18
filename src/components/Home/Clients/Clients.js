import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import image1 from '../../../images/Clients/bata.png'
import image2 from '../../../images/Clients/amra.png'
import image3 from '../../../images/Clients/bat.png'
import image4 from '../../../images/Clients/brac.jpg'
import image5 from '../../../images/Clients/mtb.jpg'
import image6 from '../../../images/Clients/n2sys.png'
import image7 from '../../../images/Clients/Apex.png'


const Clients = () => {

    const imgStyle = {
        width: "250px",
        height: "200px",
    };


    return (
        <Carousel>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image1} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image2} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image4} roundedCircle />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image3} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image7} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image5} roundedCircle />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image4} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image6} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={imgStyle} src={image2} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </Carousel>
    );
};

export default Clients;