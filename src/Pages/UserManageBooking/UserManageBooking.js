import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import "./UserManageBooking.css";

const UserManageBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const email = `${user.email}`;

  //   Get Data from Specific user via email
  useEffect(() => {
    fetch(`https://fierce-fjord-19214.herokuapp.com/packages/${email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [isDeleted]);

  console.log(bookings);

  //   React Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://fierce-fjord-19214.herokuapp.com/addresses", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Booked, Successfully");
          reset();
        }
      });
  };

  ///   React Hook end

  //   Handle Delete Button
  const handleDelete = (id) => {
    fetch(`https://fierce-fjord-19214.herokuapp.com/packages/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          alert("Are you sure you want to permanently avoid this journey?");
          setIsDeleted(true);
        } else {
          setIsDeleted(false);
        }
      });
    console.log(id);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="booking" sm={12} md={6}>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName} {...register("name")} />

              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input placeholder="City" defaultValue="" {...register("city")} />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <button className="bk-button booking-input-button">
                <input
                  style={{
                    marginTop: "7px",
                    backgroundColor: "none",
                  }}
                  type="submit"
                />
              </button>
            </form>
          </Col>
          <Col sm={12} md={6}>
            <div>
              <h2 className="booking-tite">My Booking List</h2>
              {bookings.map((booking) => (
                <div className="booking-list">
                  <div className="img">
                    <img src={booking.img} alt="" />
                  </div>
                  {/* <div className="title">
                    <h4>{booking.title}</h4>
                  </div> */}
                  <div className="location">
                    <h4>{booking.location}</h4>
                  </div>

                  <div className="button-pending button">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bk-button"
                    >
                      {booking.status}
                    </button>
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
                    <Link to="/vacations">
                      <button className="bk-button">Add New</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserManageBooking;
