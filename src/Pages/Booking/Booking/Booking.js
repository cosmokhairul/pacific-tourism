import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const [booking, setBooking] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        const url = `http://localhost:5000/singlebooking/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);

    // console.log(booking);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        data.email = user.email;
        data.status = "Pending";
        data.description = booking.description;
        data.tripName = booking.tripName;
        data.imageUrl = booking.imageUrl;
        data.tripDetails = booking.tripDetails;
        data.bookingFee = booking.bookingFee;

        fetch("http://localhost:5000/confirmBooking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Booked!')
                    data.target.reset();
                }
            });
        data.preventDefault();
    };

    return (
        <div>
            <div className="pb-5">
                <h1 className="py-3 fw-bolder  text-center">Your Booking Details of {booking.tripName}</h1>
                <div className="service-details-container mx-auto">
                    <img className="mt-2" src={booking?.imageUrl} alt="" />
                    <h2 className="pt-4 fw-bold text-center">{booking?.tripName}</h2>
                    <p className="fs-5">{booking?.description}</p>
                    <h4>Trip Details: {booking?.tripDetails}</h4>
                    <h4>Booking Fee: <span className="pt-5 fw-bold text-danger">${booking?.bookingFee}</span> </h4>
                </div>
            </div>

            <div className="w-50 mx-auto text-center mb-5">
                <h1>Booking Form</h1>
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            defaultValue={user.displayName}
                            className="input-field p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("email")}
                            defaultValue={user.email}
                            className="input-field p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("address", { required: true })}
                            placeholder="Address"
                            type="text"
                            className="input-field p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("date", { required: true })}
                            placeholder="Booking Date"
                            type="date"
                            className=" input-field p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            placeholder="Comments"
                            type="text"
                            className="input-field p-2 m-2 w-100"
                            {...register("comments", { required: true })}

                        />

                        {errors.exampleRequired && <span>This field is required</span>}
                        <button className="back-btn">
                            <Link to="/Home" className="back-link">Back</Link>
                        </button>

                        <input
                            type="submit"
                            value="Book Now"
                            className="booking-btn mt-3"
                        />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Booking;