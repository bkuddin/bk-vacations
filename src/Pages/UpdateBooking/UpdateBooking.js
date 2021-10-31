import React, { useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const UpdateBooking = () => {
  const { updateId } = useParams();
  const [booking, setBooking] = useState({});

  // React Hook
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch(`https://fierce-fjord-19214.herokuapp.com/packages/${updateId}`, {
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

  fetch(`https://fierce-fjord-19214.herokuapp.com/packages/${updateId}`)
    .then((res) => res.json())
    .then((data) => setBooking(data));
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
        <input {...register("status")} placeholder="Status" />

        <input type="number" {...register("price")} placeholder="price" />

        <input {...register("imgTitle")} placeholder="Title Image" />

        <input {...register("img")} placeholder="image url" />
        <input type="submit" style={{ backgroundColor: "#FFB192" }} />
      </form>
    </div>
  );
};

export default UpdateBooking;
