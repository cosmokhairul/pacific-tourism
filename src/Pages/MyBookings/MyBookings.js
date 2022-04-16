import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';

const MyBookings = () => {

    const { user } = useAuth();
    const [services, setServices] = useState([]);

    const email = user.email;

    useEffect(() => {
        fetch(`https://powerful-reef-54654.herokuapp.com/myBookings/${email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [email]);
    console.log(services);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to cancel the Booking?');
        if (proceed) {
            fetch(`https://powerful-reef-54654.herokuapp.com/cancelBooking/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Cancelled Successfully!')
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div>
            <h1 className="text-center fw-bolder my-4">My Bookings</h1>

            <div className="container">
                <div className="row">
                    {services?.map(pd => (
                        <div className="col-md-4">
                            <div className="service border border p-3 ">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.imageUrl} alt="" />
                                </div>
                                <h3 className='text-center pt-2'>{pd?.tripName}</h3>
                                <p>{pd?.description}</p>
                                <h5>Details: {pd?.tripDetails}</h5>
                                <h3 className="text-danger"> Booking Fee : ${pd?.bookingFee}</h3>

                                <div className="text-center">
                                    <button
                                        onClick={() => handleDelete(pd?._id)}
                                        className="btn btn-danger mt-4 fw-bold"
                                    >Cancel Booking</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBookings;