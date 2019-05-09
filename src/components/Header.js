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
                  <NavLink activeClassName="is-active" to="/video">
                    Video
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
                  <ul className="dropdown-content" id="css1">
                    <li>
                      <NavLink className="red-text" to="/blogs">
                        Directory
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="red-text" to="/blogs/loans">
                        Student Loans
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="red-text" to="/blogs/minors">
                        Minors
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-cell">
                  <NavLink activeClassName="is-active" to="/podcast">
                    Podcast
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
