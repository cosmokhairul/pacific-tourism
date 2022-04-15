import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Popular Tour Destinations</h1>

            <div className="all-products container ">
                <div className="row  text-center ">
                    {bookings.map(pd => (
                        <div className="col-md-4 col-lg-4 g-4">
                            <div className="trip-card">
                                <img className='trip-card-img ' src={pd?.imageUrl} alt="" />
                                <h3 className="my-3 fw-bold">{pd?.tripName}</h3>
                                <h6>{pd?.description}</h6>
                                <Link to={`/booking/${pd._id}`}>
                                    <button className="trip-card-btn my-4">Show Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;