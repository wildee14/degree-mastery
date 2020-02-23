import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class BlogPostSnippySnippet extends React.Component {
  render() {
    if (this.props.blog.tags) {
      var categories = (
        <td>
          {this.props.blog.tags.split(",").map((category, index) => (
            <Link key={category} className="category" to={"/blogs/" + category}>
              {category}
              {index < category.length ? "," : ""}
            </Link>
          ))}
        </td>
      );
    } else {
      var categories = <td />;
    }

    return (
      <tr>
        <td>
          <Link
            key={this.props.blog.url}
            to={"/blog/" + this.props.blog.url}
          >
            {this.props.blog.title}
          </Link>
        </td>
        <td>{moment(this.props.blog.date).calendar()}</td>
        {categories}
        <td className="snippet">{this.props.blog.snippet.substring(0, 50)}..</td>
      </tr>
    );
  }
}

export default BlogPostSnippySnippet;
