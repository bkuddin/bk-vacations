import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageVacations = () => {
  const [vacations, setVacations] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  useEffect(() => {
    fetch("https://fierce-fjord-19214.herokuapp.com/vacations")
      .then((res) => res.json())
      .then((data) => setVacations(data));
  }, [isDeleted]);

  //   Handle Delete Button
  const handleDelete = (id) => {
    fetch(`https://fierce-fjord-19214.herokuapp.com/vacations/${id}`, {
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

  return (
    <div>
      <Row xs={1} md={4} className="g-4 mx-5 my-5">
        {vacations.map((vacation, index) => (
          <div>
            <Col>
              <Card>
                <Card.Img variant="top" src={vacation.imgTitle} />
                <Card.Img variant="top" src={vacation.img} />
                <Card.Body>
                  <Card.Title>{vacation.title}</Card.Title>
                  <Card.Text>
                    <h2>{vacation.location}</h2>
                    <p>{vacation.details}</p>
                  </Card.Text>
                </Card.Body>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(vacation._id)}
                >
                  Delete
                </button>{" "}
                <br />
                <Link to={`/update-vacations/${vacation._id}`}>
                  <button className="btn btn-success">Update</button>
                </Link>
                <br />
                <button
                  onClick={() => handleAddToCart(index)}
                  className="btn btn-warning"
                >
                  Buy Now
                </button>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ManageVacations;
