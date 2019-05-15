import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div >

        <div className="container sidebar">
          <div className="row">
            <div className="col xl12 l12 m4 s6">
              <div className="card">
                <div className="card-image">
                  <Link to={"/blogs/"}>
                    <img
                      className="pic"
                      // src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c4b5fcc53abd6158286dc86a9be4bee&auto=format"
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <h2 className="card-title">
                    Early Grad Video Course
                  </h2>
                </div>
              </div>
            </div>
            <div className="col xl12 l12 m4 s6">
              <div className="card">
                <div className="card-image">
                  <Link to={"/blogs/"}>
                    <img
                      className="pic"
                      // src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c4b5fcc53abd6158286dc86a9be4bee&auto=format"
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <span className="overflow-text card-title">Topics:</span>
                  <div>
                    {this.props.categories.map((category, index) => (
                      
                      <Link
                        key={category + "1"}
                        to={"/blogs/" + category}
                      >
                        {category}
                        {index < category.length ? "\n" : ""}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col xl12 l12 m4 s6">
              <div className="card">
                <div className="card-image">
                  <Link to={"/blogs/"}>
                    <img
                      className="pic"
                      // src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c4b5fcc53abd6158286dc86a9be4bee&auto=format"
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <h2 className="card-title">
                    Subscribe to the newsletter!
                    Get the latest on college credit hacking
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col s1" />
      </div>
    );
  }
}

export default Sidebar;
