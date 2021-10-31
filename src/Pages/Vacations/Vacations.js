import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DisplayVacations from "../DisplayPages/DisplayVacations/DisplayVacations";

const Vacations = () => {
  const [vacations, SetVacations] = useState([]);
  useEffect(() => {
    fetch("https://fierce-fjord-19214.herokuapp.com/vacations")
      .then((res) => res.json())
      .then((data) => SetVacations(data));
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Vacations</h2>
      <Row xs={1} md={4} className="g-4 mx-5 my-5">
        {vacations.map((vacation) => (
          <DisplayVacations
            key={vacation._id}
            vacation={vacation}
          ></DisplayVacations>
        ))}
      </Row>
    </div>
  );
};

export default Vacations;
