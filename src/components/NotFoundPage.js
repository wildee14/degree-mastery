import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeaderImage from "./HeaderImage";

const NotFoundPage = () => (
  <div>
    <Header />
    <HeaderImage />
    <div className="center">
      <h1>404 - <Link to="/">Go home</Link></h1>
    </div>
  </div>
);

export default NotFoundPage;
