import { Button, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddServices = () => {


    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [service, setServices] = useState({});

    const onSubmit = (data) => {
        console.log(service);

        const imageData = new FormData();
        imageData.set('key', 'bc1891d9e3a9ddc7763a8b1ba4e7c6bd');
        imageData.append('image', service.image);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const image = (service.image = response.data.data.display_url);
                setServices({ ...service, image });

                const url = "https://techsoldiers.herokuapp.com/addServices";
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(service)
                })
                    .then(res => {
                        console.log('server side response', res)
                        toast.success('Added Successfully');
                    })

            })
            .catch(function (error) {
                console.log(error);
            });
        data.preventDefault();
    };



    const handleAddServices = (e) => {
        // console.log(e.target.name);
        if (e.target.name === 'service') {
            const name = (service.name = e.target.value);
            setServices({ ...service, name });
        } else if (e.target.name === 'agent') {
            const agent = (service.agent = e.target.value);
            setServices({ ...service, agent });
        } else if (e.target.name === 'price') {
            const price = (service.price = e.target.value);
            setServices({ ...service, price });
        } else if (e.target.name === 'image') {
            const image = (service.image = e.target.files[0]);
            setServices({ ...service, image });
        } else if (e.target.name === 'type') {
            const type = (service.type = e.target.value);
            setServices({ ...service, type });
        }
        console.log(service);
    };


    return (
        <div>
            <h2>Adding a Service</h2>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="service" onChange={(e) => handleAddServices(e)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Service Agency</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="agent" onChange={(e) => handleAddServices(e)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" >
                        <Form.Label>Add Price</Form.Label>
                        <Form.Control type="string" placeholder="Enter price" name="price" onChange={(e) => handleAddServices(e)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." name='type' onChange={(e) => handleAddServices(e)}>
                            <option value="web_design">Web Design </option>
                            <option value="domain_hosting">Domain Hosting</option>
                            <option value='software_development'>Software Development</option>
                            <option value='itinfrastructure'>IT Infrastructure</option>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Add Cover Photo</Form.File.Label>
                            <Form.File.Input name="image" onChange={handleAddServices} />
                        </Form.File>

                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Save
            </Button>
            </Form>
        </div>
    );
};

export default AddServices;