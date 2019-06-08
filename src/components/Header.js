import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BlogPageContent from "./BlogPageContent";
import AppRouter from "../routers/AppRouter";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="red darken-3">
          <div className="nav-wrapper">

            <div className="container">
              <NavLink
                activeClassName="is-active"
                to="/"
                className="brand-logo"
              >
                Degree Mastery
              </NavLink>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="nav-cell">
                  <NavLink activeClassName="is-active" to="/blogs">
                    Directory
                  </NavLink>
                </li>
                <li className="nav-cell">
                  <NavLink
                    activeClassName="is-active"
                    className="dropdown-button"
                    data-activates="css1"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-cell">
                  <NavLink activeClassName="is-active" to="/about-me">
                    About Me
                  </NavLink>
                </li>
                <li className="nav-cell">
                  <NavLink activeClassName="is-active" to="/topics">
                    Topics
                  </NavLink>
                </li>
              </ul>

            </div>
          </div>
        </nav>
             
      </header>
    );
  }
}

export default Header;
