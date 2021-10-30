import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../contexts/useAuth";

const Booking = () => {
  const { bookingId } = useParams();
  const { user } = useAuth();
  const [vacation, setVacation] = useState({});
  useEffect(() => {
    fetch(`https://fierce-fjord-19214.herokuapp.com/vacations/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setVacation(data));
  }, []);

  //   Handle Add to Cart (Buy now Button)

  const handleAddToCart = () => {
    const data = vacation;
    data.email = `${user.email}`;
    fetch("https://fierce-fjord-19214.herokuapp.com/packages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={vacation.img} style={{ width: "100%" }} alt="" />
          </Col>
          <Col>
            <h3>{vacation.title}</h3>
            <p style={{ margin: "5%" }}>{vacation.details}</p>

            <button
              onClick={() => handleAddToCart(bookingId)}
              className="btn btn-warning"
            >
              Buy Now
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
