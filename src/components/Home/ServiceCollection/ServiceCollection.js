import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from '../Service/Service';

const ServiceCollection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => setServices(data));

    }, []);

    return (

        <div className="container d-flex flex-wrap">
            {
                services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))
            }
        </div>
    );
};

export default ServiceCollection;