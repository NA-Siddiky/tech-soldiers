import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    console.log(service);
    return (
        <div className="homeView p-1 d-flex flex-wrap">
            <Card style={{ width: '18rem' }}            >
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                    <Card.Title>{service.name}, {service.type}</Card.Title>
                    <Card.Text>agent: {service.agent}</Card.Text>
<<<<<<< HEAD
                    <h5>Price: ৳ {service.price}<Link to={`/checkout/${service._id}`}><Button variant="primary">Buy Now</Button></Link></h5>
=======
                    <h5 style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>Price: ৳ {service.price}<Link to={`/checkout/${service._id}`}><Button variant="primary">Buy Now</Button></Link></h5>
>>>>>>> c2e5f010dbd4cc90984775b4474433806b0a7009
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;