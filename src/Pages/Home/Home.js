import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../contexts/useAuth";
import Blog from "../Blog/Blog";
import MobileApp from "../MobileApp/MobileApp";
import Slides from "../Slides/Slides";
import Vacations from "../Vacations/Vacations";

const Home = () => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div>
      <Slides></Slides>
      <Vacations></Vacations>
      <Blog></Blog>
      <MobileApp></MobileApp>
    </div>
  );
};

export default Home;
