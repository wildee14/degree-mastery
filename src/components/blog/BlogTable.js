import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import BlogPostSnippySnippet from "./BlogPostSnippySnippet";

class BlogTable extends React.Component {
  render() {
    var rows = this.props.blogs.map(blog => (
      <BlogPostSnippySnippet key={blog.url} blog={blog} />
    ));
    return (
      <div className="table">
        <table className="striped">
          <thead>
            <tr>
              <th width="30%">Post</th>
              <th width="10%">Date</th>
              <th width="20%">Tags</th>
              <th width="40%">Brief Snippet</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default BlogTable;
