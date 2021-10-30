import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../contexts/useAuth";
import "./UserManageBooking.css";

const UserManageBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const email = `${user.email}`;

  //   User Manage
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
  const onSubmit = (data) => console.log(data);

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
          <Col>
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

              <input type="submit" />
            </form>
          </Col>
          <Col>
            <Row xs={1} md={3} className="g-4 mx-5 my-5">
              {bookings.map((booking) => (
                <div>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={booking.imgTitle} />
                      <Card.Img variant="top" src={booking.img} />
                      <Card.Body>
                        <Card.Title>{booking.title}</Card.Title>
                        <Card.Text>
                          <h5>{booking.location}</h5>
                        </Card.Text>
                      </Card.Body>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <br />
                      <button className="bk-button">Updated</button> <br />
                    </Card>
                  </Col>
                </div>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserManageBooking;
