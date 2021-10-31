import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageAllBookings.css";

const ManageAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  //   Get Data from Specific user via email
  useEffect(() => {
    fetch("https://fierce-fjord-19214.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [isDeleted]);

  console.log(bookings);

  //   Handle Delete Button
  const handleDelete = (id) => {
    fetch(`https://fierce-fjord-19214.herokuapp.com/packages/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          alert("Are you sure you want to permanently cancel this package?");
          setIsDeleted(true);
        } else {
          setIsDeleted(false);
        }
      });
    console.log(id);
  };
  return (
    <div>
      <div>
        <h2 className="booking-tite">My Booking List</h2>
        {bookings.map((booking) => (
          <div className="booking-list">
            <div className="img">
              <img src={booking.img} alt="" />
            </div>

            <div className="location">
              <h4>{booking.location}</h4>
            </div>

            <div className="button-pending button">
              <button className="bk-button">{booking.status}</button>
            </div>
            <div className="button-delete button">
              <button
                onClick={() => handleDelete(booking._id)}
                className="bk-button"
              >
                Delete
              </button>
            </div>

            <div className="button">
              <Link to={`/update-booking/${booking._id}`}>
                <button className="bk-button">Update</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllBookings;
