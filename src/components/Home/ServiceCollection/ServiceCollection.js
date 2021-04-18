import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from '../Service/Service';

const ServiceCollection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://techsoldiers.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data));

    }, []);

    return (
        <>
            <h1 className="text-center ">All Services</h1>
            <div className="container d-flex flex-wrap mt-5">

                {
                    services.map((service) => (
                        <Service key={service._id} service={service}></Service>
                    ))
                }
            </div>
        </>
    );
};

export default ServiceCollection;