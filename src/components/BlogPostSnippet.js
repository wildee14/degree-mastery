import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";

class BlogPageSnippet extends React.Component {
  render() {
    if (this.props.blog.tags) {
      var categories = (
        <div>
            Topics:
            {this.props.blog.tags.split(",").map((category, index) => (
              <NavLink
                key={category}
                className="category"
                to={"/blogs/" + category}
              >
                {category}
                {index < category.length ? "," : ""}
              </NavLink>
            ))}
        </div>
      );
    } else {
      var categories = <p />;
    }

    return (
      <div className="card-flex">
        <div className="card hoverable">
          <div className="card-image">
            <Link to={"/blog/" + this.props.blog.url}>
              <img className="pic" width="100%" height="100%" />
            </Link>
          </div>
          <div className="card-content">
            <h1 className="card-title">
              <strong className="bolder-font">{this.props.blog.title}</strong>
            </h1>
            <p className="author">
              {this.props.blog.author.LastName},
              {this.props.blog.author.FirstName}
              <br />
              {moment(this.props.blog.date).fromNow()}
              <br />
            </p>
            {categories}
            <p className="snippet">
              {this.props.blog.snippet}.....
              <br />
              <Link to={"/blog/" + this.props.blog.url}>
                [Read More]
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPageSnippet;
