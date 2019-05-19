import React from "react";
import { NavLink } from "react-router-dom";
import BlogPageContent from "./BlogPageContent";
import AppRouter from "../routers/AppRouter";

const Footer = props => (
  <footer className="footer red darken-3">
    <div className="nav-wrapper">
      <div className="container center">
        <h1 className="footer-text">
          Contact me for a step-by-step walkthrough
          <br />
          for how you too can graduate early.
        </h1>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/degreemastery101/"><img src="/images/ig.svg" className="social-icons" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCHm1xZXGiawXUKr5ownZ6SA?view_as=public"><img src="/images/yt.svg" className="social-icons" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
