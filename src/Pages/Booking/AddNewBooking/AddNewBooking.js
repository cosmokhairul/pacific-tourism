import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../../Footer/Footer';
import './AddNewBookings.css';

const AddNewBooking = () => {

    const { register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch("https://powerful-reef-54654.herokuapp.com/addNewBooking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result));

    };

    return (
        <div className=" mx-auto text-center mb-5">
            <h1 className="pt-3 pb-4 fw-bold">Add a New Trip</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        {...register("tripName")}
                        required
                        placeholder="Trip Name"
                        className=" input-field w-50 mb-3 p-1"
                    />
                    <br />

                    <input
                        type="text"
                        {...register("description")}
                        required
                        placeholder="Description"
                        className="input-field w-50 mb-3 p-1"
                    />
                    <br />

                    <input
                        type="number"
                        {...register("bookingFee")}
                        required
                        placeholder="Booking Fee"
                        className="input-field w-50 mb-3 p-1"
                    />
                    <br />

                    <input
                        type="text"
                        {...register("tripDetails")}
                        required
                        placeholder="Trip Details"
                        className="input-field w-50 mb-3 p-1"
                    />
                    <br />

                    <input
                        type="url"
                        {...register("imageUrl")}
                        required
                        placeholder="Insert Image URL"
                        className="input-field w-50 mb-3 p-1"
                    />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input
                        type="submit"
                        className="submit-btn"
                    />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddNewBooking;