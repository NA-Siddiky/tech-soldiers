import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from '../Service/Service';
import './ServiceCollection.scss'

const ServiceCollection = () => {
    const [services, setServices] = useState([]);
    const [defaultServices, setDefaultSetServices] = useState([]);

    useEffect(() => {
        fetch('https://techsoldiers.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => {
                setServices(data)
                setDefaultSetServices(data);
            });

    }, []);
    const handleProducts = (type) => {

        if (type === 'all') {
            setServices(defaultServices)
        } else {
            const filteredServices = defaultServices.filter((product) => product.type === type)
            setServices(filteredServices)
        }
    }
    return (
        <>
            <h1 className="text-center ">All Services</h1>
            <div className='d-flex justify-content-center'>
                {/* <button className='btn btn-primary m-2' onClick={() => handleProducts('software_development')}>software Development</button>
                <button className='btn btn-primary m-2' onClick={() => handleProducts('domain_hosting')}>domain Hosting</button>
                <button className='btn btn-primary m-2' onClick={() => handleProducts('all')}>ALl Products</button> */}



                <div class="box-wrapper">
                    <img src="http://www.freefoodphotos.com/imagelibrary/herbs/slides/chilis.jpg" alt="rhcp" />
                    <div class="box-content">
                        <button className='btn btn-primary m-2' onClick={() => handleProducts('software_development')}>software Development</button>
                        <div class="desc">Lorem ipsum dolor sit amet.</div>
                        <span class="price">5.67$</span>
                        <div class="footer">
                            <ul>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star-o"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="success"></div>
                </div>


                <div class="box-wrapper">
                    <img src="http://www.freefoodphotos.com/imagelibrary/herbs/slides/chilis.jpg" alt="rhcp" />
                    <div class="box-content">
                        <button className='btn btn-primary m-2' onClick={() => handleProducts('domain_hosting')}>domain Hosting</button>

                        <div class="desc">Lorem ipsum dolor sit amet.</div>
                        <span class="price">5.67$</span>
                        <div class="footer">
                            <ul>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star-o"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="success"></div>
                </div>

                <div class="box-wrapper">
                    <img src="http://www.freefoodphotos.com/imagelibrary/herbs/slides/chilis.jpg" alt="rhcp" />
                    <div class="box-content">
                        <button className='btn btn-primary m-2' onClick={() => handleProducts('all')}>ALl Products</button>
                        <div class="desc">Lorem ipsum dolor sit amet.</div>
                        <span class="price">5.67$</span>
                        <div class="footer">
                            <ul>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star-o"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="success"></div>
                </div>


            </div>




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