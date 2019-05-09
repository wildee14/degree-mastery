import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeaderImage from "./HeaderImage";

const BodyFlashy = () => (
  <div>
    <Header />
    <HeaderImage />
    <div className="cool">
      <div className="container">
        <div className="room">
          <ul className="collection">
            <li className="collection-item center">
              <strong className="moreroom">
                GRADUATE IN TWO YEARS WITH EASE
              </strong>
              <br />
              <Link
                to="/about"
                className="waves-effect waves-light btn red darken-3"
              >
                Learn More
              </Link>
            </li>
            <li className="collection-item">
              <strong>Second Item</strong>
            </li>
            <li className="collection-item">
              <strong>Third Item</strong>
            </li>
            <li className="collection-item">
              <strong>Fourth Item</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default BodyFlashy;
