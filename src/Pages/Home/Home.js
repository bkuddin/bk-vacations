import React from "react";
import Blog from "../Blog/Blog";
import Slides from "../Slides/Slides";
import Vacations from "../Vacations/Vacations";

const Home = () => {
  return (
    <div>
      <Slides></Slides>
      <Vacations></Vacations>
      <Blog></Blog>
    </div>
  );
};

export default Home;
