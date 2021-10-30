import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayVactions.css";

const DisplayVacations = ({ vacation }) => {
  const { _id, location, imgTitle, img, price, title } = vacation;

  // ---------For booking post Start ()

  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    fetch("https://fierce-fjord-19214.herokuapp.com/vacations")
      .then((res) => res.json())
      .then((data) => setVacations(data));
  }, []);
  //   Handle Add to Cart (Buy now Button)
  const handleAddToCart = (index) => {
    const data = vacations[index];
    data.email = "bkUddin@gmail.com";
    fetch("https://fierce-fjord-19214.herokuapp.com/packages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  // ---------For booking post End ()
  return (
    <div>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={imgTitle}
            style={{ width: "80%", margin: "0 auto" }}
          />
          <Card.Body>
            <Card.Title>{location}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Card.Text
              style={{
                marginTop: "5%",
                borderRadius: "15px",
              }}
            >
              <p>{title}</p>
            </Card.Text>
            <span
              style={{
                backgroundColor: "#FFB192",
                padding: "8%",
                marginTop: "5%",
                borderRadius: "15px",
              }}
            >
              Start <span style={{ color: "#333" }}>From </span>{" "}
              <span
                style={{
                  color: "#fc4902",
                  marginRight: "2%",
                  fontSize: "1.5rem",
                }}
              >
                {" "}
                ${price}
              </span>
              <Link to={`/booking/${_id}`}>
                <button className="bk-button">Check</button>
              </Link>
            </span>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayVacations;
