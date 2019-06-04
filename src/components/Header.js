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
            
              <ul id="slide-out" className="sidenav">
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
              </ul>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              
            </div>
          </div>
        </nav>
             
      </header>
    );
  }
}

export default Header;
