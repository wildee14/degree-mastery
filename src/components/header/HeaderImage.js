import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "../../routers/AppRouter";

const HeaderImage = props => (
    <div className="header-image center">
      <h1 className="header-text row">
          <span className="col l4 m6 s6 center-align">Shorten College</span>
          <span className="col l4 grad" />
          <span className="col l4 m6 s6 center-align">Experience More</span>
      </h1>
    </div>
);

export default HeaderImage;
