import React from 'react';
import featuresImg from '../../../images/image2.png'
import './SpecialFeatures.css'
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const SpecialFeatures = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5 container">
            <Slider {...settings}>
                <div className="container mb-5" >
                    <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0">
                            <img className="img-fluid" src={featuresImg} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h1>Exceptional BroadBand SPECIAL SERVICE, On Our Team</h1>
                            <p className="text-secondary my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                    </p>
                            <button className="btn btn-success">Learn More</button>
                        </div>
                    </div>
                </div>


                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0">
                            <img className="img-fluid" src={featuresImg} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h1>Exceptional BroadBand SPECIAL SERVICE, On Our Team</h1>
                            <p className="text-secondary my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                    </p>
                            <button className="btn btn-success">Learn More</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default SpecialFeatures;