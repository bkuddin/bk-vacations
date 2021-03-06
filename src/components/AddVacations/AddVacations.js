import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddVacations.css";

const AddVacations = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://fierce-fjord-19214.herokuapp.com/vacations", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Data added, Successfully!");
          reset();
        }
      });
  };
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

export default AddVacations;
