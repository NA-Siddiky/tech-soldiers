import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/Banner.jpg'


const HeaderMain = () => {
    return (
        <div>
            <main style={{ height: "600px" }} className="row d-flex align-items-center my-4">
                <div className="col md-4 offset-md-1">
                    <h1 style={{ color: "#3A4256" }}>Your Hope <br /> Our Technology</h1>

                    <p className="text-secondary">Lorem, sit amet consectetur adipisicing elit. Sapiente ipsum, nostrum quibusdam possimus voluptas minus.</p>

                    <Link to="/login">
                        <button className="btn btn-success mx-2">Get Started</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn btn-success">Registration</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img src={banner} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;