import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5" style={{ backgroundColor: "#F2ECE1", padding: "5%" }}>
      <Container>
        <Row>
          <Col sm={6}>
            <h3 style={{ textAlign: "left" }}>BK VACATIONS</h3>
            <p style={{ textAlign: "left" }}>
              For nearly four months, BK Vacations has been fulfilling vacation
              fantasies. At BK, we are dedicated to designing holidays that far
              surpass your expectations and offering the most extraordinary
              end-to-end experience possible. The experiences and memories you
              create on a BK trip define us, and it is our goal to present you
              with the opportunity to experience something unique.
            </p>
          </Col>
          <Col sm={3}>
            <h5>Learn about us </h5>
            <Link>About</Link> <br />
            <Link>Payment Plans</Link> <br />
            <Link>Group Vactions</Link> <br />
            <Link>Gift Cards</Link> <br />
          </Col>
          <Col sm={3}>
            <h5>Let us help you</h5>
            <Link>Customer Support</Link> <br />
            <Link>Health & Sefety Measures</Link> <br />
            <Link>FAQs</Link> <br />
            <Link>Manage Your Reservation</Link> <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
