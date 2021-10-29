import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayVactions.css";

const DisplayVacations = ({ vacation }) => {
  const { location, imgTitle, img, price, title } = vacation;
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
              <Link>
                <button className="bk-button">Booking</button>
              </Link>
            </span>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayVacations;
