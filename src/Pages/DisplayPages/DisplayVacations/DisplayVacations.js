import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayVactions.css";

const DisplayVacations = ({ vacation }) => {
  const { location, imgTitle, img, price } = vacation;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={imgTitle} />
          <Card.Body>
            <Card.Title>{location}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Card.Text
              style={{
                backgroundColor: "#FFB192",
                padding: "5%",
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
              <Link>
                <button className="bk-button">Booking</button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayVacations;
