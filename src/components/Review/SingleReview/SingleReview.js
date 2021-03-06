import React from "react";
import { Card, Image, } from "react-bootstrap";
import "./SingleReview.css";
// import image1 from '../../../images/Clients/bata.png'


const SingleReview = ({ reviews }) => {
    const { userName, review } = reviews;
    // console.log(props.reviews);
    // console.log(props.review);
    console.log(reviews);
    return (
        <Card className='singlerReview col-md-4 m-3'>
            <Card.Body className='p-4'>
                <div className='person d-flex  align-items-center'>
                    {/* <Image className='personImg' variant='top' src={image1} roundedCircle /> */}
                    <div className='personDetails'>
                        <h5 className='m-0'>{userName}</h5>
                        <span>{review}</span>
                    </div>
                </div>
                <Card.Text style={{ color: "#707070" }}>{review}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleReview;
