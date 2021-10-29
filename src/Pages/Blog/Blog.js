import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blog.css";
import img0 from "../../images/0.png";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div style={{ marginTop: "8%", marginBottom: "8%" }}>
      <Container>
        <Row>
          <Col sm>
            <img src={img2} alt="" />
            <div style={{ textAlign: "left", margin: "5%" }}>
              <h4>Instant savings with BK Vacations Rewards</h4>
              <p>
                You may take advantage of features such as Member Prices, which
                can save you up to 20% or more on certain hotels. Certain
                conditions may apply.
              </p>
              <span>
                <Link>Read more...</Link>
              </span>
            </div>
          </Col>
          <Col sm>
            <img src={img3} alt="" />
            <div style={{ textAlign: "left", margin: "5%" }}>
              <h4>Discover the world's most amazing fantasy places</h4>
              <p>
                Travel allows you to discover new things. They might be
                destinations you've always desired to see or civilizations
                you've read about in your books.
              </p>
              <span>
                <Link>Read more...</Link>
              </span>
            </div>
          </Col>
          <Col sm>
            <img src={img4} alt="" />
            <div style={{ textAlign: "left", margin: "5%" }}>
              <h4>Travel hacking is a way to get travel for a low cost</h4>
              <p>
                Always Maximize Your Points Earnings — To accumulate rewards
                points, you either have to make it happen on your own or
                actually earn rewards points from.
              </p>
              <span>
                <Link>Read more...</Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
