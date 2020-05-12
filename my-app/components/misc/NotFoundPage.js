import React from "react";
import Link from "next/link";
import Header from "../header/Header";
import HeaderImage from "../header/HeaderImage";

const NotFoundPage = () => (
  <div>
    <Header />
    <HeaderImage />
    <div className="center">
      <h1>
        404 - <Link href="/">Go home</Link>
      </h1>
    </div>
  </div>
);

export default NotFoundPage;
