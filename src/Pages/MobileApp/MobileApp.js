import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./MobileApp.css";
import img1 from "../../images/0.png";
import { Col, Container, Row } from "react-bootstrap";

const MobileApp = () => {
  const [value, setValue] = useState();
  return (
    <div className="mobile-app">
      <Container>
        <Row>
          <Col sm>
            {" "}
            <img src={img1} alt="" style={{ width: "100%" }} />
          </Col>
          <Col sm>
            <div
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                marginTop: "20%",
                textAlign: "left",
                padding: "3%",
              }}
            >
              <h4>Plan your trip in a snap on the app</h4>
              <p>
                From home or hammock, organize your entire escape and explore
                app offers
              </p>
              <PhoneInput
                className="phone-input"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </div>
          </Col>
          <Col sm>
            <button className="bk-button">Get the app</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobileApp;
