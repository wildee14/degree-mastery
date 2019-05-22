import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";

class BlogPageSnippet extends React.Component {
  render() {
    if (this.props.blog.tags) {
      var categories = (
        <div>
            Tags:
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
    let styles = {
      margin: `5%`
    }
    return (
      <div className="card-flex">
        <div className="card hoverable" style={styles}>
          <div className="card-image">
              <img src="/images/test.jpg" />
          </div>
          <div className="card-content">
            <h1 className="card-title">
              <strong className="bolder-font">{this.props.blog.title}</strong>
            </h1>
            <p className="author">
              {this.props.blog.author.LastName},
              {this.props.blog.author.FirstName}
              &nbsp; &nbsp;| &nbsp;&nbsp;
              {moment(this.props.blog.date).fromNow()}
            </p>
            <div className="tags">{categories}</div>
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
