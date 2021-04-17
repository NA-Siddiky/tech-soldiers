import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    console.log(service);
    return (
        <div className="homeView p-1 d-flex flex-wrap">
            <Card style={{ width: '18rem' }}            >
                <Card.Img variant="top" src={service.url} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>Author: {service.author}</Card.Text>
                    <h5>Price: ৳ {service.price}<Link to={`/checkout/${service._id}`}><Button variant="primary">Buy Now</Button></Link></h5>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;