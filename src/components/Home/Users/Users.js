import React from 'react';
import { useForm } from "react-hook-form";

const Users = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (user) => {

        fetch('http://localhost:4000/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Appointment created successfully.');
                }
            })
    };



    return (
        <div>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input type="text" defaultValue="" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group">
                    <input type="text" defaultValue="" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" defaultValue="" {...register("email")} name="email" placeholder="Email" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group row">
                    <div className="col-4">
                        <select className="form-control" name="gender"  {...register("gender")} >
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input defaultValue="" {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input defaultValue="" {...register("weight")} className="form-control" name="weight" placeholder="Weight" type="number" />
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                </div>

                <div className="form-group text-right">
                    <button type="submit" className="btn btn-success">Send</button>
                </div>
            </form>

        </div>
    );
};

export default Users;