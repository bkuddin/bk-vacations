import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { bookingId } = useParams();
  const [vacation, setVacation] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/vacations/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setVacation(data));
  }, []);
  return (
    <div>
      <h3>{vacation.title}</h3>
      <img src={vacation.img} style={{ width: "20%" }} alt="" />
      <p style={{ margin: "5%" }}>{vacation.details}</p>
    </div>
  );
};

export default Booking;
