import React, { useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const UpdateVacations = () => {
  const { vacationId } = useParams();
  const [vacation, setVacation] = useState({});

  // React Hook
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch(`http://localhost:5000/vacations/${vacationId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully Updated");
          reset({});
        }
      });
  };
  // React Hook end

  fetch(`http://localhost:5000/vacations/${vacationId}`)
    .then((res) => res.json())
    .then((data) => setVacation(data));
  return (
    <div className="add-vacation">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("location", { required: true, maxLength: 40 })}
          placeholder="Location"
        />
        <input
          {...register("title", { required: true, maxLength: 60 })}
          placeholder="Title"
        />
        <textarea {...register("details")} placeholder="details" />

        <input type="number" {...register("price")} placeholder="price" />

        <input {...register("imgTitle")} placeholder="Title Image" />

        <input {...register("img")} placeholder="image url" />
        <input type="submit" style={{ backgroundColor: "#FFB192" }} />
      </form>
    </div>
  );
};

export default UpdateVacations;
