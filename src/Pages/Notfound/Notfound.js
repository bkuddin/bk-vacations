import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../../images/not-found.png";

const Notfound = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container className="not-found my-5">
        <Row style={{ alignItems: "center" }}>
          <Col md="5">
            <h3
              style={{
                fontSize: "10rem",
                fontWeight: "bolder",
                color: "#FFB191",
              }}
            >
              404
            </h3>
            <p>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                ooops, something went wrong
              </span>
            </p>
            <Link to="/home">
              <button className="bk-button">Go Back</button>
            </Link>
          </Col>
          <Col md="7">
            <img style={{ width: "90%" }} src={notFound} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Notfound;
