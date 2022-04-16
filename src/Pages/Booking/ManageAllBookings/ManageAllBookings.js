import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Footer from '../../Footer/Footer';

const ManageAllBookings = () => {
    const [bookings, setBookings] = useState([]);

    const [changeStatus, setChangeStatus] = useState(false);

    useEffect(() => {
        fetch("https://powerful-reef-54654.herokuapp.com/allBookings")
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [changeStatus]);

    const handleUpdate = id => {
        const status = "Approved";

        fetch(`https://powerful-reef-54654.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => data(setChangeStatus(!changeStatus)))
    };

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            fetch(`https://powerful-reef-54654.herokuapp.com/deleteFinal/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!')
                        const remainingServices = bookings.filter(service => service._id !== id);
                        setBookings(remainingServices);
                    }
                });
        }
    }



    return (
        <div>
            <h1 className="text-center fw-bolder my-4">Manage All Bookings</h1>

            <div>
                <Table className="table table-bordered border-dark table-striped table-hover">
                    <thead className="text-center align-middle">
                        <tr>
                            <th>No</th>
                            <th>Trip Name</th>
                            <th>Trip Details</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Address</th>
                            <th>Booking Date</th>
                            <th>Booking Status</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    {bookings?.map((pd, index) => (
                        <tbody>
                            <tr className="align-middle">
                                <td className='text-center'>{index}</td>
                                <td>{pd.tripName}</td>
                                <td className='text-center'>{pd.tripDetails}</td>
                                <td>{pd.name}</td>
                                <td>{pd.email}</td>
                                <td>{pd.address}</td>
                                <td className='text-center'>{pd.date}</td>
                                <td className='text-center'>{pd.status}</td>
                                <td className="text-center">
                                    <button
                                        onClick={() => handleUpdate(pd._id)}
                                        className="btn bg-success p-1 btn-sm text-white"
                                    >
                                        Update
                                    </button>
                                    <span> </span>
                                    <button
                                        onClick={() => handleDelete(pd._id)}
                                        className="btn bg-danger p-1 btn-sm text-white">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageAllBookings;