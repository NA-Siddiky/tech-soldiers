import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../Login/Context/Context';
import PaymentCard from '../../Payment/PaymentCard/PaymentCard';



const stripePromise = loadStripe(
    'pk_test_51Ie3QZIMr1LzJRbIvikcHzmxWMPvgQ6noVzmx3xVmF7ddPiGur9rIIFa08WYe8nP1kUYLO7ojhf0xPaePvR50MwH0051687nFk'
);

const Checkout = () => {

    const { user } = useContext(Context);
    const { id } = useParams();
    console.log(id);
    const [service, setService] = useState({});
    const { name, price, url } = service;
    const [payment, setPayment] = useState(false)

    const { email } = user;
    useEffect(() => {
        fetch(`http://localhost:5000/checkout/${id}`)
            .then((response) => response.json())
            .then((data) => setService(data[0]));
    }, [id]);

    const history = useHistory();

    const checkoutBtn = () => {
        const orderInfo = {
            serviceName: name,
            price: price,
            email: email,
            quantity: 1,
            imgUrl: url,
            date: new Date(),
            status: 'pending'
        };
        console.log(user);
        console.log(orderInfo);
        // console.log(orderInfo);
        axios.post('http://localhost:5000/saveorder', orderInfo).then((res) => {
            // console.log(res);
            toast.success('Checkout Successfully');
            history.push("/")
            console.log('call');
        });
    };




    return (
        <div className="container">
            <h1>Let's Checkout</h1>
            <div className="row">
                <div className="col-md-8">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Discription</th>
                                <th>Quentity</th>
                                <th>Price</th>
                                <th>Confirm Checkout</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{service.name}</td>
                                <td>1</td>
                                <td>{service.price}</td>
                                <td><button className="btn-primary btn" onClick={() => setPayment(!payment)}>Confirm Payment</button></td>
                            </tr>
                        </tbody>
                    </Table>


                    {
                        payment && <Elements stripe={stripePromise}><PaymentCard checkoutBtn={checkoutBtn}></PaymentCard> </Elements>
                    }


                </div>

                <div className="col-md-4">
                    <img style={{ width: '200px' }} src={service.image} alt="" />
                    <h5>{service.name}</h5>
                    <h6>agent: {service.agent}</h6>
                    <h5>Price: ৳{service.price}</h5>
                    <h3>Please confirm your Order.</h3>
                </div>
            </div>
        </div>

    );
};

export default Checkout;