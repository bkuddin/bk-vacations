import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../images/bk-vacations-logo-black.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5" style={{ backgroundColor: "#F2ECE1", padding: "5%" }}>
      <Container>
        <Row>
          <Col sm={6}>
            <h3 style={{ textAlign: "left" }}>
              <img src={Logo} alt="" style={{ width: "30%" }} />
            </h3>
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
            <Link className="footer-link" to="/">
              About
            </Link>{" "}
            <br />
            <Link className="footer-link" to="/">
              Payment Plans
            </Link>{" "}
            <br />
            <Link className="footer-link" to="/">
              Group Vactions
            </Link>{" "}
            <br />
            <Link className="footer-link" to="/">
              Gift Cards
            </Link>{" "}
            <br />
          </Col>
          <Col sm={3}>
            <h5>Let us help you</h5>
            <Link className="footer-link" to="/">
              Customer Support
            </Link>{" "}
            <br />
            <Link className="footer-link" to="/">
              Health & Sefety Measures
            </Link>{" "}
            <br />
            <Link className="footer-link" to="/">
              FAQs
            </Link>{" "}
            <br />
            <Link className="footer-link" to="/">
              Manage Your Reservation
            </Link>{" "}
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
